import FormUser from "../FormUser";
import { Form, Modal } from "antd";
import { useState } from "react";
const ModalFormUser = ({formData,setFormData,open, onCancel, onSubmit}) => {
  

  return (
    <>
      <Modal
        open={open}
        onOk={onSubmit}
        onCancel={onCancel}
      >
        <FormUser
          formData={formData}
          setFormData={setFormData}
          onSubmit={onSubmit}
          open={open}
        />
      </Modal>
    </>
  );
};
export default ModalFormUser;
