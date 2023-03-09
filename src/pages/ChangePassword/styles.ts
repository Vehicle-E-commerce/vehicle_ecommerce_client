import styled from "styled-components";


export const Container = styled.div`
    background-color: var(--grey7);
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5vh;

    .expiredCont{
        height: 30vh;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 0.5rem;
    
        font-size: medium;
        font-weight: bold;
        
        span{
            margin-left: 1rem;
            font-size: medium;
            font-weight: bold;
            background: linear-gradient(90deg, ${(props) => props.theme.colors.text} 0%, rgba(69,41,230,1) 35%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            cursor: pointer;
        }
    }

`
export const Title = styled.h1`
  background: linear-gradient(90deg, ${(props) => props.theme.colors.text} 0%, rgba(69,41,230,1) 35%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  font-size: 50px;
  font-weight: 600;
  cursor: pointer;
  .word_shop{
    align-self: flex-end;
    font-size: 30px;
    margin-left: 0.5rem;
    margin-bottom: 0.2rem;
  }
`

export const ContainerModal = styled.div`
    background-color: var(--grey10);

    top: 49vh;
    right: 49vw;

    width: 343px;
    height: 450px;

    border-radius: 10px;

    padding: 0px 28px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    .CONTsuccessChange{
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        /* justify-content: space-around; */
        h1{
            font-size: large;
            margin: 2rem 0 2rem 0;
            
        }
        h2{
            font-size: large;
            overflow: hidden;
            white-space: nowrap;
            animation: slow-write 2s steps(100, end);

            @keyframes slow-write {
            from {
                width: 0;
            }
            to {
                width: 100%;
            }
            }
        }


    }
    .fail{
        width: fit-content;
        color: var(--alert1);
        background: var(--alert3);
        border: 0;
        border-radius: 3px;
        padding: 1rem; 
        
        opacity: 0;
        animation: fade-in 1s forwards;
        @keyframes fade-in {
        from {
            display: none;
            opacity: 0;
        }
        to {
            opacity: 1;
        }
        }
    }
    h1{
        font-family: Lexend;
        font-size: 25px;
        font-weight: 500;
        line-height: 30px;
        letter-spacing: 0em;
        text-align: center;
    }
    span{
        text-align: center;
    }
    label{
        font-family: Inter;
        font-size: 24px;
        font-weight: 500;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: left;
    }
    a{
        text-align: center;
        background: linear-gradient(90deg, ${(props) => props.theme.colors.text} 0%, rgba(69,41,230,1) 35%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        cursor: pointer;
    }
`
export const Cont = styled.div`
    width: 100%;
    height: fit-content;
`