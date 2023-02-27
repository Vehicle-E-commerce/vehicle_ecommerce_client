import styled from "styled-components";

export const MainHome = styled.main`
  width: 100%;

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

  ul {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    overflow-x: auto;
  }
  /* .auction {
    gap: 1.5rem;
  }
  .cars, .motorBike {
    gap: 2rem;
    margin-top: 18.3rem;
  }
  .motorBike {
    margin-bottom: 10rem;
  } */
`;
export const ArticleHome = styled.article`
  background-color: var(--brand2);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 36rem;
  margin-bottom: 7rem;
  h1 {
    height: 119px;
    width: 748px;
    left: 425px;
    top: 160px;
    border-radius: "nullpx";

    font-family: "Lexend", sans-serif;
    font-size: 44px;
    font-weight: 700;
    line-height: 56px;
    letter-spacing: 0em;
    text-align: center;

    color: var(--grey10);

    margin-bottom: 20px;
  }
  p {
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    text-align: left;

    color: var(--grey9);

    margin-bottom: 3.75rem;
  }
  div {
    display: flex;
    flex-direction: row;
    gap: 2.5rem;
  }
`;
