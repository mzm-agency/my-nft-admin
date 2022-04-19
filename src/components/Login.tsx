import React, {useCallback, useContext, useState} from "react"
import {Button, Form, Input, notification, Row} from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {API} from "../api";

const Login = () => {
    const [loading, updateLoading] = useState(false);
    const onFinish = useCallback(async (values) => {

        try {
            let user: any = await API.post({
                apiVersion: 'barong'
            })('/identity/sessions', {
                "email":"zorigoo_08@yahoo.com",
                password:"Zorigoo0410"
            })

        } catch (e: any) {
            console.log(e)
        }
    }, []);
    return (
        <>
            <div className="login-container">
                <div className="form___3Tq4m">
                    <Form onFinish={onFinish}>
                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: 'Имэйл оруулна уу!' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Имэйл" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Нууц үг оруулна уу!' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Row>
                            <Button loading={loading} type="primary" htmlType="submit">
                                Нэвтрэх
                            </Button>
                        </Row>
                    </Form>
                </div>
            </div>
        </>
    )
}
export default Login