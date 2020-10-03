import { useRecords } from 'hook/useRecords';
import { useTags } from 'hook/useTags';
import React, { useState } from 'react'
import Layout from '../components/Layout'
import { CategorySection } from './money/CategorySection'
import dayjs from 'dayjs';

function Statistics() {
  const [category, setCategory] = useState<'-' | '+'>('-');
  const {records} = useRecords();
  const {getName} = useTags();
    return (
      <Layout>
        <CategorySection 
          value={category}
          onChange={value => setCategory(value)}>
        </CategorySection>

        <div>
          {records.map(r => {
            return <div>
              {r.tagIds.map(tagId => <span>{getName(tagId)}</span>)}
              {r.amount}
              {dayjs(r.createdAt).format('YYYY=MM-DD')}</div>
          })}
        </div>
      </Layout>
    )
  }

  export default Statistics;