import ModalFormUser from '../ModalFormUser/ModalFormUser';
import { Space, Table, Button } from 'antd';
import './index.css'
const TableUserList = (props) => {
  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "User Name",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Password",
      dataIndex: "password",
      key: "password",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <ModalFormUser selectedItem={record} check="edit" onClick={props.onClick} formData={props.formData} setFormData={props.setFormData}/>
          <Button onClick={()=>{props.onDelete(record)}} className='btn-delete' type="primary">Delete</Button>
        </Space>
      ),
    },
  ];

  return <Table dataSource={props.users} columns={columns} />;
};

export default TableUserList;
