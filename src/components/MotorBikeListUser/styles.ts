import styled from "styled-components";

export const ContainerMotorBikeList = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 6rem;
  padding-left: 30px;

  label {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 4rem;
  }

  ul {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    overflow-x: auto;
  }
`