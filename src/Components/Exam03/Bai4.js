import { useState, useEffect, useMemo } from "react";
import {Button, Modal,Form, Input} from 'antd'
import ModalFormUser from "./ModalFormUser";
import TableUserList from "./TableUserList"

const DEFAULT_USER = {id:"",name:"",email:"", phone:""}

const Bai4 = () => {
    
    const [isOpen,setIsOpen] = useState(false);
    const [users,setUsers] = useState([]);
    const [formData, setFormdata] = useState(DEFAULT_USER);
    const [keyword,setKeyword] = useState();
    
    const usersSearchResult = useMemo(()=>{
        if(keyword !== ''){
            const newUserList = users.filter(user=>{
                return user.name.includes(keyword) || user.email.includes(keyword)
            })
            return newUserList
        }
        else{
            return users
        }
        console.log(usersSearchResult);
    },[keyword,users])

    const onCancel = () => {
        setIsOpen(false)
    }

    const onCreate = () => {
        setFormdata(DEFAULT_USER);
        setIsOpen(true);
    }

    const onSubmit = (id,data) => {
        if(id){
            const newUsers = users.map(user => {
                if(user.id === id){
                    return {id:id,...data}
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
        setIsOpen(true)
    }

    const onDelete = (selectedUser) => {
        const newUsers = users.filter(user => {
            return user.id !== selectedUser.id
        })
        setUsers(newUsers)
    }


    const onSearch = (e) => {
        setKeyword(e.target.value)
    }

    return(
        <div>
            <Input onChange={onSearch} value={keyword}/>
            <Button onClick={onCreate}>Add Users</Button>
            <ModalFormUser isOpen={isOpen} onCancel={onCancel} onSubmit={onSubmit} onCreate={onCreate} formData={formData}/>
            <TableUserList users={usersSearchResult} onEdit={onEdit} onDelete={onDelete}/>
        </div>
    )
}

export default Bai4
