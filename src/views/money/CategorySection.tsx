import styled from "styled-components";
import React, { useState } from "react";

const Wrapper = styled.section`
  font-size: 24px;
  background: #99ccff;
  padding: 0 60px;
  > ul {
    display: flex;
    > li {
      width: 50%;
      color: #ffffff;
      text-align: center;
      padding: 16px 0;
      position: relative;
      &.selected {
        color: #004080;
        &.selected::after {
          content: "";
          display: block;
          height: 4px;
          background: #336699;
          border-radius: 12px;
          position: absolute;
          bottom: 0;
          width: 50%;
          left: 25%;
        }
      }
    }
  }
`;

type Props = {
  value: "IN" | "OUT";
  onChange: (value: "IN" | "OUT") => void;
};

const CategorySection: React.FC<Props> = (props) => {
  const categoryMap = { IN: "收入", OUT: "支出" };
  const [categoryList] = useState<("IN" | "OUT")[]>(["IN", "OUT"]);
  const category = props.value;
  return (
    <Wrapper>
      <ul>
        {categoryList.map((c) => (
          <li
            key={c}
            className={category === c ? "selected" : ""}
            onClick={() => {
              props.onChange(c);
            }}
          >
            {categoryMap[c]}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export { CategorySection };
