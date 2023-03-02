import styled from "styled-components";

interface Props {
    height?: string
    width?: string
    backColor?: string
    border?: string
    textColor?: string
    margin?: string
}

export const StyledInput = styled.input<Props>`
    height:${props => props.height || `48px`};
    width: ${props => props.width};
    
    border: ${props => props.border || `solid var(--grey7) var(--border-size, 1.5px)`};
    border-radius: 4px;

    background-color: ${(props) => props.backColor || "transparent"};
    color: ${props => props.textColor || `var(--grey7)`};
    
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0em;
    
    padding-left: 16px;
    margin-top: 8px;

    margin: ${props => props.margin};
 
`;
