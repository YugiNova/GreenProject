import { Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { Content, Footer, Header, Main, Sidebar } from "./styles";

const DefaultLayout = ({children}) => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token')
        navigate(`/`)
    }

    return (
        <div>
            <Header>
                <a>Green Academy</a>
                <Button onClick={logout}>Log out</Button>
            </Header>
            <Main>
                <Sidebar>
                    <Link to='/dashboard'>Dashboard</Link>
                    <Link to='/student'>Student</Link>
                </Sidebar>
                <Content>
                    {children}
                </Content>
            </Main>
            <Footer>Powered by Nguyễn Quốc Thắng</Footer>
        </div>
    )
}

export default DefaultLayout;
