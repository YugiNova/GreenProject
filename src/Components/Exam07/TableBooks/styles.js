import styled from "styled-components";
import {Button} from "antd";

export const Actions = styled.div`
    button {
        margin-right: 10px;
        
        
    }
`;

export const Country = styled.div`
    display: grid;
    grid-template-columns: 2.5rem 1fr;
    gap: 10px;
    align-items: center;

    h6{
        margin: 0;
        font-weight: bold;
        font-size: 1rem;
    }
`;

export const Image = styled.div`
    background-image: url(${props => props.src});
    background-position: center;
    background-size:cover;
    background-repeat: no-repeat;
    border-radius: 50%;
    padding-top:100%;
`;

export const Population = styled.div`
    color: ${props => props.color};
    font-weight: bold;
`