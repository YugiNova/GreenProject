import { useState, useEffect, useMemo } from "react";
import {Button, Modal} from 'antd'
import ModalFormUser from "./ModalFormUser";
import TableUserList from "./TableUserList"

const Bai4 = () => {
    const [isOpen,setIsOpen] = useState(false);
    const [users,setUsers] = useState([]);
    
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
                    ...data,
                    id: Math.random(),
                }
            ])
        }
        
    }


    return(
        <div>
            <Button onClick={onCreate}>Add Users</Button>
            <ModalFormUser isOpen={isOpen} onCancel={onCancel} onSubmit={onSubmit} onCreate={onCreate}/>
            <TableUserList users={users}/>
        </div>
    )
}

export default Bai4