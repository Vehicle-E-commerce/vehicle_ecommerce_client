import styled from "styled-components";

export const ContainerMainUserAnnouncement = styled.main`
  width: 100%;
  background-image: linear-gradient( to bottom, var(--brand1) 0, var(--brand1) 357px, var(--grey8) 357px, var(--grey8));
  display: flex;
  flex-direction: column;

  ul::-webkit-scrollbar {
    width: 100%;               /* width of the entire scrollbar */
  }

  ul::-webkit-scrollbar-track {
    background: transparent;        /* color of the tracking area */
  }

  ul::-webkit-scrollbar-thumb {
    background-color: transparent;    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
  }
`
export const ContainerArticleUser = styled.article`
  width: 80%;
  margin: 0 auto;
  margin-top: 75px;
  margin-bottom: 89px;
  background-color: var(--whiteFixed);
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 41px;
  border-radius: 4px;
  gap: 24px;

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 104px;
    height: 104px;
    border-radius: 50%;
    background-color: var(--brand1);
    color: var(--whiteFixed);
    font-size: 36px;
    font-weight: 600;
  }
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    h2 {
      font-size: 20px;
      font-weight: 600;
    }
    span {
      font-size: 14px;
      color: var(--brand1);
      background-color: var(--brand4);
      border-radius: 4px;
      padding: 5px 8px;
    }
  }
  p {
    font-size: 16px;
    color: var(--grey2);
    line-height: 28px;
  }
  button {
    border: 1.5px solid var(--brand1);
    border-radius: 4px;
    background-color: var(--whiteFixed);
    color: var(--brand1);
    height: 48px;
    width: 160px;
    font-size: 16px;
    font-weight: 600;
    transition: 1s;
    :hover {
      background-color: var(--brand1);
      color: var(--whiteFixed);
      transition: 1s;
    }
  }
`