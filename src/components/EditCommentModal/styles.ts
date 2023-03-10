import styled from "styled-components";

export const ContainerModalEdit = styled.div`
  z-index: 4;
  position: fixed;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;


  section {
    width: 60%;
    max-width: 520px;
    min-width: 284px;

    .base-modal {
      width: 100%;
      background-color: var(--whiteFixed);
      border-radius: 8px;
      border: 1.5px solid var(--whiteFixed);
      padding: 10px 20px;

      .mini-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 40px;

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

      form {
        display: flex;
        flex-direction: column;
        gap: 20px;

        textarea {
          height: 82px;
          resize: none;
          overflow: hidden;
          outline: none;
          padding: 10px 0 0 10px;
          border: 1.5px solid var(--grey4);
          border-radius: 4px;
          transition: 1s;
          line-height: 28px;

          :hover, :focus {
            border: 1.5px solid var(--brand1);
            transition: 1s;
          }
        }
        .btn-box {
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: end;
          gap: 15px;

          button {
            height: 48px;
            padding: 0 30px;
            border-radius: 4px;
            font-weight: 600;
            font-size: 16px;

            :hover {
              text-decoration: underline;
            }
          }

          .edit {
            border: 1.5px solid var(--brand1);
            color: var(--whiteFixed);
            background-color: var(--brand1);
          }
          .delete {
            border: 1.5px solid var(--alert1);
            background-color: var(--alert1);
            color: var(--whiteFixed);
          }
        }
      }
    }
  }
`