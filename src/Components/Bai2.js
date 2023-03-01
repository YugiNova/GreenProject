import React from "react";
import { useState } from "react";

const Bai2 = () => {
    const [user,setUser] = useState({name: '', email: ''})
    const [userList, setUserList] = useState([{name: 'A', email: 'a@gmail.com'},{name: 'B', email: 'b@gmail.com'}])
    
    const myStyle = {
        border: "1px solid black"
    }

    const onChange = (e) =>{
        
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const onClick = () => {
        setUserList([
            ...userList,
            user
        ])
        setUser({name:'', email:''})
    }
    
    return(
        <div>
            <input name='name' value={user.name} onChange={onChange}/>
            <input name='email' value={user.email} onChange={onChange}/>
            <button onClick={onClick}>Add</button>

            <table style={myStyle}>
                <tr>
                    <th style={myStyle}>Họ và tên</th>
                    <th style={myStyle}>Email</th>
                </tr>
                {
                userList.map(user => {
                    return(
                        <tr>
                            <td style={myStyle}>{user.name}</td>
                            <td style={myStyle}>{user.email}</td>
                        </tr>
                    )
                })
                }
            </table> 
        </div>
    )
}

export default Bai2