import styled from "styled-components";

export const MainHome = styled.main`
  width: 100%;
  ul {
    display: flex;
    flex-direction: row;
    max-width: 100%;
    overflow: auto;
  }
  .auction {
    gap: 1.5rem;
  }
  .cars {
    gap: 3rem;
    margin-top: 18.3rem;
  }
  .motorBike {
    gap: 3rem;
    margin-top: 19.5rem;
  }
`;
export const ArticleHome = styled.article`
  background-color: var(--brand2);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 36rem;
  margin-bottom: 10rem;
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
