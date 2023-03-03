import styled from "styled-components";

export const ContainerModalImagem = styled.div`
  z-index: 4;
  position: fixed;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  section {
    width: 60%;
    max-width: 520px;
    min-width: 340px;
    height: 300px;
    margin: 0 auto;
    margin-top: 80px;

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
      figure {
        width: 100%;
        height: 300px;
        background-color: var(--grey7);
        border-radius: 8px;
        margin-bottom: 8px;

        @media (max-width: 600px) {
          height: 230px;
        }

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`