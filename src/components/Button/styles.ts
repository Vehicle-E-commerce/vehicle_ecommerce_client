import styled from "styled-components";

interface Props {
    height?: string
    width?: string
    backColor?: string
    border?: string
    textColor?: string
    margin?: string
}

export const StyledButton = styled.button<Props>`
  height: ${(props) => props.height || "48px"};
  width: ${(props) => props.width || "146px"};
  margin: ${(props) => props.margin};
  

  border: ${(props) =>
    props.border || `solid var(--grey4, grey) var(--border-size, 1.5px)`};

  background-color: ${(props) => props.backColor || "transparent"};
  color: ${(props) => props.textColor};
  border-radius: 4px;

  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0em;

  &:hover {
    filter: brightness(110%);
  }
`;
