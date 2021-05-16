import { useUpdate } from 'hook/useUpdate';
import { useEffect, useState } from 'react';
import { createId } from 'lib/createId';

//封装自定义Hook
const useTags = () => {
    const [tags, setTags] = useState<{ id: number, name: string, billType: 'IN'|'OUT', iconName: string }[]>([]);
    useEffect(() => {
        let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
        if (localTags.length === 0) {
            localTags = [
                { id: createId(), name: '服饰装扮', billType: 'OUT', iconName:'' },
                { id: createId(), name: '餐饮美食', billType: 'OUT', iconName:''  },
                { id: createId(), name: '日用百货', billType: 'OUT', iconName:''  },
                { id: createId(), name: '家居家装', billType: 'OUT', iconName:'' },
                { id: createId(), name: '数码电器', billType: 'OUT', iconName:'' },
                { id: createId(), name: '运动户外', billType: 'OUT', iconName:'' },
                { id: createId(), name: '美容美发', billType: 'OUT', iconName:'' },
                { id: createId(), name: '母婴亲子', billType: 'OUT', iconName:'' },
                { id: createId(), name: '爱宠养宠', billType: 'OUT', iconName:'' },
                { id: createId(), name: '爱车养车', billType: 'OUT', iconName:'' },
                { id: createId(), name: '住房物业', billType: 'OUT', iconName:'' },
                { id: createId(), name: '酒店旅游', billType: 'OUT', iconName:'' },
                { id: createId(), name: '文化休闲', billType: 'OUT', iconName:'' },
                { id: createId(), name: '教育培训', billType: 'OUT', iconName:'' },
                { id: createId(), name: '医疗健康', billType: 'OUT', iconName:'' },
                { id: createId(), name: '生活服务', billType: 'OUT', iconName:'' },
                { id: createId(), name: '公共服务', billType: 'OUT', iconName:'' },
                { id: createId(), name: '公益捐赠', billType: 'OUT', iconName:'' },
                { id: createId(), name: '投资理财', billType: 'IN', iconName:'' },
                { id: createId(), name: '保险费用', billType: 'OUT', iconName:'' },
                { id: createId(), name: '信用借还', billType: 'IN', iconName:'' },
                { id: createId(), name: '充值缴费', billType: 'OUT', iconName:'' },
                { id: createId(), name: '工资收入', billType: 'IN', iconName:'' },
                { id: createId(), name: '转账红包', billType: 'IN', iconName:'' },
                { id: createId(), name: '交通出行', billType: 'OUT', iconName:'' },
                { id: createId(), name: '人情往来', billType: 'OUT', iconName:'' },
            ]
        }
        setTags(localTags);
    }, []);
    useUpdate(() => {
        window.localStorage.setItem('tags', JSON.stringify(tags))
    }, tags);
    const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
    const findTagIndex = (id: number) => {
        let result = -1;
        for (let i = 0; i < tags.length; i++) {
            if (tags[i].id === id) {
                result = i;
                break;
            }
        }
        return result;
    };
    const updateTag = (id: number, { name }: { name: string }) => {
        //获取要修改的tag索引
        const index = findTagIndex(id);
        //深拷贝tags得到tagsClone
        const tagsClone = JSON.parse(JSON.stringify(tags));
        tagsClone.splice(index, 1, { id, name: name });
        setTags(tagsClone);
    };
    const deleteTag = (id: number) => {
        setTags(tags.filter(tag => tag.id !== id));
    };
    const getName = (id: number) => {
        const tag = tags.filter(t => t.id === id)[0];
        return tag ? tag.name : '';
    }
    return { tags, setTags, findTag, updateTag, findTagIndex, deleteTag, getName };
}

export { useTags };