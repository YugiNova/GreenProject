import { useState, useEffect, useMemo } from "react";
import SearchBox from "./SearchBox";
import FormUser from "./FormUser";
import TableUserList from "./TableUserList";
//import './styles.css'

// import {DEFAULT_USER} from "./constans.js";
const DEFAULT_USER = {name: '', email: '',phone: ''}

const Bai3 = () => {
    const [users, setUsers] = useState([])
    const [formData, setFormData] = useState(DEFAULT_USER)

    const [keyword, setKeyword] = useState('')
    // const [searchUsers, setSearchUsers] = useState([])

    //useEffect -> update nhieu du lieu
    // useEffect(() => {
    //     if(keyword !== ''){
    //         const newUserList = users.filter(user=>{
    //             return user.name.includes(keyword) || user.email.includes(keyword) || user.phone.includes(keyword)
    //         })
    //         setSearchUsers(newUserList)
    //     }
    //     else{
    //         setSearchUsers(users)
    //     }
    // },[keyword, users])

    //userMemo -> update 1 du lieu
    const searchUsers = useMemo(() => {
        if(keyword !== ''){
            const newUserList = users.filter(user=>{
                return user.name.includes(keyword) || user.email.includes(keyword) || user.phone.includes(keyword)
            })
            return newUserList
        }
        else{
            return users
        }
    },[keyword, users])

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
            
            <FormUser formData={formData} setFormData={setFormData} onClick={onClick}/>
            <SearchBox keyword={keyword} setKeyword={setKeyword}/>
            <TableUserList users = {searchUsers} onEdit={onEdit} onDelete={onDelete}/>
        </div>
    )
}

export default Bai3


//useRef
//React Route
//Redux
//Layout cua du an route va redux