import { Input } from "antd";
import { Col, Row, Button, Select } from "antd";
import "./index.css";
import { useEffect } from "react";

const FormUser = ({ formData, setFormData, onClick }) => {

    
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChange = (value) => {
    setFormData({
      ...formData,
      gender: value,
    });
    console.log(`selected ${value}`);
  };

  const options = [
    {
      value: 'male',
      lable: 'Male'
    },
    {
      value: 'female',
      lable: 'Female'
    },
    {
      value: 'other',
      lable: 'other'
    }
  ]

  return (
    <Row id="form-users">
      <Col span={8} className="input">
        <Input
          name="username"
          value={formData.username}
          onChange={onChange}
          placeholder="User name"
        />
      </Col>
      <Col span={8} className="input">
        <Input
          name="password"
          value={formData.password}
          onChange={onChange}
          placeholder="Password"
        />
      </Col>
      <Col span={8} className="input">
        <Input
          name="name"
          value={formData.name}
          onChange={onChange}
          placeholder="Name"
        />
      </Col>
      <Col span={8} className="input">
        <Input
          name="email"
          value={formData.email}
          onChange={onChange}
          placeholder="Email"
        />
      </Col>
      <Col span={8} className="input">
        <Input
          name="phone"
          value={formData.phone}
          onChange={onChange}
          placeholder="Phone"
        />
      </Col>
      <Col span={8} className="input">
      <Select
      defaultValue="please select gender"
      style={{
        width: "100%"
      }}
      onChange={handleChange}
      options={options}
    />
      </Col>
      {/* <Col span={24} className="input">
        <Button className="btn-submit" onClick={onClick} type="primary">
          Submit
        </Button>
      </Col> */}
    </Row>
  );
};

export default FormUser;
