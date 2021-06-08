import React, { useState } from 'react';
import { Card, Radio, Col, Row } from 'antd';
import { Text } from '../lib/Typography';
import useWorkSpace from '../hooks/WorkSpace/hook/useWorkSpace';

interface IProps {
    onClick: (value: string) => void
}

const CardPrivacy = ({ onClick }: IProps) => {
    const [ privacy, setPrivacy ] = useState('private');

    return (
        <Radio.Group onChange={(e) => setPrivacy(e.target.value)} value={privacy}>
            <Row justify='start'>
                <Col span={11} style={{ marginRight: 12 }}>
                    <Card hoverable onClick={() => setPrivacy('private')}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Radio value='private'>
                                Privado
                            </Radio>
                            <Text style={{ marginTop: 5 }}>
                                El contenido será visible sólo para tí y los miembros de tu Organización.
                            </Text>
                        </div>
                    </Card>
                </Col>
                <Col span={11}>
                    <Card hoverable onClick={() => setPrivacy('public')}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Radio value='public' >
                                Público
                            </Radio>
                            <Text style={{ marginTop: 5 }}>
                                Cualquiera con el vínculo podrá ver la actividad de tu Organización."
                            </Text>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Radio.Group>
    );
};

export default CardPrivacy;