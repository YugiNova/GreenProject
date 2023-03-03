import { useState, useEffect } from "react";
import FormUser from "./FormUser";
import TableUserList from "./TableUserList";
import './styles.css'

// import {DEFAULT_USER} from "./constans.js";
const DEFAULT_USER = {name: '', email: '',phone: ''}

const Bai3 = () => {
    const [users, setUsers] = useState([])
    const [formData, setFormData] = useState(DEFAULT_USER)

    const [keyword, setKeyword] = useState('')
    const [searchUsers, setSearchUsers] = useState([])
    useEffect(() => {
        if(keyword !== ''){
            const newUserList = users.filter(user=>{
                return user.name === keyword
            })
            setSearchUsers(newUserList)
        }
        else{
            setSearchUsers(users)
        }
    },[keyword, users])

    const onSearch = (e) => {
        setKeyword(e.target.value)
        
    }

    const onClick = () => {
        if(formData.id){
            const newUsers = users.map(user =>{
                if(user.id === formData.id){
                    return formData
                }
                return user
            })
            setUsers(newUsers)
        }
        else{
            setUsers([
                ...users,
                {
                    id: Math.random(),
                    ...formData
                }
            ])
        }

        setFormData(DEFAULT_USER)
    }

    const onEdit =(selectedUser) =>{
        setFormData(selectedUser);
        console.log(selectedUser);
    }

    const onDelete =(selectedUser) =>{
        const newUsers = users.filter(user => {
            return user.id !== selectedUser.id
        })

        setUsers(newUsers)
    }
    
    return(
        <div>
            <input value={keyword} onChange={onSearch}/>
            <FormUser formData={formData} setFormData={setFormData} onClick={onClick}/>

            <TableUserList users = {searchUsers} onEdit={onEdit} onDelete={onDelete}/>
        </div>
    )
}

export default Bai3