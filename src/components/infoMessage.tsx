import React from 'react';
import { Col, Typography } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { Text } = Typography;
interface IProps {
    message: string | JSX.Element
}

const InfoMessage = ({ message }: IProps) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: 12 }}>
            <Col style={{ marginRight: 5, color: 'gray' }}> <ExclamationCircleOutlined size={17} /> </Col>
            <Col>
                <Text type="secondary">
                    {message}
                </Text>
            </Col>
        </div>);
}

export default InfoMessage;