import { useRecords } from "hook/useRecords";
import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { CategorySection } from "./money/CategorySection";
import { NoteSection } from "./money/NoteSection";
import { NumberPadSection } from "./money/NumberPadSection";
import { TagsSection } from "./money/TagsSection";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
type Category = "IN" | "OUT";

const defaultFormData = {
  tagIds: [] as number[],
  note: "",
  category: "IN" as Category,
  amount: 0,
};

function Money() {
  const [selected, setSelected] = useState(defaultFormData);
  const { addRecord } = useRecords();

  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj,
    });
  };
  const submit = () => {
    if (addRecord(selected)) {
      alert("已保存");
      setSelected(defaultFormData);
    }
  };

  return (
    <MyLayout>
      <CategorySection
        value={selected.category}
        onChange={(category) => onChange({ category })}
      />
      <TagsSection
        value={selected.tagIds}
        onChange={(tagIds) => onChange({ tagIds })}
      />
      <NoteSection
        value={selected.note}
        onChange={(note) => onChange({ note })}
      />
      <NumberPadSection
        value={selected.amount}
        onChange={(amount) => onChange({ amount })}
        onOk={submit}
      />
    </MyLayout>
  );
}

export default Money;
