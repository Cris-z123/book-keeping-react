import { useState } from 'react';
import { createId } from './lib/createId';


const defaultTags = [
    {id: createId(), name: '服饰'},
    {id: createId(), name: '餐饮'},
    {id: createId(), name: '住房'},
    {id: createId(), name: '交通'}
]

//封装自定义Hook
const useTags = () => {
    const [tags, setTags] = useState<{id: number, name: string}[]>(defaultTags);
    const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
    const findTagIndex = (id: number) => {
        let result = -1;
        for(let i=0; i<tags.length; i++) {
            if(tags[i].id === id) {
                result = i;
                break;
            }
        }
        return result;
    }
    const updateTag = (id: number, {name}: {name: string}) => {
        //获取要修改的tag索引
        const index = findTagIndex(id);
        //深拷贝tags得到tagsClone
        const tagsClone = JSON.parse(JSON.stringify(tags));
        tagsClone.splice(index, 1, {id, name: name});
        setTags(tagsClone);
    }
    const deleteTag = (id: number) => {
        setTags(tags.filter(tag => tag.id !== id));
    }
    return {tags, setTags, findTag, updateTag, findTagIndex, deleteTag};
}

export {useTags};