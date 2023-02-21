import styled, { css } from "styled-components";
import { rgba } from 'polished';

interface Props {
  width?: string;
  isVisible?: boolean;
}

export const Container = styled.div`
  position: fixed;
  top: 0;
  height: 80px;
  width: 100vw;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  display: flex;
  align-items: center;
  border-bottom: var(--grey5) solid 2px;
  pointer-events: auto;
  justify-content: space-between;
  
`

export const Title = styled.h1`
  background: linear-gradient(90deg, ${(props) => props.theme.colors.text} 0%, rgba(69,41,230,1) 35%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  .word_shop{
    align-self: flex-end;
    font-size: 20px;
    margin-left: 0.5rem;
    margin-bottom: 0.2rem;
  }
    
`

 export const VerticalSwitchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  transform: rotate(-90deg);
`;


export const Cont = styled.div<Props>`
  width: ${(props)=> props.width};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  pad: 44px;
  a {
    display: flex;
    align-items: center;
    height: fit-content;
    font-size: 16px;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    cursor: pointer;
    text-decoration: none;
  }
  .vertical_line::after {
    content: "";
    display: block;
    height: 79px;
    width: 2px;
    background-color: var(--grey6);
  }
  .perfil_menu{
    display: flex;
  }
  ${({isVisible})=> !isVisible && css `
    .perfil_menu{
      display:none;
      position: absolute;
      width: 200px;
      height: 202px;
      right: 3rem;
      top: 5rem;
      background: ${(props) => props.theme.colors.background};;
      box-shadow: 0px 0px 26px -10px ${(props) => rgba(props.theme.colors.text, 0.5)};
      border-radius: 4px;
      nav, ul {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 1.5rem;
      }
    }  
  `}
`;

export const Navegacao = styled.nav<Props>`
  width: 100%;
  display: flex;
  align-items: center;
  margin-right: 40px;
  ul {
    width: 100%;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    li { 
      display: flex;
      align-items: center;
      cursor: pointer;
      a {
        color: ${(props) => props.theme.colors.text};
      }
    }
    .initial_perfil {
      border-radius:  50%;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${(props)=> props.theme.colors.text};
      font-weight: bold;
      text-transform: uppercase;
      margin-right: 1rem;
    }
  }
`