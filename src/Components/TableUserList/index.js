import {Table, Button, Modal} from 'antd'
import { ExclamationCircleFilled } from '@ant-design/icons';
const {confirm} = Modal;

const TableUserList = (props) => {
      const showConfirm = (item) => {
        confirm({
          title: 'Do you Want to delete these items?',
          icon: <ExclamationCircleFilled />,
          content: 'Some descriptions',
          onOk() {
            props.onDelete(item)
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      };
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
                <Button onClick={()=>{showConfirm(item)}}>Delete</Button>
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