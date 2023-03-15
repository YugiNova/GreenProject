import { useState, useEffect, useMemo } from "react";
import {Button, Modal,Form} from 'antd'
import ModalFormUser from "./ModalFormUser";
import TableUserList from "./TableUserList"

const DEFAULT_USER = {id:"",name:"",email:"", phone:""}

const Bai4 = () => {
    const [form] = Form.useForm();
    const [isOpen,setIsOpen] = useState(false);
    const [users,setUsers] = useState([]);
    const [formData, setFormdata] = useState(DEFAULT_USER);
    
    const onCancel = () => {
        setIsOpen(false)
    }

    const onCreate = () => {
        setIsOpen(true);
        console.log(isOpen);
    }

    const onSubmit = (id,data) => {
        if(id){
            const newUsers = users.map(user => {
                if(user.id === id){
                    return data
                }
                return user
            })
            setUsers(newUsers);
            
        }
        else{
            setUsers([
                ...users,
                {
                    id: Math.random(),
                    ...data,
                }
            ])
            
        }
        console.log(users);
    }

    const onEdit = (selectedUser) => {
        setFormdata(selectedUser);
        form.setFieldValue({name:selectedUser.name,email:selectedUser.email,phone:selectedUser.phone})
        setIsOpen(true)
        console.log(selectedUser);
    }

    const onDelete = (selectedUser) => {
        const newUsers = users.filter(user => {
            return user.id !== selectedUser.id
        })
        setUsers(newUsers)
    }


    return(
        <div>
            <Button onClick={onCreate}>Add Users</Button>
            <ModalFormUser isOpen={isOpen} onCancel={onCancel} onSubmit={onSubmit} onCreate={onCreate} formData={formData} form={form}/>
            <TableUserList users={users} onEdit={onEdit} onDelete={onDelete}/>
        </div>
    )
}

export default Bai4
