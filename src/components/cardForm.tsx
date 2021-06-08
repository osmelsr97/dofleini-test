import React, { useState } from 'react';
import { Card, Avatar, Button, Form, Input, Row, Upload, message, Radio } from 'antd';
import { UserOutlined, CloudUploadOutlined } from '@ant-design/icons';
import InfoMessage from './infoMessage';
import { UploadChangeParam, UploadFile } from 'antd/lib/upload/interface';
import { FieldData } from 'rc-field-form/lib/interface';
import { ColorPicker } from './colorPicker';
import { Title } from '../lib/Typography';
import { COLOR_PALETTE, PERSONS_QTY } from './../lib/Constants';
import CardPrivacy from './cardPrivacy';
import useWorkSpace from '../hooks/WorkSpace/hook/useWorkSpace';
import {
    CHANGE_THEME_COLOR,
    CHANGE_WORKSPACE_NAME,
    CHANGE_WORKSPACE_PERSONS_QTY,
    CHANGE_WORKSPACE_PRIVACY,
    CHANGE_WORKSPACE_URL
} from '../hooks/WorkSpace/reducer/action/actionTypes';

const CardForm = () => {
    const [form] = Form.useForm();
    const { dispatch } = useWorkSpace();
    const [workSpacePersonQty, setWorkSpacePersonQty] = useState(1);

    const onFieldsChange = (changeFields: FieldData[], allFields: FieldData[]) => {
        const fieldName = changeFields[0].name.toString();
        const fieldValue = changeFields[0].value;
        if (fieldName === 'workSpaceName') {
            dispatch({ type: CHANGE_WORKSPACE_NAME, [fieldName]: fieldValue })
        }
        if (fieldName === 'workSpaceUrl') {
            dispatch({ type: CHANGE_WORKSPACE_URL, [fieldName]: fieldValue })
        }
    }

    const changeColorTheme = (newColor: string) => {
        dispatch({ type: CHANGE_THEME_COLOR, themeColor: newColor })
    }

    const changePrivacy = (privacy: string) => {
        dispatch({ type: CHANGE_WORKSPACE_PRIVACY, workSpacePrivacy: privacy })
    }

    const changePersonQty = (personQty: number) => {
        dispatch({ type: CHANGE_WORKSPACE_PERSONS_QTY, workSpacePersonQty: personQty })
    }

    const uploadProps = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info: UploadChangeParam<UploadFile<any>>) {
            if (info.file.status !== 'uploading') {
                console.log(info.file);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    return (
        <Card bordered={false}>
            <Title level={3}>Configuración</Title>
            <Title level={5}>Logo del espacio</Title>

            <Avatar size={67} icon={<UserOutlined />} />
            <Upload {...uploadProps}>
                <Button
                    icon={<CloudUploadOutlined />}
                    size="middle"
                    style={{ margin: '0 16px', verticalAlign: 'middle', borderRadius: 5 }}>
                    Subir Logo
                </Button>
            </Upload>

            <InfoMessage message={
                <>
                    Este logo identificará tu espacio entre el texto.<br />
                    Preferiblemente sube una imagen .png igual o superior a 65px a 722ppp con fondo transparente.
                </>
            } />

            <Form
                layout='vertical'
                form={form}
                initialValues={{ workSpaceName: '', workSpaceUrl: '' }}
                onFieldsChange={(changeFields, allFields) => onFieldsChange(changeFields, allFields)}
                style={{ marginTop: 30 }}>

                <Form.Item label="Nombre del espacio" name="workSpaceName">
                    <Input placeholder="Ep: Mi espacio de trabajo" />
                </Form.Item>

                <Form.Item label="URL del espacio (dirección web)">
                    <Form.Item name="workSpaceUrl" noStyle>
                        <Input placeholder="Ep: Mi dominio" suffix=".dofleini.com" />
                    </Form.Item>
                    <InfoMessage message={
                        <> Puedes cambiar la URL de tu espacio (dirección web)
                        en cualquier momento, pero por cortesía hacia tus compañeros de trabajo y otros usuarios de
                        Plankton, porfavor no lo hagas muy seguido :) <br />

                        Nota: Si cambias la URL de tu espacio, Plankton automáticamente redireccionará desde la
                        antigua dirección hacia la nueva. En cualquier caso, deberías asegurarte que tus compañeros
                        sepan acerca del cambio porque la dirección anterior pasará a estar libre y puede ser usada
                        por otro espacio en el futuro. </>
                    } />
                </Form.Item>

                <Form.Item
                    label="¿Cuantas personas trabajarán contigo incluyendote a ti?"
                    style={{ justifyContent: 'space-between' }}                    >
                    <Row gutter={[16, 16]} justify='start'>
                        <Form.Item name='workSpacePersonQty' noStyle>
                            <Radio.Group value={workSpacePersonQty} onChange={(e) => setWorkSpacePersonQty(e.target.value)} defaultValue={1}>
                                {PERSONS_QTY.map((value) => (
                                    <Radio.Button
                                        style={{ marginRight: 10 }}
                                        key={value.value}
                                        value={value.value}>
                                        {value.name}
                                    </Radio.Button>
                                ))}
                            </Radio.Group>
                        </Form.Item>
                    </Row>
                    <InfoMessage message={
                        <>
                            Este logo identificará tu espacio entre el texto.<br />
                            Preferiblemente sube una imagen .png igual o superior a 65px a 722ppp con fondo transparente.
                        </>
                    } />
                </Form.Item>

                <Form.Item label="Color de tema">
                    <div className="colors">
                        <ul>
                            {Object.keys(COLOR_PALETTE).map((value) => (
                                <li key={COLOR_PALETTE[value]}>
                                    <ColorPicker color={COLOR_PALETTE[value]} onClick={changeColorTheme} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </Form.Item>

                <Form.Item label="Privacidad del espacio">
                    <CardPrivacy onClick={(p) => changePrivacy(p)} />
                </Form.Item>

                <Form.Item >
                    <Button
                        style={{ marginRight: 10 }}
                        type="primary"
                        onClick={() => console.log('Submit')}
                        /* htmlType="submit" */>
                        Guardar Cambios
                    </Button>
                    <Button type="ghost">Descartar</Button>
                </Form.Item>
            </Form>
        </Card >
    )

};

export default CardForm;