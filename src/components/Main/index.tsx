import AuctionList from "../AuctionList";
import Button from "../Button";
import Carlist from "../CarList";
import MotorBikelist from "../MotorBikeList";
import { ArticleHome, MainHome } from "./styles";

const Main: React.FC = () => {
  return (
    <MainHome>
      <ArticleHome>
        <h1>Velocidade e experiência em um lugar feito para você</h1>
        <p>Um ambiente feito para você explorar o seu melhor</p>
        <div>
          <Button textColor= "var(--grey10)">Carros</Button>
          <Button textColor= "var(--grey10)">Motos</Button>
        </div>
      </ArticleHome> 
      <AuctionList/>
      <Carlist/>
      <MotorBikelist/>
    </MainHome>
  );
};

export default Main;
