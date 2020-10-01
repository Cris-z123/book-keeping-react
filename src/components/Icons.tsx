import React from 'react';
import classnames from 'classnames';

//node.js获取icons文件夹内所有文件
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext)
try {
    importAll(require.context('icons', true, /\.svg$/))
} catch (error) {
    console.log(error);
}

type Props = {
    name: String
} & React.SVGAttributes<SVGElement>

const Icon = (props: Props) => {
    const {name, children, className, ...rest} = props;
    return (
        <svg className={classnames('icon', className)} {...rest}>
            <use xlinkHref={'#' + props.name} />
        </svg>
    )
}

export default Icon;