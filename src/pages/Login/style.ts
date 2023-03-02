import styled from "styled-components";

export const ContainerLogin = styled.div`
    background-color: var(--grey8);

    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 24px;
        font-weight: 500;
        line-height: 30px;
        color: #000000;
    }

    .containerDataUser {
        width: 100%;
    }

`

export const MainLogin = styled.div`
    background-color: var(--grey10);
    
    width: 343px;
    height: 542px;

    border-radius: 4px;

    padding: 44px 28px;
    gap: 32px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    .recoverPassword, .createCont {
        background-color: var(--grey10);
        border: none;

        font-weight: 500;
        color: var(--grey2);
    }

    .recoverPassword {
        margin-top: 8px;
        position: relative;
        left: 119px;
        
        :hover {
            text-decoration: underline;
        }
    }

    .createCont {
        :hover {
            text-decoration: underline;
        }
    }

    @media (min-width: 768px) {
        width: 412px;

        .recoverPassword {
            left: 219px;
        }
    }
    
`
export const ContainerButtons = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;
    height: 100%;
`