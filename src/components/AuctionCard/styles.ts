import styled from "styled-components";

export const ContainerAuction = styled.li`
  width: 600px;
  height: 320px;

  display: flex;
  flex-direction: column;

  margin: 0 auto;
  

  section {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    padding-bottom: 10px;

    border-radius: 3px 3px 0 0;

    background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
    transition: 1s;

    :hover {
      transition: 1s;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.71) 0%, #000000 100%);
    }
    
    figure {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -1;

      img {
        width: 100%;
        height: 100%;
      }
    }
    nav {
      width: 90%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 auto;
      gap: 20px;

      color: #FDFDFD;

      .box-hour {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        width: 80px;
        height: 20px;
        padding: 5px 10px 5px 7px;
        margin: 10px 0 45px 0;
        gap: 10px;
        background-color: #fff;
        border-radius: 32px;

        svg {
          color: var(--brand1);
          width: 18px;
          height: 18px;
        }
        p {
          color: var(--grey1);
          font-size: 12px;
        }
      }
      h2 {
        font-weight: bold;
        font-size: 17px;
      }
      p {
        font-size: 13px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden; 
      }

      .box-user {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;

        h3 {
          width: 27px;
          height: 27px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: var(--brand2);
          border-radius: 50%;
          font-size: 12px;
        }
        p {
          font-size: 12px;
        }
      }
      
      .box-data {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        .km-date {
          display: flex;
          flex-direction: row;
          gap: 10px;
          
          span {
            background-color: var(--grey6);
            border-radius: 3px;
            color: var(--brand2);
            font-size: 13px;
            padding: 7px;
          }
        }
        .value {
          font-weight: bold;
          font-size: 14px;
        }
      }
    }
  }
  button {
    color: #fff;
    background-color: var(--brand2);
    border: none;
    border-radius: 0 0 3px 3px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 55px;

    cursor: pointer;

    :hover {
      svg {
        padding-right: 15px;
        transition: 1s;
      }
    }

    span {
      font-size: 16px;
      padding-left: 25px;
    }
    svg {
      font-size: 30px;
      padding-right: 25px;
      transition: 1s;
    }
  }
`