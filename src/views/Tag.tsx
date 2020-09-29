import React from 'react';
import { useParams } from 'react-router-dom';
import { useTags } from '../useTags';


type Params = {
    id: string
}

const Tag: React.FC = () => {
    const {findTag} = useTags();
    let {id} = useParams<Params>();
    const tag = findTag(parseInt(id))

    return (
        <h1>{tag.name}</h1>
    )
}

export {Tag};