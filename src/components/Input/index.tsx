import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from "react";
import { StyledInput } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  height?: string;
  width?: string;
  backColor?: string;
  border?: string;
  textColor?: string;
  margin?: string;
  name?:string
  onCharge?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { height, width, backColor, border, textColor, margin, name, onCharge, ...rest },
  ref
) => {
  return (
    <StyledInput
      height={height}
      width={width}
      backColor={backColor}
      border={border}
      textColor={textColor}
      name={name}
      onChange={onCharge}
      ref={ref}
      {...rest}
    />
  );
};

export const Input = forwardRef(InputBase);
