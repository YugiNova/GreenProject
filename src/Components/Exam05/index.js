import { Form, Button, Input, InputNumber, Select } from "antd";

const Exam05 = () => {
  const [form] = Form.useForm();

  const onSubmit = async () => {
    const data = await form.validateFields();
    console.log(data);
  };

  return (
    <Form form={form} layout="vertical">
      <Form.Item
        name="email"
        label="Email"
        rules={[{ required: true }, { type: "email" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="password" label="Password" rules={[{ required: true }]}>
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item name="phone" label="Phone" rules={[{ required: true }]}>
        <InputNumber />
      </Form.Item>
      <Form.Item
        name="country"
        label="Country"
        rules={[{ required: true }]}
      >
        <Select
          options={[
            { value: "VN", label: "VietNam" },
            { value: "US", label: "USA" },
          ]}
        />
      </Form.Item>
      <Button onClick={onSubmit}>Sign up</Button>
    </Form>
  );
};

export default Exam05;
