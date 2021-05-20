import { RecordItem, useRecords } from "hook/useRecords";
import { useTags } from "hook/useTags";
import React, { ReactNode, useState } from "react";
import Layout from "../components/Layout";
import { CategorySection } from "./money/CategorySection";
import dayjs from "dayjs";
import styled from "styled-components";

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  border-bottom: 1px solid #ccccff;
  > .note {
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`;
const Header = styled.p`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.25),
    inset 0 5px 5px -5px rgba(0, 0, 0, 0.25);
`;

function Statistics() {
  const [category, setCategory] = useState<"IN" | "OUT">("IN");
  const { records } = useRecords();
  const { getName } = useTags();
  const hash: { [K: string]: RecordItem[] } = {};
  const selectedRecords = records.filter((r) => r.category === category);

  selectedRecords.forEach((r) => {
    const key = dayjs(r.createdAt).format("YYYY年MM月DD日");
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(r);
  });
  const recordArray = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;
    return 0;
  });

  return (
    <Layout>
      <CategorySection
        value={category}
        onChange={(value) => setCategory(value)}
      ></CategorySection>

      {recordArray.map(([date, records]) => (
        <div>
          <Header>{date}</Header>
          <div>
            {records.map((r) => {
              return (
                <Item>
                  <div className="tags oneLine">
                    {r.tagIds
                      .map((tagId) => <span key={tagId}>{getName(tagId)}</span>)
                      .reduce(
                        (result, span, index, array) =>
                          result.concat(
                            index < array.length - 1 ? [span, "，"] : [span]
                          ),
                        [] as ReactNode[]
                      )}
                  </div>
                  {r.note && <div className="note">{r.note}</div>}
                  <div className="amount">￥{r.amount}</div>
                </Item>
              );
            })}
          </div>
        </div>
      ))}
    </Layout>
  );
}

export default Statistics;
