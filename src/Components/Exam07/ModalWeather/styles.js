import styled from "styled-components"

export const WeatherPanel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
        font-size: 4rem;
        margin: 0px;
    }
`;

export const Temperature = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    h1{
        font-size: 4.5rem;
        margin: 0px;
        text-align:center;
    }
    
`;
export const Condition = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    h2{
        margin: 0;
    }
`;
export const WeatherInfo = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2rem;
    
    div{
        text-align: center;
    }
    h1{
        font-size: 1.25rem;
        margin: 0px;
    }

    h2{
        font-size: 1rem;
        margin: 0px;
    }
`;