import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { Link, useNavigate } from "react-router-dom";
import { User } from './styles';

const AuthUser = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token')
        navigate(`/`)
    }


    const items = [
        {
          label: (
              <div>
                <a onClick={logout}>
                    Log out
                </a>
              </div>
          ),
          key: '0',
        }
      ];


    return(
        <Dropdown
        menu={{
          items,
        }}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <User>
                <img src=""/>
                <h2>Admin</h2>
                <h1>Nguyen Quoc Thang</h1>
            </User>
          </Space>
        </a>
      </Dropdown>
    );
}

export default AuthUser;