import { StyledButton } from "./styles";
import { ReactNode } from "react";

interface Props {
  height?: string;
  width?: string;
  margin?: string;
  backColor?: string;
  border?: string;
  textColor?: string;
  children: ReactNode;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({
  children,
  height,
  margin,
  width,
  backColor,
  border,
  textColor,
  onClick,
  ...rest
}) => {
  return (
    <StyledButton
      height={height}
      width={width}
      margin={margin}
      backColor={backColor}
      border={border}
      textColor={textColor}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
