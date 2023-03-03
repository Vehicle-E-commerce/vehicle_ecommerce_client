import { StyledInput } from "./styles";

interface Props {
  id?: string;
  type?: string;
  height?: string;
  width?: string;
  backColor?: string;
  border?: string;
  textColor?: string;
  placeholder?: string;
  margin?: string;
  value?: string;
  onCharge?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const Input: React.FC<Props> = ({
  id,
  type,
  height,
  width,
  backColor,
  border,
  textColor,
  placeholder,
  margin,
  value,
  onCharge,
  ...rest
}) => {
  return (
    <StyledInput
      id={id}
      height={height}
      width={width}
      backColor={backColor}
      border={border}
      textColor={textColor}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onCharge}
    />
  );
};

export default Input;
