const TableUserList = (props) => {
    
    return(
            <table>
                <tr>
                    {/* <th >ID</th> */}
                    <th >Name</th>
                    <th >Email</th>
                    <th >Phone</th>
                    <th colSpan={2}>Edit data</th>
                </tr>
                {
                props.users.map(user => {
                    return(
                        <tr>
                            {/* <td >{user.id}</td> */}
                            <td >{user.name}</td>
                            <td >{user.email}</td>
                            <td >{user.phone}</td>
                            <td  onClick={()=>{props.onEdit(user)}}><button>Edit</button></td>
                            <td  onClick={()=>{props.onDelete(user)}}><button>Delete</button></td>
                        </tr>
                    )
                })
                }
            </table> 
    )
}

export default TableUserList;