import styled from "styled-components";

interface Props {
    height?: string
    width?: string
    backColor?: string
    border?: string
    textColor?: string
    fontSize?: string
    heightFocus?: string
    widthFocus?: string
    backColorFocus?: string
    borderFocus?: string
    textColorFocus?: string
    fontSizeFocus?: string
    backColorHover?: string
    textColorHover?: string
}

export const StyledButton = styled.button<Props>`
    height: ${(props)=> props.height || "48px"};
    width: ${(props)=> props.width || "228px"};
    
    border: ${(props)=> props.border || `solid var(--grey4, grey) var(--border-size, 1.5px)`};

    background-color: ${(props) => props.backColor || "transparent"};
    color: ${props => props.textColor};
    border-radius: 4px;
    
    font-size: ${(props) => props.fontSize || `16px`};
    font-weight: 600;
    letter-spacing: 0em;

    
    &:focus {
        height: ${(props)=> props.heightFocus};
        width: ${(props)=> props.widthFocus};
        
        border: ${(props)=> props.borderFocus};
    
        background-color: ${(props) => props.backColorFocus || `var(--brand1)`};
        color: ${props => props.textColorFocus || `var(--whiteFixed)`};
        border-radius: 4px;
    
        font-size: ${(props) => props.fontSizeFocus || `16px`};
        font-weight: 600;
        letter-spacing: 0em;
    }
    
    &:hover {
        filter: brightness(110%);
        background-color: ${(props) => props.backColorHover};
        color: ${(props) => props.textColorHover}
    } 
`;
