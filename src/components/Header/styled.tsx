import styled from "styled-components";

interface Props {
  width?: string
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
  @media screen and (min-width: 768px) {
    .menuMob { 
      display: none;
    }
  }
`

export const Title = styled.h1`
  background: linear-gradient(90deg, ${(props) => props.theme.colors.text} 0%, rgba(69,41,230,1) 35%);
  /* Definir que o gradient deve ser aplicado ao text-overflow. */
  /* Necessário aplicar background-clip de forma padrão, para garantir a compatibilidade dos navegadores */
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
    
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

        color: ${(props) => props.theme.colors.text};
        text-decoration: none;
    }
    .vertical_line::after {
      content: "";
      display: block;
      height: 79px;
      width: 2px;
      left: 279px;
      top: 0px;
      border-radius: 0px;
      background-color: var(--grey6);
      }
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
    justify-content: space-between;
    
    
    li { 
      display: flex;
      align-items: center;
      
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