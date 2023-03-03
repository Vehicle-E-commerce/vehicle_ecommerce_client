import { ReactNode } from "react";
import { StyledButton } from "./styles";

interface Props {
  id?: string;
  height?: string;
  width?: string;
  backColor?: string;
  border?: string;
  textColor?: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({
  id,
  children,
  height,
  width,
  backColor,
  border,
  textColor,
  className,
  onClick,
  ...rest
}) => {
  return (
    <StyledButton
      id={id}
      height={height}
      width={width}
      backColor={backColor}
      border={border}
      textColor={textColor}
      className={className}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
