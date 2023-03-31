import { Button } from "antd";
import { BorderLeftOutlined, UserSwitchOutlined} from '@ant-design/icons';
import { Link } from "react-router-dom";
import { Content, Footer, Header, Main, Sidebar, Layout, Logo } from "./styles";
import logo from "../../assets/logo.png";
import AuthUser from "./AuthUser";

const DefaultLayout = ({children}) => {

    return (
        <Layout>
            <Sidebar>
                <Logo><img src= {logo}/></Logo>
                <Link to='/dashboard'><BorderLeftOutlined /><span>Dashboard</span></Link>
                <Link to='/student'><UserSwitchOutlined /><span>Student</span></Link>
            </Sidebar>
            <Main>
                <Header>
                    {/* <Button onClick={logout}>Log out</Button> */}
                    <AuthUser/>
                </Header>
                <Content>
                    {children}
                </Content>
                <Footer>Powered by Nguyễn Quốc Thắng</Footer>
            </Main>

        </Layout>
    )
}

export default DefaultLayout;
