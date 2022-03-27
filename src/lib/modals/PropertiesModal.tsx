import React, {useEffect} from "react";
import {Button, Col, Form, Input, Modal, Space, Row,} from 'antd';

interface Props {
    title: string,
    data: any,
    close: Function,
    addProperty: Function,
}

const PropertiesModal = ({title, data, close, addProperty}: Props) => {
    const [form] = Form.useForm();

    const onFinish = (value: any) => {
        console.log('Received values of form:', value);
        console.log('Received values of form:', value.sights);
        if(addProperty)
            addProperty(value.sights)
    };
    return (
        <Modal centered footer={null} title={title} visible={data.visible} onCancel={() => close()}
               aria-labelledby="contained-modal-title-vcenter">
            <Form form={form} layout="horizontal" onFinish={onFinish} autoComplete="off">
                <Form.List name="sights" initialValue={(data.list || []).length ? data.list : [{id: "", title:"",value: ""}]}>
                    {(fields, {add, remove}) => (
                        <>
                            {fields.map(field => {
                                return (
                                    <Space className={'marginBottom15'} key={field.key}>
                                        <Row gutter={15}>
                                            <Form.Item hidden
                                                name={[field.name, 'id']}
                                            >
                                                <Input/>
                                            </Form.Item>
                                            <Col xxl={11} xl={11} lg={11} md={11} sm={11} xs={11}>
                                                <Form.Item
                                                    label="Төрөл"
                                                    name={[field.name, 'title']}
                                                    rules={[{required: true, message: 'Төрөл оруулна уу'}]}
                                                >
                                                    <Input placeholder={"Clothes, Background..."}/>
                                                </Form.Item>
                                            </Col>
                                            <Col xxl={11} xl={11} lg={11} md={11} sm={11} xs={11}>
                                                <Form.Item
                                                    label="Нэр"
                                                    name={[field.name, 'value']}
                                                    rules={[{required: true, message: 'Нэр оруулна уу'}]}
                                                >
                                                    <Input placeholder={"Dark Grey, Red..."}/>
                                                </Form.Item>
                                            </Col>
                                            <Col xxl={2} xl={2} lg={2} md={2} sm={2} xs={2}>
                                                <Button
                                                    className={'marginTop40 close padding0 borderNone positionRelative'}
                                                    onClick={() => remove(field.name)}>
                                                    <img alt={'close'}
                                                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABRUlEQVRoge2ZQWrDMBBFHz1JFz1JCiX72l04zdmz6BlKoQmki2agNZKxJc2MIvQguzD/P0lOHAc6nU6nNZ6AwTF/uHXI4hE4ARfgmDssgTfgDHyQISMS19vLWkYkJD9ZZuS3/JX/MociNZc5RLLH1IHzVbHYGbVMSxn1LAsZswXTDDI/whqBHtdh8WA3iZIF3CVKFKlGIqdQdRLClmLVSghrClYvISwVvRsJIXaz53XzmUVo9e9mJ+bEZNQkHjSGtkITR2uigYu9iY/fkXDR9z/vqV5mjYRQrcwWCaE6mRQJoRqZIVJkjYTgLlNCQnCTiUnkfCeYy2hICGYymhKCuswAfAcCNG4x1GReCUtMuYMXKC4TOk5nMh7tbyD2SzNpAV+ArxKDEpnvzCfwnDpMZKwlBJHJkhD2+P4ZOgE7x/xOp9NR4AcMT3Cx1TO+AwAAAABJRU5ErkJggg=="/>
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Space>
                                )
                            })}
                            <Form.Item>
                                <Button
                                    className={'borDer borderColorDark borderRadiusSmall fontBold font14 plus marginTop5'}
                                    onClick={() => add()} block>
                                    <div className={'displayFlex alignItems'}>
                                        <div className={'marginRight10'}>
                                            <img width={'16'} alt={'plus'}
                                                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAMklEQVRIiWNgGGngPxQTDZho5JBRC0YtGEoWMCKxScpAxJpNcx+QCkaLilELRi0YkQAArMYFIENGFBoAAAAASUVORK5CYII="/>
                                        </div>
                                        <div className={'text'}>Нэмэх</div>
                                    </div>
                                </Button>
                            </Form.Item>
                        </>
                    )}
                </Form.List>
                <Form.Item>
                    <Button
                        className={'save primaryBackgroundColor primaryBackgroundColor borderRadiusSmall textLight fontBold font14'}
                        htmlType="submit">
                        Хадгалах
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default PropertiesModal