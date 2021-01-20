/*
 * @Author: zzj
 * @Date: 2021-01-20 17:40:34
 * @LastEditTime: 2021-01-20 17:45:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my_umi/src/pages/shihang/index.tsx
 */


import React, { Component } from 'react'
import { Form, Input, Checkbox, Button } from 'antd'
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
export default class index extends Component {
    onFinish = () => {

    }

    onFinishFailed = () => {

    }
    render() {
        return (
            <div>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
