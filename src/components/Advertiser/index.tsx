import AuctionList from "../AuctionList";
import Button from "../Button";
import Carlist from "../CarList";
import MotorBikelist from "../MotorBikeList";
import { Cont, Container } from "./styles";

const colors_bg_icon_perfil = [
    "#FF7F50",
    "#00BFFF",
    "#8A2BE2",
    "#20B2AA",
    "#FFA500",
    "#FF69B4",
    "#9370DB",
  ];
  const number_color = Math.floor(Math.random() * colors_bg_icon_perfil.length);

const Advertiser: React.FC = () => {
  return (
    <Container>
      <Cont height="397px" width="90vw" marginTop="75px" padding="29px">
        <Cont
          className="initial_perfil"
          style={{
            backgroundColor: colors_bg_icon_perfil[number_color],
          }}
        >
          <p>U</p>
          <p>L</p>
        </Cont>
        <h1>Usuario Logado
        <span>Anunciante</span>
        </h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam quos, veritatis perferendis fugiat officiis incidunt voluptatibus vitae voluptatem perspiciatis vel libero necessitatibus facilis commodi unde itaque rerum dolorum. Sit, similique!</p>
      </Cont>
      <Carlist/>
      <MotorBikelist/>
   
    </Container>
  );
};

export default Advertiser;