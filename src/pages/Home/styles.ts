import styled from "styled-components";

export const Container = styled.div`
    min-height: 100%;
    width: 100%;
    display: flex;
    grid-template-rows: 10% 90%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .fodasse {
        background: pink;
        height: 3000px;
        width: 50px;
    }
`