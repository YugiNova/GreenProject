import "./Dashboard.css";
import TableUserList from "./TableUserList";
import FormUser from "./FormUser";
import GeneralDetail from "./GeneralDetail";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Col, Row, Layout, Menu, theme } from "antd";
import React, { useState, useEffect } from "react";

const { Header, Sider, Content } = Layout;

const DEFAULT_USER = {
  username: "",
  password: "",
  name: "",
  email: "",
  phone: "",
  gender: "",
};
const Dashboard = () => {
  //Layout variables -antd
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  //Data variables
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState(DEFAULT_USER);

  useEffect(() => {
    console.log(users);
  }, [users]);

  const onClick = () => {
    setUsers([...users, formData]);
    setFormData(DEFAULT_USER);
  };

  return (
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
            <Col span={12}>
              <FormUser
                formData={formData}
                setFormData={setFormData}
                onClick={onClick}
              />
            </Col>
            <Col span={12}>
              <GeneralDetail usersLength={users.length}/>
            </Col>
          </Row>
          <TableUserList users={users} />
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
