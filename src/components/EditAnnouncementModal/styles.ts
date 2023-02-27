import styled from "styled-components";

export const ContainerModalEdit = styled.div`
  z-index: 4;
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow-x: hidden;

  section {
    width: 100%;
    max-width: 520px;
    min-width: 346px;
    margin: 0 auto;
    margin-top: 82px;
    margin-bottom: 82px;

    @media (max-width: 600px) {
      margin: 100px 20px 0 20px;
    }

    
    .base-modal {
      width: 100%;
      background-color: var(--whiteFixed);
      border-radius: 8px;
      border: 1px solid var(--whiteFixed);
      padding: 10px 20px;
      margin: 0 auto;

      .mini-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 20px;
        
        h2 {
          font-size: 16px;
          font-weight: 600;
        }
        svg {
          font-size: 20px;
          color: var(--grey4);
          height: 30px;
          transition: 1s;

          cursor: pointer;

          :hover {
            font-size: 30px;
            transition: 1s;
          }
        }
      }
      h3 {
        padding: 20px 0;
        font-size: 15px;
      }

      button {
        width: 48%;
        height: 48px;
        font-size: 16px;
        font-weight: 700;
        border-radius: 4px;
        transition: 1s;

        :hover {
          opacity: 70%;
          transition: 1s;
        }
      }
      .btn-1 {
        background-color: var(--brand1);
        color: var(--whiteFixed);
        border: 1px solid var(--brand1);
      }
      .btn-2 {
        background-color: transparent;
        border: 1px solid var(--grey4);
      }

      .sale-auction {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;

      }

      form {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 100%;
        gap: 20px;

        label {
          font-size: 14px;
          font-weight: 500;
        }
        input, textarea {
          width: 100%;
          height: 48px;
          border: 1.5px solid var(--grey7);
          border-radius: 4px;
          padding-left: 12px;
          outline: none;
          font-size: 16px;

          resize: none;
          overflow: hidden;

          transition: 1s;
          :hover, :focus {
            transition: 1s;
            border: 1.5px solid var(--brand2);
          }
          ::placeholder {
            color: var(--grey3);
          }
        }
        .title-box {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .year-km-price {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 100%;

          gap: 30px;

          @media (max-width: 770px) {
            flex-direction: column;
          }

          .responsive-box {
            display: flex;
            gap: 30px;
            min-width: 200px;
          }

          .box {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }
        }
        .description-box {
          display: flex;
          flex-direction: column;
          width: 100%;
          gap: 8px;

          textarea {
            width: 99%;
            height: 80px;
            line-height: 32px;
            padding: 10px 10px 0px 10px;
          }
        }
        .btn-box {
          display: flex;
          flex-direction: column;
          width: 100%;
          gap: 25px;

          div {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
          }
        }
        .img-box {
          display: flex;
          flex-direction: column;
          width: 100%;
          gap: 25px;

          div {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }
          button {
            background-color: var(--brand4);
            width: 70%;
            min-width: 314px;
            height: 38px;
            border: 1.5px solid var(--brand4);
            font-size: 14px;
            color: var(--brand1);

            :hover {
              opacity: 100%;
              border: 1.5px solid var(--brand1);
            }
          }
        }
        .edit-or-delete {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 15px;
          width: 103.5%;
          padding: 30px 0 10px 0;

          .delete-btn {
            width: 55%;
            background-color: var(--grey6);
            border: 1.5px solid var(--grey6);
            color: var(--grey2);

            :hover {
              opacity: 100%;
              background-color: var(--grey4);
              border: 1.5px solid var(--grey4);
              color: var(--grey1);
            }
          }
          .edit-btn {
            width: 45%;
            background-color: var(--brand3);
            border: 1.5px solid var(--brand3);
            color: var(--brand4);

            :hover {
              opacity: 100%;
              background-color: var(--brand2);
              border: 1.5px solid var(--brand2);
            }
          }
        }
      }
    }
  }
`