import {Button, Modal, Form, Input, InputNumber,Select} from 'antd'
import { useEffect } from 'react';
import { PageNumber } from './styles';
const { TextArea } = Input;

const ModalFormBook = ({open,onSubmit,onCancel, formData}) => {
    const [form] = Form.useForm();

    //Handle Add
    const onFinish = async () => {
        const values = await form.validateFields();
        onSubmit(formData.id,values);
    }

    //Handle reset fields
    useEffect(()=>{
        if(!open){
            form.resetFields()
        }
    },[open])


    //Handle edit auto fill
    useEffect(()=> {
        if(open && formData.id){
            form.setFieldsValue(formData)
        }

    },[open,formData])

    const options = [
        {
            value:"hornor",
            label:"hornor"
        },
        {
            value:"action",
            label:"action"
        }
    ]

    return(
        <div>
        <Modal open={open} onOk={onFinish} onCancel={onCancel}>
            <Form layout='vertical' form={form} >
                <Form.Item label="Tên sách" name="title" rules={[{required:true, message: "Tên sách là bắt buộc"}]}>
                    <Input placeholder='book name'></Input>
                </Form.Item>
                <Form.Item label="Tác giả" name="author" rules={[{required:true, message: "Tên tác giả là bắt buộc"}]}>
                    <Input placeholder='Author'></Input>
                </Form.Item>
                <Form.Item label="Mô tả" name="description" rules={[{required:true, message:"Mô tả lả bắt buộc"}]}>
                    <TextArea rows={2} placeholder="maxLength is 100" maxLength={100} />
                </Form.Item>
                <Form.Item label="Thể loại" name="type" rules={[{required:true, message:"Thể loại là bắt buộc"}]}>
                    <Select options={options}/>
                </Form.Item>
                <Form.Item label="Số trang" name="pageNumber" rules={[{required:true, message:"Số trang là bắc buộc"},{type:"number", message:"Số trang phải là số"}]}>
                    <PageNumber placeholder='Page Number'/>
                </Form.Item>
            </Form>
        </Modal>
        </div>
        
    );
}

export default ModalFormBook