import FormUser from "../FormUser";
import { Form, Modal } from "antd";
import { useState } from "react";
<<<<<<< HEAD
const ModalFormUser = ({onClick,formData,setFormData,selectedItem,check}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = (selectedItem) => {
    if(check==="edit"){
      console.log(selectedItem);
      setFormData(selectedItem);
    }
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
=======
const ModalFormUser = ({formData,setFormData,open, onCancel, onSubmit}) => {
  

>>>>>>> 5a291cf35020c2356e8c3b8633ff510a169e10b0
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
