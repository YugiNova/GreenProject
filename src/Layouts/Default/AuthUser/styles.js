import styled from "styled-components";

export const  User = styled.div`
    display:grid;
    grid-template-columns: 2rem 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 2px;
    align-items: center;

    img{
        grid-column: 1/2;
        grid-row: 1/3;
        background-image: url('https://loremflickr.com/cache/resized/65535_52081369002_ee622203da_z_640_480_nofilter.jpg');
        background-position: center;
        background-repeat: no-repeat;
        padding-top: 100%;
        border-radius: 50%;
    }

    h2{
        grid-column: 2/3;
        grid-row: 1/2;
        font-size: 0.75rem;
        margin: 0;
    }

    h1{
        grid-column: 2/3;
        grid-row: 2/3;
        font-size: 1rem;
        margin: 0;
    }
`;