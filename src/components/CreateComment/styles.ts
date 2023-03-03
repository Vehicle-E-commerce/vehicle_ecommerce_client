import styled from "styled-components";

export const ContainerCreateComment = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;

  .user-box {
    display: flex;
    align-items: center;
    gap: 10px;

    h2 {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      background-color: var(--brand1);
      color: var(--whiteFixed);
      border-radius: 50%;
      font-size: 14px;
    }
    h3 {
      font-size: 14px;
    }
  }
  .input-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    border: 1.5px solid var(--grey7);
    padding: 20px;

    input {
      width: 100%;
      padding-bottom: 40px;
      font-size: 16px;
      border: none;
      outline: none;
    }

    button {
      background-color: var(--brand1);
      color: var(--whiteFixed);
      border: 1.5px solid var(--brand1);
      border-radius: 4px;
      padding: 10px;
      font-size: 14px;
      font-weight: 600;

      :hover {
        transform: scale(1.1);
      }
      
    }
  }
  .examples {
    display: flex;
    gap: 10px;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 20px;
      background-color: var(--grey7);
      color: var(--grey3);
      border-radius: 20px;
      font-size: 12px;
      cursor: pointer;
    }
  }
`