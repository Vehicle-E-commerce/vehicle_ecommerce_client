import styled from "styled-components";

export const ContainerSpecificAnnouncement = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  background-image: linear-gradient( to bottom, var(--brand1) 0, var(--brand1) 580px, var(--grey7) 580px, var(--grey7));

  .data-page {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 50px;

    @media (max-width: 800px) {
      justify-content: center;
      align-items: center;

      .main-aside {
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
    }

    .container-main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      min-width: 375px;
    }

    .main-aside {
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 50px;

      @media (min-width: 1500px) {
        display: flex;
        justify-content: space-between;
      }

      main {
        display: flex;
        flex-direction: column;
        width: 65%;
        max-width: 700px;

        @media (max-width: 800px) {
          width: 90%;
          min-width: 350px;
        }

        @media (min-width: 1500px) {
          max-width: 60%;
        }

        figure {
          height: 355px;
          width: 100%;
          min-width: 350px;
          background-color: var(--whiteFixed);
          border-radius: 4px;

          display: flex;
          justify-content: center;
          align-items: center;

          img {
            width: 70%;
            height: 60%;
          }
        }
        .data-car {
          background-color: var(--whiteFixed);
          border-radius: 4px;

          margin-top: 20px;
          padding: 40px 30px;

          display: flex;
          flex-direction: column;
          gap: 20px;

          h2 {
            font-weight: bold;
            font-size: 20px;
          }

          .date-km-value {
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            align-items: center;
            margin-top: 40px;

            .date-km {
              display: flex;
              flex-direction: row;
              gap: 8px;

              span {
                background-color: var(--brand4);
                padding: 5px;
                color: var(--brand1);
                font-size: 14px;
                border-radius: 4px;
              }
            }
            .value {
              font-size: 16px;
              font-weight: 600;
              padding-right: 10px;
            }
          }
          button {
            max-width: 100px;
            height: 38px;
            color: var(--whiteFixed);
            background-color: var(--brand1);
            border: 1.5px solid var(--brand1);
            border-radius: 4px;
            font-weight: 600;
            transition: 0.3s;

            :hover {
              font-size: 18px;
              transition: 0.3s;
            }
          }
        }
        .description-box {
          background-color: var(--whiteFixed);
          border-radius: 4px;
          margin-top: 40px;
          padding: 30px 30px;

          display: flex;
          flex-direction: column;
          gap: 30px;

          h2 {
            font-size: 20px;
            font-weight: bold;
          }
          p {
            font-size: 16px;
            color: var(--grey2);
            line-height: 28px;
          }
        }
      }
      aside {
        display: flex;
        flex-direction: column;
        max-width: 400px;
        min-width: 400px;
        gap: 40px;

        @media (max-width: 800px) {
          min-width: 350px;
        }
        @media (min-width: 1500px) {
          max-width: 40%;
          width: 40%;
        }

        .carImg-box {
          display: flex;
          flex-direction: column;
          justify-content: center;
          background-color: var(--whiteFixed);
          height: 377px;
          border-radius: 4px;
          padding: 10px 35px;
          
          label {
            margin: 40px 0;
            font-weight: bold;
          }

          ul {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            height: 80%;

            figure {
              width: 95px;
              height: 95px;
              background-color: var(--grey7);
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 4px;

              @media (max-width: 510px) {
                width: 80px;
                height: 80px;
              }

              img {
                width: 84px;
                height: 44px;
              }
            }
          }
        }
        .adversiter-box {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 40px 60px;
          gap: 30px;

          background-color: var(--whiteFixed);

          h2 {
            width: 80px;
            height: 80px;
            font-size: 30px;
            background-color: var(--brand1);
            color: var(--whiteFixed);
            border-radius: 50%;

            display: flex;
            align-items: center;
            justify-content: center;
          }
          h3 {
            font-size: 20px;
            font-weight: bold;
          }
          p {
            font-size: 16px;
            line-height: 28px;
            color: var(--grey2);
          }
          button {
            font-size: 14px;
            font-weight: 600;
            color: var(--whiteFixed);
            background-color: var(--grey0);
            border: 1.5px solid var(--grey0);
            border-radius: 4px;
            padding: 15px;

            :hover {
              text-decoration: underline;
            }
          }
        }

      }
    }
  }
`
export const ContainerComment = styled.article`
  min-width: 330px;
  max-width: 700px;
  min-height: 800px;
  margin-top: 20px;
  border-radius: 4px;
  margin-right: 10px;

  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 1500px) {
    max-width: 60%;
  }
  @media (max-width: 400px) {
    max-width: 100%;
    margin: 10px 10px 0px 10px;
  }
  
  .comment-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: var(--grey10);
    border-radius: 4px;
    padding: 50px;
    height: 600px;
    gap: 24px;

    label {
      font-size: 20px;
      font-weight: 600;
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 44px;
      width: 100%;
      overflow-x: hidden;

      ::-webkit-scrollbar {
        width: 12px;               /* width of the entire scrollbar */
      }
      ::-webkit-scrollbar-track {
        background: transparent;        /* color of the tracking area */
      }
      ::-webkit-scrollbar-thumb {
        background-color: blue;    /* color of the scroll thumb */
        border-radius: 20px;       /* roundness of the scroll thumb */
        border: 3px solid var(--whiteFixed);  /* creates padding around scroll thumb */
      }
    }
    .no-comments {
      display: flex;
      justify-content: center;
      align-items: center;
      height:500px;
      width: 100%;

      h1 {
        font-weight: 600;
      }
    }
  }
  .create-comment {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: var(--grey10);
    padding: 50px;
    border-radius: 4px;
  }
`