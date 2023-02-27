import modelCar from "../../assets/IMG/carModel.png";
import { CardCar } from "./styles";

const CardsCar = () => {
  return (
    <CardCar>
      <figure>
        <img src={modelCar} alt="nameCar" />
      </figure>
      <h2>Product title stays here - max 1 line</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor magni
        velit doloremque vel cum explicabo quam, in est sed ipsum. Consectetur
        amet, maiores quo perspiciatis quasi exercitationem voluptates in
        nostrum!
      </p>
      <div className="advertiser-box">
        <h2>R</h2>
        <h3>Anunciante</h3>
      </div>
      <div className="data-box">
        <div className="km-date">
          <span>0 KM</span>
          <span>2019</span>
        </div>
        <span className="value">R$ 00.000,00</span>
      </div>
    </CardCar>
  );
};
export default CardsCar;
