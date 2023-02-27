import styled from "styled-components";

export const ContainerAuctionList = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 15rem;
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