import styled from "styled-components";

export const Container = styled.div`
  
  bottom: 0;
  height: 140px;

  width: 100%;
  color: var(--whiteFixed);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: var(--grey0);
  
  footer {
    width: 100%;
    display: flex;
    justify-content: space-around;
    p {
      display: flex;
      align-items: center;
    }
    div { 
      margin: 0;
    }
  }

  @media only screen and (max-width: 870px) {
  height: 310px;
  footer {
    align-items: center;
    height: 90%;
    flex-direction: column;

    h1{margin: 0}
  }

}
`

export const Title = styled.h1`
    display: flex;
    width: 12rem ;
    justify-content: center;
    align-items: center;
    margin-left: 2rem;
    font-size: 30px;
    font-weight: 600;
    .word_shop{
    font-size: 20px;
    margin-left: 0.5rem;
    margin-top: 0.4rem;
  }
`

export const ContFixed = styled.div`
  /* position: fixed; */
  bottom: 7vh;
  right: 7vw;
  z-index: 1;
  width: 3rem;
  height: 3rem;
  border-radius: 4px;
  background: var(--grey1);
  /* opacity: 0.2; */
  /* box-shadow: 0px 1px 12px 0px rgba(233,236,239,1); */

  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
  border-radius: 4px;

  @media only screen and (max-width: 870px) {
    bottom: 3vh;
    right: 47vw;
  }

  cursor: pointer;
  > svg {
    width: 0.5rem;
  }

  div {
    width: 3rem;
    height: 3rem;
  }
`