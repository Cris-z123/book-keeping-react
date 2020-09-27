import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import {CategorySection} from './money/CategorySection';
import {NoteSection} from './money/NoteSection';
import {NumberPadSection} from './money/NumberPadSection';
import {TagsSection} from './money/TagsSection';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
type Category = '-' | '+'

function Money() {
  const [selected, setSelected] = useState({
    tags: [] as string[],
    note: '',
    category: '-' as Category,
    amount: 0
  })

  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    })
  }

  return (
    <MyLayout>
      <CategorySection value={selected.category}
                  onChange={(category) => onChange({category})} />
      <TagsSection value={selected.tags}
                  onChange={(tags) => onChange({tags})} />
      <NoteSection value={selected.note}
                  onChange={(note) => onChange({note})} />
      <NumberPadSection value={selected.amount}
                  onChange={(amount) => onChange({amount})}
                  onOk={() => {}} />
    </MyLayout>
  )
}

export default Money;