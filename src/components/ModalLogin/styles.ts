import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--grey10);
    
    width: 343px;
    height: 502px;

    border-radius: 4px;

    padding: 44px 28px;
    margin: 20px 10px;
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