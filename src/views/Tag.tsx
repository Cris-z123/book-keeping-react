import Button from 'components/Button';
import Icon from 'components/Icons';
import Input from 'components/Input';
import Layout from 'components/Layout';
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useTags } from 'useTags';

const Topbar = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 20px;
    padding: 14px;
    background: #66CCCC;
`
const Space = styled.span`
    width: 1em;
    height: 1em;
`
const InputWrapper = styled.div`
    background: white;
    padding: 0 16px;
    margin-top: 16px;
`
const IconWrapper = styled.div`
    transform: rotate(180deg);
`

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`

type Params = {
    id: string
}

const Tag: React.FC = () => {
    const {findTag, updateTag, deleteTag} = useTags();
    let {id: idString} = useParams<Params>();
    const tag = findTag(parseInt(idString))

    return (
        <Layout>
            <Topbar>
                <IconWrapper>
                    <Icon name="right" />
                </IconWrapper>
                <span>编辑标签</span>
                <Space></Space>
            </Topbar>
            {tag ? <div>
                <InputWrapper>
                    <Input label="标签名" 
                        type="text" 
                        placeholder="标签名"
                        value={tag.name}
                        onChange={(e) => {
                            updateTag(tag.id, {name:e.target.value})
                        }} />
                </InputWrapper>
                <Center>
                    <Button onClick={() => {
                        deleteTag(tag.id)
                    }}>删除标签</Button>
                </Center>
            </div> : <Center>标签不存在</Center>}
        </Layout>
    )
}

export {Tag};