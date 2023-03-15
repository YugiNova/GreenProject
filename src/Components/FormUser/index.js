import { Input } from "antd";
import { Col, Row, Button, Select, Form } from "antd";
import "./index.css";
import { useEffect } from "react";
import styled from "styled-components/";

const FormUser = ({ formData, setFormData, onSubmit, open }) => {
  const [form] = Form.useForm();

  const onFormSubmit = () => {
    const data = form.getFieldValue();
    onSubmit(formData.id, data);
    console.log(data);
  };

  useEffect(()=>{
    if(!open){
      form.resetFields();
    }
  },[open])
  // const onChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const handleChange = (value) => {
    setFormData({
      ...formData,
      gender: value,
    });
    console.log(`selected ${value}`);
  };

  const options = [
    {
      value: "male",
      lable: "Male",
    },
    {
      value: "female",
      lable: "Female",
    },
    {
      value: "other",
      lable: "other",
    },
  ];
  const Input = styled.input`
    width: 100%;
    border: none;
    border-bottom: 1px solid blue;
    :focus {
      outline: none;
    }
  `;

  return (
    <Form form={form} layout="vertical">
      <Button onClick={onFormSubmit}>OK</Button>
      <Form.Item name="username" label="username">
        <Input
          placeholder="User name"
        />
      </Form.Item>
      <Form.Item name="password" label="password">
        <Input
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item name="name" label="name">
        <Input placeholder="Name" />
      </Form.Item>
      <Form.Item name="email" label="email">
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item name="phone" label="phone">
        <Input placeholder="Phone" />
      </Form.Item>
      <Form.Item name="gender" label="gender">
        <Select
          defaultValue="please select gender"
          style={{
            width: "100%",
          }}
          onChange={handleChange}
          options={options}
        />
      </Form.Item>
    </Form>
  );
};

export default FormUser;
