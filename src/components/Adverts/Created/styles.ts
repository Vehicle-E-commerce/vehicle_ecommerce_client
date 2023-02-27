import styled from "styled-components";

export const ContainerCreatedAnnouncement = styled.div`
    display: flex;
    
    width: 100vw;
    height: 1533px;

    background-color: rgba(0,0,0,0.5);

    .mainAnnouncement{
        background-color: var(--whiteFixed);
        
        height: 1174px;
        width: 520px;

        margin: auto;
        border-radius: 8px;
    }

    .isActive {
        background-color: var(--brand1);
        color: var(--brand4)
    }

`


export const HeaderAnnouncement = styled.header`
    height: 56px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0px 24px 20px 24px;

    h1 {
        font-weight: 500;
        color: var(--grey1);
    }
`


export const TypeAnnouncement = styled.div`
    margin: 0px 30px 24px 24px;

    label{
       font-size: 14px;
       font-weight: 500;
    }

    .buttonsTypeAnnouncement{
        display: flex;
        justify-content: space-between;

        margin-top: 18px;
    }
`


export const VehicleInformation = styled(TypeAnnouncement)`
    display: flex;
    flex-direction: column;
`


export const ContainerAgeKmPrice = styled.div`
    margin-top: 24px;

    display: flex;
    justify-content: space-between;

    div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        width: 148px;
        height: 73px;
    }
`


export const ContainerDesc = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 24px;

    textarea {
        width: 440px;
        height: 80px;

        border-radius: 4px;
        border: 1.5px solid var(--grey7);

        padding-left:24px;
        padding-top: 16px;
        margin-top: 8px; 
    }
`


export const TypeOfVehicle = styled(ContainerDesc)`
    div {
        display: flex;
        justify-content: space-between;

        margin-top: 8px;
    }
`

export const ContainerImgs = styled(TypeOfVehicle)`
    div {
        margin-bottom: 24px;
        flex-direction: column;
    }

    ul {
        overflow: auto;
        height: 237px;
    }

    li {
        display: flex;
        flex-direction: column;
        margin-bottom: 24px;
    }

    
`

export const ContainerBtnCreated = styled.div`
    display: flex;
    justify-content: space-between;
    
    width: 329px;

    position: relative;
    top: 75px;
    left: 137px;
`

