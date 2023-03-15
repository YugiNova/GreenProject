import {Button, Modal, Form, Input} from 'antd'

const ModalFormUser = ({isOpen,onSubmit,onCancel, formData, form}) => {

    
    const onFinish = () => {
        const data = form.getFieldValue();
        onSubmit(formData.id,data);
        form.resetFields();
    }


    return(
        <div>
        <Modal open={isOpen} onOk={onFinish} onCancel={onCancel}>
            <Form layout='vertical' form={form} >
                <Form.Item label="User Name" name="name">
                    <Input placeholder='username'></Input>
                </Form.Item>
                <Form.Item label="Email" name="email">
                    <Input placeholder='email'></Input>
                </Form.Item>
                <Form.Item label="Phone" name="phone">
                    <Input placeholder='phone'></Input>
                </Form.Item>
            </Form>
        </Modal>
        </div>
        
    );
}

export default ModalFormUser