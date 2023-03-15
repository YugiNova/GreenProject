import FormUser from "../FormUser";
import { Button, Modal } from "antd";
import { useState } from "react";
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
  return (
    <>
      <Button style={check=="add"?{backgroundColor: "green"}:{}}  type="primary" onClick={()=>{showModal(selectedItem)}}>
        {check=="add"?"Add User":"Edit"}
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={onClick}
        onCancel={handleCancel}
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
