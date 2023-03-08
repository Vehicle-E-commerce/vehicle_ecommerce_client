import styled from "styled-components";


export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5vh;
`
export const Title = styled.h1`
  background: linear-gradient(90deg, ${(props) => props.theme.colors.text} 0%, rgba(69,41,230,1) 35%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  font-size: 30px;
  font-weight: 600;
  cursor: pointer;
  .word_shop{
    align-self: flex-end;
    font-size: 20px;
    margin-left: 0.5rem;
    margin-bottom: 0.2rem;
  }
`

export const ContainerModal = styled.div`
    background-color: var(--grey7);

    top: 49vh;
    right: 49vw;

    width: 343px;
    height: 450px;

    border-radius: 10px;

    padding: 0px 28px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    h1{
        font-family: Lexend;
        font-size: 25px;
        font-weight: 500;
        line-height: 30px;
        letter-spacing: 0em;
        text-align: center;
    }
    span{
        text-align: center;
    }
    label{
        font-family: Inter;
        font-size: 24px;
        font-weight: 500;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: left;
    }
    a{
        text-align: center;
        background: linear-gradient(90deg, ${(props) => props.theme.colors.text} 0%, rgba(69,41,230,1) 35%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        cursor: pointer;
    }
`
export const Cont = styled.div`
    width: 100%;
    height: fit-content;
`