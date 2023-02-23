import styled from "styled-components";

export const CardCar = styled.li`
  display: flex;
  flex-direction: column;
  gap: 13px;

  width: 230px;
  height: 300px;

  margin: 0 auto;

  figure {
    display: flex;
    justify-content: center;
    width: 100%;
    border: 1px solid var(--grey7);
    background-color: var(--grey7);
    
    :hover {

      border: 1px solid var(--brand2);

      img {
        transform: scale(1.1);
        transition: 0.8s;
      }
    }

    img {
      width: 90%;
      height: 100%;
      margin: 0 auto;
    }
  }

  h2 {
    font-weight: bold;
    font-size: 13px;
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    overflow: hidden;

    padding: 1px 0;

    font-size: 12px;
    color: var(--grey2);
  }

  .advertiser-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 7px;

    h2 {
      width: 12px;
      height: 12px;
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
        background-color: var(--grey7);
        border-radius: 3px;
        color: var(--brand2);
        font-size: 13px;
        padding: 7px;
      }
    }
    .value {
      font-size: 16px;
      font-weight: bold;
    }
  }
`