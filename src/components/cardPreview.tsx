import React, { useEffect } from 'react';
import { Card } from 'antd';
import useWorkSpace from '../hooks/WorkSpace/hook/useWorkSpace';
import { ReactComponent as Svg } from './mask-group.svg';
import styled from "styled-components";

const CardPreview = () => {
    const { themeColor, workSpaceName, workSpaceUrl} = useWorkSpace();
    useEffect(() => {
        const tspList = document.getElementsByTagName('tspan');
        Object.keys(tspList).map((val) => {
            const node = tspList[parseInt(val)];
            if (node.textContent?.includes('Mi Espacio') && workSpaceName.length) {
                node.innerHTML = workSpaceName;
            }
            if (node.textContent?.includes('mi_dominio') && workSpaceUrl.length) {
                node.innerHTML = workSpaceUrl + '.dofleini.com';
            }
        })
    }, [workSpaceName, workSpaceUrl, themeColor])

    const svgContainer = ({ className, ...props }: any) => (
        <Svg {...props} className={className} />
    );

    const WorkSpace = styled(svgContainer)`
    .s {
        fill: ${themeColor};
    };
    `;

    return (
        <Card bordered={true}>
            <WorkSpace />
        </Card>)
};

export default CardPreview;