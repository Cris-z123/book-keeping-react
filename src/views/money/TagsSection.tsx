import styled from "styled-components";
import React from "react";
import { useTags } from "hook/useTags";
import Icon from "../../components/Icons";

const Wrapper = styled.section`
  background: #ffffff;
  padding: 12px 16px;
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  overflow: auto;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  > ol {
    > li {
      background: #ffffff;
      border-radius: 14px;
      display: inline-block;
      padding: 6px;
      font-size: 12px;
      color: #004080;
      margin: 4px 10px;
      box-shadow: 1px 1px 1px 1px rgba(0, 0, 255, 0.2);
      &.selected {
        background: linear-gradient(90deg, #abdcff, #0396ff);
      }
    }
  }
`;

const TagWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

type Props = {
  value: number[];
  onChange: (selected: number[]) => void;
};

const TagsSection: React.FC<Props> = (props) => {
  const { tags } = useTags();
  const selectedTagIds = props.value;
  const onToggleTag = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId);
    if (index >= 0) {
      props.onChange(selectedTagIds.filter((t) => t !== tagId));
    } else {
      props.onChange([...selectedTagIds, tagId]);
    }
  };
  const getClass = (tagId: number) =>
    selectedTagIds.indexOf(tagId) >= 0 ? "selected" : "";

  return (
    <Wrapper>
      <ol>
        {tags.map((tag) => (
          <li
            key={tag.id}
            onClick={() => {
              onToggleTag(tag.id);
            }}
            className={getClass(tag.id)}
          >
            <TagWrapper>
              <Icon name={tag.iconName} />
              <span style={{ marginTop: "4px" }}>{tag.name}</span>
            </TagWrapper>
          </li>
        ))}
      </ol>
    </Wrapper>
  );
};

export { TagsSection };
