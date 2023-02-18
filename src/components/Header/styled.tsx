import styled from "styled-components";

export const Container = styled.div`
    height: 80px;
    width: 100vw;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    display: flex;
    align-items: center;
    border-bottom: var(--grey5) solid 2px;
    pointer-events: auto;
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