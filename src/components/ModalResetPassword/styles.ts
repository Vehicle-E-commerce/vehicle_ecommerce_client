import styled from "styled-components";


export const Container = styled.div`
    background-color: var(--grey10);
    /* background-color: red; */

    width: 343px;
    height: 500px;
    margin: 4%;

    border-radius: 10px;

    padding: 0px 28px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .success{
        color: var(--sucess1);
        background: var(--sucess3);
        border: 0;
        border-radius: 3px;
        padding: 1rem;
        width: fit-content;

    }
    .fail{
        width: fit-content;
        color: var(--alert1);
        background: var(--alert3);
        border: 0;
        border-radius: 3px;
        padding: 1rem; 
    }
    .success, .fail{
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
    
`