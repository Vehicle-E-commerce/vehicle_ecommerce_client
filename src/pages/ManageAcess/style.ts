import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  width: 100%;
  display: flex;
  grid-template-rows: 10% 90%;

  align-items: center;
`;

export const ContainerModal = styled.div`
    background-color: var(--grey8);

    width: 100vw;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 24px;
        font-weight: 500;
        line-height: 30px;
        color: #000000;
    }

    .containerDataUser {
        width: 100%;
    }

`