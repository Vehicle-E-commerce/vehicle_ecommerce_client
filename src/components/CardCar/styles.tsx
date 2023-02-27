import styled from "styled-components";

export const CardCar = styled.li`
  display: flex;
  flex-direction: column;
  gap: 18px;

  min-width: 312px;
  min-height: 350px;

  figure {
    display: flex;
    justify-content: center;
    width: 100%;
    border: 2px solid var(--grey7);
    background-color: var(--grey7);
    
    :hover {

      border: 2px solid var(--brand2);

      img {
        transform: scale(1.1);
        transition: 1s;
      }
    }

    img {
      width: 90%;
      height: 100%;
      margin: 0 auto;
      transition: 1s;
    }
  }

  h2 {
    font-weight: bold;
    font-size: 16px;
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    overflow: hidden;

    padding: 1px 0;

    font-size: 14px;
    color: var(--grey2);
  }

  .advertiser-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 7px;

    h2 {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      text-align: center;
      background-color: var(--brand2);
      color: var(--random11);
      padding: 7px;
    }
    h3 {
      font-size: 14px;
      color: var(--grey2);
    }
  }

  .data-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .km-date {
      display: flex;
      flex-direction: row;
      gap: 10px;

      span {
        display: flex;
        background-color: var(--grey7);
        border-radius: 3px;
        color: var(--brand2);
        font-size: 14px;
        align-items: center;
        justify-content: center;
        width: 51px;
        height: 32px;
      }
    }
    .value {
      font-size: 16px;
      font-weight: bold;
      color: var(--grey1);
    }
  }
`