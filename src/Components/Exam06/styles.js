import styled from "styled-components"
import {Button, Input} from 'antd'

export const Header = styled.div`
    display:flex;
    justify-content: space-between;
    margin-bottom: 20px;
`;

export const SearchBox = styled(Input.Search)`
    width:30%;
`;

export const ButtonCreate = styled(Button)`
    display: block;
    
`;