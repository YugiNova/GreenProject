import {Button, Modal, Form, Input, InputNumber} from 'antd'
import { useEffect } from 'react';

const ModalFormUser = ({isOpen,onSubmit,onCancel, formData}) => {
    const [form] = Form.useForm();

    //Handle Add
    const onFinish = async () => {
        const values = await form.validateFields();
        onSubmit(formData.id,values);
        form.resetFields();
    }

    //Handle reset fields
    useEffect(()=>{
        if(!isOpen){
            form.resetFields()
        }
    },[isOpen])


    //Handle edit auto fill
    useEffect(()=> {
        if(isOpen && formData.id){
            form.setFieldsValue(formData)
        }
    },[isOpen,formData])


    return(
        <div>
        <Modal open={isOpen} onOk={onFinish} onCancel={onCancel}>
            <Form layout='vertical' form={form} >
                <Form.Item label="User Name" name="name" rules={[{required:true, message: "Tên người dùng là bắt buộc"}]}>
                    <Input placeholder='username'></Input>
                </Form.Item>
                <Form.Item label="Email" name="email" rules={[{required:true, message: "Email là bắt buộc"},{type:"email", message:"Email không đúng format"}]}>
                    <Input placeholder='email'></Input>
                </Form.Item>
                <Form.Item label="Phone" name="phone" rules={[{required:true, message:"Số điện thoại là bắt buộc"},{type:"number", message:"Số điện thoại không được nhập chữ"}]}>
                    <InputNumber placeholder='phone'/>
                </Form.Item>
            </Form>
        </Modal>
        </div>
        
    );
}

export default ModalFormUser