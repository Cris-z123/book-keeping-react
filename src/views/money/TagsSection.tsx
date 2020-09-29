import styled from 'styled-components';
import React from 'react';
import {useTags} from 'useTags';
import {createId} from 'lib/createId';

const Wrapper = styled.section`
  background: #FFFFFF; 
  padding: 12px 16px;
  flex-grow: 1;
  display:flex; 
  flex-direction: column;
  justify-content: center; 
  align-items: flex-start;
  > ol { 
    margin: 0 -12px;
    > li{
       background: #D9D9D9; 
       border-radius: 16px;
       display:inline-block; 
       padding: 8px 20px; 
       font-size: 14px; 
       margin: 8px 12px;
       &.selected {
         background: #66CCCC;
       }
    }
  }
  > button{
    background:none; 
    border: none; 
    padding: 2px 4px;
    border-bottom: 1px solid #333; 
    color: #666;
    margin-top: 8px;
  }
`;

type Props = {
  value: number[];
  onChange: (selected: number[]) => void;
}

const TagsSection: React.FC<Props> = (props) => {
  const {tags, setTags} = useTags();
  const selectedTagIds = props.value
  const onAddTag = () => {
    const tagName = window.prompt('新增标签的名称为:');
    if(tagName !== null) {
      setTags([...tags, {id: createId(), name: tagName}])
    }
  };
  const onToggleTag = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId);
    if(index >= 0) {
      props.onChange(selectedTagIds.filter(t => t !== tagId));
    } else {
      props.onChange([...selectedTagIds, tagId])
    }
  };
  const getClass = (tagId: number) => selectedTagIds.indexOf(tagId) >=0 ? 'selected' : '';

  return (
    <Wrapper>
        <ol>
          {tags.map(tag => 
            <li key={tag.id}
                onClick={
                  () => {onToggleTag(tag.id);}
                } 
                  className={getClass(tag.id)
                }>{tag.name}
            </li>
          )}
        </ol>
        <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  );
};

export {TagsSection};