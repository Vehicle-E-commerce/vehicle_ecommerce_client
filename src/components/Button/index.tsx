import styled from "styled-components";
import { StyledButton } from "./styles";
import { ReactNode } from "react";

interface Props {
    height?: string
    width?: string
    backColor?: string
    border?: string
    textColor?: string
    children: ReactNode

}

const Button: React.FC<Props> = ({children, height, width, backColor, border, textColor, ...rest  }) => {
    return(
        <StyledButton 
            height={height}
            width={width}
            backColor={backColor}
            border={border}
            textColor={textColor} >
                {children}
        </StyledButton>
    )
}

export default Button