import { useState } from "react";
import {Form, Input, Button} from "antd";
import styled from "styled-components"

const Exam04 = () => {
    const [form] = Form.useForm()

    const onSubmit = async () => {
        const data = await form.validateFields();
        console.log(data);
    }

    const Section = styled.div`
        width: 30%;
        margin: 30vh auto;
        background-color: pink;
        padding: 10px;
        padding-top: 40px;
        display:flex;
        flex-direction: column;
        justify-content: center;

        border-radius: 10px;
    `;
    const Button = styled.button`
        margin: 0 auto;
        padding: 10px 20px;
        background: blue;
        cursor:pointer;
        font-weight: bold;
        color:white;
        border: 1px solid white;
        transition: 0.25s ease;
        border-radius: 10px;
        :hover{
            background: green;
            color:black;
            border: 1px solid black;
        }
    `;

    return (
        <Section>
            <Form form={form} layout="vertical">
                <Form.Item name='email' label='Email' rules={[{required: true},{type:"email"}]}>
                    <Input/>
                </Form.Item>
                <Form.Item name='password' label='Password' rules={[{required: true}]}>
                    <Input.Password/>
                </Form.Item>
                
            </Form>
            <Button onClick={onSubmit}>Log In</Button>
        </Section>  
    );
}
export default Exam04
