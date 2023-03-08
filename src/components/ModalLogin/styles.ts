import styled from "styled-components";

export const Container = styled.form`
  background-color: var(--grey10);

  width: 343px;
  height: 502px;

  border-radius: 4px;

  padding: 44px 28px;
  margin: 20px 10px;
  gap: 32px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  .recoverPassword,
  .createCont {
    background-color: var(--grey10);
    border: none;

    font-weight: 500;
    color: var(--grey2);
  }

  .recoverPassword {
    margin-top: 8px;
    position: relative;
    left: 119px;

    :hover {
      text-decoration: underline;
    }
  }

  .createCont {
    :hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 768px) {
    width: 412px;

    .recoverPassword {
      left: 219px;
    }
  }
`;
export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 100%;
`;
export const TagP = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;

export const StyledInputLogin = styled.input`
  height: 48px;
  margin: "8px 0px 24px 0px";
  width: 100%;

  border: "solid var(--grey7) var(--border-size, 1.5px)";
  border-radius: 4px;

  background-color: "transparent";

  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0em;

  padding-left: 16px;
  margin-top: 8px;
`;
