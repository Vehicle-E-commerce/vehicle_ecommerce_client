import AuctionCard from "../AuctionCard";
import Button from "../Button";
import CardsCar from "../CardCar";
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
      <ul className="auction">
        <AuctionCard />
        <AuctionCard />
        <AuctionCard />
        <AuctionCard />
        <AuctionCard />
      </ul>
      <ul className="cars">
        <CardsCar />
        <CardsCar />
        <CardsCar />
        <CardsCar />
        <CardsCar />
        <CardsCar />
      </ul>
      <ul className=" motorBike">
        <CardsCar />
        <CardsCar />
        <CardsCar />
        <CardsCar />
        <CardsCar />
        <CardsCar />
      </ul>
    </MainHome>
  );
};

export default Main;
