import styled from "styled-components";

export const ContainerEditAddress = styled.div`
  z-index: 4;
  position: fixed;
  display: flex;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;

  section {
    width: 60%;
    max-width: 520px;
    min-width: 344px;
    margin: 0 auto;

    .base-modal {
      width: 100%;
      background-color: var(--whiteFixed);
      border-radius: 8px;
      border: 1px solid var(--whiteFixed);
      padding: 10px 20px;
      display: flex;
      flex-direction: column;
      gap: 30px;

      .mini-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 10px;

        h2 {
          padding: 0;
          margin: 0;
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
        font-size: 14px;
      }
      
      form {
        display: flex;
        flex-direction: column;
        gap: 20px;

        label {
          font-size: 14px;
        }

        .input {
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 100%;

        }
        .dual-input {
          display: flex;
          flex-direction: row;
          width: 100%;
          gap: 10px;
        }
        input {
          width: 100%;
          height: 48px;
          font-size: 16px;
          padding: 0 0 0 10px;
          transition: 1s;
          outline: none;
          border-radius: 4px;
          border: 1.5px solid var(--grey4);

          :hover,:focus {
            transition: 1s;
            border: 1.5px solid var(--brand1);
          }
        }
        .btn-box {
          display: flex;
          flex-direction: row;
          justify-content: end;
          margin-top: 15px;
          gap: 15px;

          .close {
            color: var(--grey2);
            background-color: var(--grey6);
            border: 1.5px solid var(--grey6);

            :hover {
              opacity: 80%;
            }
          }
          .edit {
            color: var(--whiteFixed);
            background-color: var(--brand3);
            border: 1.5px solid var(--brand3);

            :hover {
              background-color: var(--brand1);
              border: 1.5px solid var(--brand1);
            }
          }

          button {
            padding: 12px 28px;
            font-size: 16px;
            font-weight: 600;
            border-radius: 4px;
          }
        }
      }
    }
  }
`