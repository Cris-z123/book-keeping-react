import { useEffect, useState } from "react";
import { useUpdate } from "./useUpdate";

type RecordItem = {
    tagIds: number[]
    note:　string
    category: '+' | '-'
    amount: number
    createdAt: string
}
type newRecordItem = Omit<RecordItem, 'createdAt'>

export const useRecords = () => {
    const [records, setRecords] = useState<RecordItem[]>([])

    const addRecord = (newRecord: newRecordItem) => {
        if(newRecord.amount <= 0) {
            alert('记账不能为零')
            return false;
        }
        const record = {...newRecord, createdAt: (new Date()).toISOString()};
        setRecords([...records, record]);
        return true;
    };

    useEffect( () => {
        setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'))
    }, []);

    useUpdate(() => {
        window.localStorage.setItem('record', JSON.stringify(records))
    }, [records]);

    return {records, addRecord};
};