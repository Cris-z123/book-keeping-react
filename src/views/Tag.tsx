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
    background: white;
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
    const {findTag} = useTags();
    let {id} = useParams<Params>();
    const tag = findTag(parseInt(id))

    return (
        <Layout>
            <Topbar>
                <Icon name="left" />
                <span>编辑标签</span>
            </Topbar>
            <Input label="标签名" type="text" placeholder="标签名" />
            <Center>
                <Button>删除标签</Button>
            </Center>
        </Layout>
    )
}

export {Tag};