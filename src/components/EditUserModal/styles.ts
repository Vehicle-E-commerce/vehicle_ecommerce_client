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

  ::-webkit-scrollbar {
    width: 12px;               /* width of the entire scrollbar */
  }
  ::-webkit-scrollbar-track {
    background: transparent;        /* color of the tracking area */
  }
  ::-webkit-scrollbar-thumb {
    background-color: transparent;    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
    border: 3px solid transparent;  /* creates padding around scroll thumb */
  }

  input[type="date"]::-webkit-inner-spin-button,
  input[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }

  section {
    width: 100%;
    max-width: 520px;
    min-width: 346px;
    margin: 0 auto;
    margin-top: 82px;

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
        margin: 10px 0 30px 0;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 15px;

        div {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

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
            font-family: sans-serif;
          }
        }
        textarea {
          width: 100%;
          height: 80px;
          line-height: 32px;
          padding: 10px 10px 0px 10px;
        }

        .btn-box {
          display: flex;
          flex-direction: row;
          justify-content: end;
          gap: 10px;

          
          button {
            height: 48px;
            padding: 0 30px 0 30px;
            font-size: 16px;
            font-weight: 600;
            border-radius: 4px;
          }

          .close {
            color: var(--grey2);
            background-color: var(--grey6);
            border: 1.5px solid var(--grey6);
          }
          .edit {
            color: var(--whiteFixed);
            background-color: var(--brand1);
            border: 1.5px solid var(--brand1);
          }
        }
      }
    }
  }
`