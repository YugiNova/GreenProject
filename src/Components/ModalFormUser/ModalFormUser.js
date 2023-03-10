import FormUser from "../FormUser";
import { Button, Modal } from "antd";
import { useState } from "react";
const ModalFormUser = ({formData,setFormData,open, onSubmit}) => {
  
  return (
    <>
      <Modal
        open={open}
        onOk={onSubmit}
        onCancel={open}
      >
        <FormUser
          formData={formData}
          setFormData={setFormData}
          // onClick={onClick}
        />
      </Modal>
    </>
  );
};
export default ModalFormUser;
