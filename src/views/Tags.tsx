import React, { useState } from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import Icon from '../components/Icons';
import { Link } from 'react-router-dom';


const TagList = styled.ol`
  font-size: 16px;
  background: white;
  > li {
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    margin-left: 16px;
    > a {
      display: flex;
      justify-content: space-between;
      align-items:center;
      padding: 12px 16px;
    }
  }
`
const Button = styled.button`
  font-size: 18px;
  border: none;
  padding: 8px 12px;
  background: #66CCCC;
  border-radius: 4px;
  color: white;
`
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`

function Tags() {
  const [tags] = useState<string[]>(['衣', '食', '住', '行']);
  
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key ={tag}>
            <Link to={'/tag/' + tag}>
              <span>{tag}</span>
              <Icon name="right" />
            </Link>
          </li>
        )}
      </TagList>
      <Center>
        <Button>新增标签</Button>
      </Center>
    </Layout>
  )
}

export default Tags;