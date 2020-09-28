import React from 'react';

//node.js获取icons文件夹内所有文件
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext)
try {
    importAll(require.context('icons', true, /\.svg$/))
} catch (error) {
    console.log(error);
}

type Props = {
    name: String
}

const Icon = (props: Props) => {
    return (
        <svg className="icon">
            <use xlinkHref={'#' + props.name} />
        </svg>
    )
}

export default Icon;