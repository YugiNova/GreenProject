import {Button, Modal, Form, Input, InputNumber,Select} from 'antd'
import { useEffect } from 'react';
import { PageNumber } from './styles';
const { TextArea } = Input;

const ModalFormBook = ({loading, open,onSubmit,onCancel, formData,setFormData,DEFAULT_CITY}) => {
    const [form] = Form.useForm();

    //Handle Add
    const onFinish = async () => {
        const values = await form.validateFields();
        onSubmit(formData.id,values);
    }

    //Handle reset fields
    useEffect(()=>{
        if(!open){
            form.resetFields();
            setFormData(DEFAULT_CITY);
        }
    },[open])


    //Handle edit auto fill
    useEffect(()=> {
        if(open && formData.id){
            form.setFieldsValue(formData)
        }

    },[open,formData])

    // const options = [
    //     {
    //         value:"hornor",
    //         label:"hornor"
    //     },
    //     {
    //         value:"action",
    //         label:"action"
    //     }
    // ]

    return(
        <div>
        <Modal confirmLoading={loading} open={open || loading} onOk={onFinish} onCancel={onCancel}>
            <Form layout='vertical' form={form} >
                <Form.Item label="Name" name="name" rules={[{required:true, message: "Tên thành phố là bắt buộc"}]}>
                    <Input placeholder='Name'></Input>
                </Form.Item>
                <Form.Item label="Country" name="country" rules={[{required:true, message: "Đất nước là bắt buộc"}]}>
                    <Input placeholder='country'></Input>
                </Form.Item>
                <Form.Item label="Country Code" name="countryCode" rules={[{required:true, message:"Mã vùng là bắt buộc"}]}>
                    <Input placeholder='Country Code'></Input>
                </Form.Item>
                <Form.Item label="Population" name="population" rules={[{required:true, message:"Dân số là bắt buộc"},{type:"number", message:"Số trang phải là số"}]}>
                    <PageNumber placeholder='Population'/>
                </Form.Item>
                <Form.Item label="Country Flag" name="countryFlag" rules={[{required:true, message:"Cờ là bắc buộc"}]}>
                    <Input placeholder='countryFlag'></Input>
                </Form.Item>
            </Form>
        </Modal>
        </div>
        
    );
}

export default ModalFormBook