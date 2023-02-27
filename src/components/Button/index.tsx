import styled from "styled-components";
import { StyledButton } from "./styles";
import { ReactNode } from "react";

interface Props {
  id?: string;
  className?: string;
  height?: string;
  width?: string;
  backColor?: string;
  border?: string;
  textColor?: string;
  children: ReactNode;
  fontSize?: string;
  heightFocus?: string;
  widthFocus?: string;
  backColorFocus?: string;
  borderFocus?: string;
  textColorFocus?: string;
  fontSizeFocus?: string;
  backColorHover?: string;
  textColorHover?: string;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({
  id,
  className,
  children,
  height,
  width,
  backColor,
  border,
  textColor,
  fontSize,
  heightFocus,
  widthFocus,
  backColorFocus,
  borderFocus,
  textColorFocus,
  fontSizeFocus,
  backColorHover,
  textColorHover,
  onClick,
  ...rest
}) => {
  return (
    <StyledButton
      id={id}
      className={className}
      height={height}
      width={width}
      backColor={backColor}
      border={border}
      textColor={textColor}
      fontSize={fontSize}
      heightFocus={heightFocus}
      widthFocus={widthFocus}
      backColorFocus={backColorFocus}
      borderFocus={borderFocus}
      textColorFocus={textColorFocus}
      fontSizeFocus={fontSizeFocus}
      backColorHover={backColorHover}
      textColorHover={textColorHover}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
