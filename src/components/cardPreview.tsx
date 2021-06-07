import React from 'react';
import { Card, Avatar } from 'antd';
import { Title, Text } from '../lib/Typography';
import { UserOutlined } from '@ant-design/icons';
import useWorkSpace from '../hooks/WorkSpace/hook/useWorkSpace';

const CardPreview = () => {
    const { themeColor, workSpaceName, workSpaceUrl, workSpacePrivacy, workSpacePersonQty } = useWorkSpace();

    const getPersonal = workSpacePersonQty === 1 ? 'Sólo yo' :
        `Hasta ${workSpacePersonQty} ${workSpacePersonQty === 500 ? 'o más ' : ''} trabajadores`;

    return (
        <Card bordered={true}>
            <Title style={{ color: themeColor }} level={3}>{!workSpaceName ? 'Mi espacio' : workSpaceName}</Title>
            <Title style={{ color: themeColor }} level={5}>Logo</Title>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Avatar size={67} style={{ borderColor: themeColor, borderWidth: 1, borderStyle: 'solid' }} icon={<UserOutlined />} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Text style={{ marginLeft: 10, color: themeColor }}>{!workSpaceUrl ? 'mi_dominio' : workSpaceUrl}.dofleini.com</Text>
                    <Text style={{ marginLeft: 10, color: themeColor }}>{workSpacePrivacy === 'private' ? 'Privado' : 'Público'}</Text>
                    <Text style={{ marginLeft: 10, color: themeColor }}>
                        Personal : {getPersonal}
                    </Text>
                </div>
            </div>
        </Card>)
};

export default CardPreview;