import { useUpdate } from 'hook/useUpdate';
import { useEffect, useState } from 'react';
import { createId } from 'lib/createId';

//封装自定义Hook
const useTags = () => {
    const [tags, setTags] = useState<{id: number, name: string}[]>([]);
    useEffect( () => {
        let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
        if(localTags.length === 0) {
            localTags = [
                {id: createId(), name: '服饰'},
                {id: createId(), name: '餐饮'},
                {id: createId(), name: '住房'},
                {id: createId(), name: '交通'}
            ]
        }
        setTags(localTags);
    }, []);
    useUpdate( () => {
        window.localStorage.setItem('tags', JSON.stringify(tags))
    }, [tags]);
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
    const addTag = () => {
        const tagName = window.prompt('新增标签的名称为:');
        if(tagName !== null && tagName !== '') {
          setTags([...tags, {id: createId(), name: tagName}])
        }
      };
    return {tags, setTags, findTag, updateTag, findTagIndex, deleteTag, addTag};
}

export {useTags};