import styled from "styled-components";

interface Props {
    height?: string
    width?: string
    backColor?: string
    border?: string
    textColor?: string
}

export const StyledButton = styled.button<Props>`
    height: ${(props)=> props.height || "48px"};
    width: ${(props)=> props.width || "146px"};
    border: ${(props)=> props.border || "solid #333 0.5px"};
    background-color: ${(props) => props.backColor || "transparent"};
    color: ${props => props.theme.colors.text};
    border-radius: 4px;
    
    &:hover {
        filter: brightness(110%);
    }
    
    
`;
