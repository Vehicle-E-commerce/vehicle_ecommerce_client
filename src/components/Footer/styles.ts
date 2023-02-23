import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  height: 90px;
  width: 100vw;
  color: var(--whiteFixed);
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: var(--grey0);
  
  footer {
    width: 100vw;
    display: flex;
    justify-content: space-between;
    p {
      display: flex;
      align-items: center;
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

export const Cont = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 4px;
  background: var(--grey1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
  > svg {
    width: 0.7rem;
  }
`