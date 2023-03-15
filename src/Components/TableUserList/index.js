import {Table, Button} from 'antd'
const TableUserList = (props) => {
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Phone',
          dataIndex: 'phone',
          key: 'phone',
        },
        {
          title: 'Action',
          dataIndex: 'action',
          render: (text,item) =>{
            return(
              <div>
                <Button onClick={()=>{props.onEdit(item)}}>Edit</Button>
              </div>
            );
          }
        }
      ];
      
      
    return(
        <Table dataSource={props.users} columns={columns} />
    )
}

export default TableUserList;