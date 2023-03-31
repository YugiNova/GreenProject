import styled from "styled-components";

export const Layout = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
`
export const Logo = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    color: black;
    padding: 1rem;

    img{
        width: 100%;
    }
`

export const Sidebar = styled.div`
    width: 20rem;
    background-color: #f3f4f6;
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    a{
        display: flex;
        flex-direction: row;
        align-items: center;
        box-sizing: border-box;
        width: 100%;
        padding:0.75rem 1rem;
        text-decoration: none;
        color: #656e7a;
        font-weight: bold;
        background-color: transparent;
        transition: 0.25s ease;
        border-radius: 0.5rem;
        margin-bottom: 0.5rem;

        svg{
            margin-right: 10px;
            font-size: 1.5rem;
        }

        &:focus{
            background-color: black;
        }

        &:hover{
            background-color: #e5e7eb;
            color:black;
        }
    }
`



export const Main = styled.main`
    width: 100%;
    height: 100vh;
    border-left: 1px solid #e5e7eb;
    
`

export const Header = styled.header`
    width: 100%;
    padding: 1rem;
    background-color: white;
    display: flex;
    justify-content: end;
    align-items: center;
    border-bottom: 1px solid #e5e7eb;
    a{
        font-size: 2rem;
        font-weight: bold;
    }
`;

export const Content = styled.div`
    height: calc(100vh - 7.5rem);
    padding: 1rem;
    overflow-y: auto;
`

export const Footer = styled.footer`
    text-align: center;
    padding: 1rem;
    background-color: white;
    border-top: 1px solid #e5e7eb;
`;






