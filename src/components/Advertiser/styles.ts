import styled from "styled-components";

interface Props {
  height?: string
  width?: string
  marginTop?: string
  backColor?: string
  border?: string
  textColor?: string
  padding?: string

}

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  display: flex;
  background: rgb(69,41,230);
  background: linear-gradient(180deg, rgba(69,41,230,1) 44vh, rgba(240,240,240,1) 30vh);
  align-items: center;
`;

export const Cont = styled.div<Props>`
  margin-top: ${(props)=> props.marginTop};
  border-radius: 4px;
  background: #fdfdfd;
  max-width: 1240px;
  height: ${(props)=> props.height || "104px"};
  width: ${(props)=> props.width || "104px"};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: ${(props)=> props.padding};;


  @media (min-width: 767px){
    height: 327px;
  }
  h1{
    font-family: Lexend;
    font-size: 20px;
    font-weight: 600;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    display: flex;
    align-items: center;

  }
  

  .initial_perfil {
    border-radius:  50%;
    width: 104px;
    height: 104px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: ${(props)=> props.theme.colors.text};
    font-weight: bold;
    text-transform: uppercase;
    p{
      font-family: Inter;
      font-size: 36px;
      font-weight: 500;
      line-height: 53px;
      letter-spacing: 0em;
      text-align: left;

    }
  };

  span {
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    display: flex;

    border-radius: 4px;
    
    height: 32px;
    width: 92px;

    background-color: #EDEAFD;
    color: #4529E6;
    margin-left: 17px;
    justify-content: center;
    align-items: center;
  };

  p{
    color: var(--grey2);
  }
`