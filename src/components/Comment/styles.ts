import styled from "styled-components";

export const ContainerComment = styled.li`
  display: flex;
  flex-direction: column;
  gap: 12px;

  .user-date {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;

    h2 {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--brand1);
      color: var(--whiteFixed);
    }
    h3 {
      font-size: 14px;
      font-weight: 500;
    }
    span {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: var(--grey2);
    }
    p {
      font-size: 14px;
    }
  }

  .comment {
    font-size: 14px;
    line-height: 28px;
    color: var(--grey2);
  }
`