import styled from "styled-components";

export const ContainerModalDelete = styled.div`
  z-index: 4;
  position: fixed;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  section {
    width: 60%;
    max-width: 520px;
    min-width: 344px;
    margin: 0 auto;
    margin-top: 82px;

    .base-modal {
      width: 100%;
      background-color: var(--whiteFixed);
      border-radius: 8px;
      border: 1px solid var(--whiteFixed);
      padding: 10px 20px;

      h2 {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 30px;
      }

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
      
      p {
        line-height: 28px;
        font-size: 16px;
      }

      .btn-box {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: end;
        margin-top: 40px;
        gap: 15px;

        button {
          height: 48px;
          padding: 0 25px;
          font-size: 16px;
          font-weight: 600;
          background-color: var(--grey6);
          border: 1.5px solid var(--alert2);
          border-radius: 4px;
          transition: 1s;
          :hover {
            opacity: 100%;
          }
        }

        #cancel {
          color: var(--grey2);
          :hover {
            border: 1.5px solid var(--grey2);
          }
        }
        #delete {
          color: var(--alert1);
          :hover {
            border: 1.5px solid var(--alert1);
          }
        }
      }
    }
  }
`