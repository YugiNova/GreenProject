import "./Dashboard.css";
import TableUserList from "./TableUserList";
import FormUser from "./FormUser";
import ModalFormUser from "./ModalFormUser/ModalFormUser";
import GeneralDetail from "./GeneralDetail";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Col, Row, Layout, Menu, theme, Modal, Button, Input } from "antd";
import React, { useState, useEffect, useMemo } from "react";

const { Header, Sider, Content } = Layout;

const DEFAULT_USER = {
  id: "",
  username: "",
  password: "",
  name: "",
  email: "",
  phone: "",
  gender: "",
};
const Dashboard = () => {
  const [open, setOpen] = useState(false);

  //Layout variables -antd
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();


  //Data variables
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState(DEFAULT_USER);
  const [keyword,setKeyword] = useState()

  const onCancel = () => {
   setOpen(false) 
  }

  //Handle Search
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

  const onSearch = (e) => {
    setKeyword(e.target.value)
  }

  //Submit Handle
  const onSubmit = () => {
    if (formData.id) {
      const newUsers = users.map((user) => {
        if (user.id === formData.id) {
          return formData;
        }
        return user;
      });
      setUsers(newUsers);
      console.log("edit");
    } else {
      setUsers([
        ...users,
        {
          ...formData,
          id:Math.random()
        },
      ]);
      console.log("submit");
    }
    setFormData(DEFAULT_USER);
    setOpen(true)
  };

  //Delete Handle
  const onDelete = (selectedItem) => {
    const newUsers = users.filter((user)=>{
      return user.id !== selectedItem.id
    })
    setUsers(newUsers)
  }


  //Edit Handle
  const onEdit = (selectedItem) => {
    setFormData({
      ...formData,
      selectedItem
    })
  }


  return (
    <>
      
      <Layout className="wrapper">
      
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "nav 1",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "nav 2",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Row>
            <Col span={6}>
              <Button onClick={onSubmit}>Add Users</Button>
              <ModalFormUser formData={formData} setFormData={setFormData} open={open}/>
              <Input
                style={{margin:"20px 0"}}
                value={keyword}
                onChange={onSearch}
                placeholder="Search anything...."
              />
            </Col>
            <Col span={6}>
            </Col>
            <Col span={12}>
              <GeneralDetail usersLength={users.length} />
            </Col>
          </Row>
          <TableUserList onDelete={onDelete}  onEdit={onEdit} users={searchUsers} formData={formData} setFormData={setFormData}/>
        </Content>
      </Layout>
    </Layout>
    </>
    
  );
};
export default Dashboard;
