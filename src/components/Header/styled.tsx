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
    
`

 export const VerticalSwitchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  transform: rotate(-90deg);
`;