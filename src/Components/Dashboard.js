import "./Dashboard.css";
import styled from 'styled-components/'
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
  const onSubmit = (id, data) => {
    if (id) {
      const newUsers = users.map((user) => {
        if (user.id === id) {
          return data;
        }
        return user;
      });
      setUsers(newUsers);
      console.log("edit");
    } else {
      setUsers([
        ...users,
        {
          ...data,
          id:Math.random()
        },
      ]);
      console.log("submit");
    }
    console.log(formData);
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
    setFormData(selectedItem)
    setOpen(true)
    console.log(selectedItem);
  }

  const Button = styled.button`
      padding: 10px 20px;
      font-weight: bold;
      border:3px solid;
      border-image: linear-gradient(to right, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1) 1;
      background: linear-gradient(to right, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
      color: white;
      cursor: pointer;
      transition:ease 0.5s;
      :hover{
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        transform: rotateY(360deg);
      }
  `;

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
              <Button onClick={()=> {setOpen(true)}}>Add Users</Button>
              <ModalFormUser formData={formData} setFormData={setFormData} open={open} onCancel={onCancel} onSubmit={onSubmit}/>
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
          <TableUserList onDelete={onDelete} onEdit={onEdit} users={searchUsers}/>
        </Content>
      </Layout>
    </Layout>
    </>
    
  );
};
export default Dashboard;
