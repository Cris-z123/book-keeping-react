import styled from 'styled-components';
import React, { useState } from 'react';

const Wrapper = styled.section`
  font-size: 24px;
  background:#99CCFF;
  > ul{
    display:flex;
    > li {
      width: 50%;
      color: #ffffff;
      text-align:center;
      padding: 16px 0;
      position:relative;
      &.selected::after{
        content: '';
        display:block; 
        height: 4px;
        background:#336699;
        border-radius: 12px;
        position:absolute;
        bottom:0;
        width: 80%;
        left: 10%;
      }
    }
  }
`;

type Props = {
  value: '+' | '-';
  onChange: (value: '-' | '+') => void;
}

const CategorySection: React.FC<Props> = (props) => {
  const categoryMap = {'+': '收入', '-': '支出'};
  const [categoryList] = useState<('-' | '+')[]>(['-', '+'])
  const category = props.value;
  return (
    <Wrapper>
    <ul>
      {categoryList.map(c => 
        <li key={c}
            className={category === c ? 'selected' : ''}
            onClick={() => {props.onChange(c);}}>
              {categoryMap[c]}
            </li>
      )}
    </ul>
    </Wrapper>
  )
}

export {CategorySection};