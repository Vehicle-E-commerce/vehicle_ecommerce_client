import styled, { css } from "styled-components";

interface Props {
    isVisible?: boolean;
    height?: string
    borderRadius?:string
  }

export const Container = styled.div<Props>`
    position: absolute;
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    
    pointer-events: none;
    > svg {
        top: 1rem;
        right: 1rem;
        position: absolute;
        margin-right: 1rem;
    }
    .opem_menu {
        pointer-events: auto;
        display: flex;
    }
    .close_menu {
        pointer-events: auto;
        display: none;
    }
    ${({isVisible})=> isVisible && css `
        .close_menu {
            display: flex
        }
        .opem_menu {
        display: none
    }
        
`}
 
`;

export const Navegacao = styled.nav<Props>`
    margin-top: 80px;
    /* width: 100vw; */
    height: 80vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    left: -10;
    
  
    ${({isVisible})=> !isVisible && css `
        display: none;
        pointer-events: auto;
    `}

`

export const Cont = styled.div<Props>`
    height: ${(props)=> props.height};
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
   
    margin: 0;
    border-bottom: var(--grey5) solid 2px;
    border-radius: ${(props)=> props.borderRadius};
    
    a {
        width: 97%;
        height: fit-content;
        font-size: 16px;
        font-weight: 600;
        line-height: 28px;
        letter-spacing: 0em;
        text-align: left;
        color: ${(props) => props.theme.colors.text};
        text-decoration: none;
        margin: 10px 0px 0px 15px;

    }
   
`