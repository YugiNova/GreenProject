import styled from "styled-components";

export const Header = styled.header`
    position: fixed;
    top: 0;
    z-index: 1;
    width: 100%;
    background-color: #eeeeee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 1rem;
    
    a{
        font-size: 2rem;
        font-weight: bold;
    }
`;

export const Main = styled.main`
    display: grid;
    grid-template-columns: 1fr 5fr;
    min-height: calc(100vh - 9rem);
    margin-top: 3.8rem;
`

export const Sidebar = styled.div`
    background-color: #eeeeee;
    display: flex;
    flex-direction: column;
    a{
        box-sizing: border-box;
        width: 100%;
        padding: 1rem;
        text-decoration: none;
        color: black;
        font-weight: bold;
        background-color: yellow;
        transition: 0.25s ease;
        :hover{
            background-color: green;
            color:white;
        }
    }
`

export const Content = styled.div`

`

export const Footer = styled.footer`
    text-align: center;
    padding: 1rem;
    margin-top: 1rem;
    background-color: #eeeeee;
`;