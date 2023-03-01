import { useState } from "react";
import './styles.css'

// import {DEFAULT_USER} from "./constans.js";
const DEFAULT_USER = {name: '', email: '',phone: ''}

const Bai3 = () => {
    const [users, setUsers] = useState([])
    const [formData, setFormData] = useState(DEFAULT_USER)

    const onChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;

        setFormData({
            ...formData,
            [name] : value
        })
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


    }
    
    return(
        <div>
            <input name='name' value={formData.name} onChange={onChange} placeholder='Name'/>
            <input name='email' value={formData.email} onChange={onChange} placeholder='Your Email'/>
            <input name='phone' value={formData.phone} onChange={onChange} placeholder='Your Phone Numbers'/>
            <button onClick={onClick}>{formData.id?'Edit':'Create'}</button>

            <table >
                <tr>
                    {/* <th >ID</th> */}
                    <th >Name</th>
                    <th >Email</th>
                    <th >Phone</th>
                </tr>
                {
                users.map(user => {
                    return(
                        <tr>
                            {/* <td >{user.id}</td> */}
                            <td >{user.name}</td>
                            <td >{user.email}</td>
                            <td >{user.phone}</td>
                            <td  onClick={()=>{onEdit(user)}}><button>Edit</button></td>
                            <td  onClick={()=>{onDelete(user)}}><button>Delete</button></td>
                        </tr>
                    )
                })
                }
            </table> 
        </div>
    )
}

export default Bai3