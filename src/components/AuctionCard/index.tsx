import { BsArrowRight, BsClock } from "react-icons/bs";
import carImg from "../../assets/IMG/Photoauctionimg.png";
import { ContainerAuction } from "./styles";

const AuctionCard = () => {
  return (
    <ContainerAuction>
      <section>
        <figure>
          <img src={carImg} alt="carImg" />
        </figure>
        <nav>
          <div className="box-hour">
            <BsClock />
            <p>01:58:00</p>
          </div>
          <h2>Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 </h2>
          <p id="descrip">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            laborum saepe labore officia quasi voluptates. Eius nam alias
            commodi quibusdam qui eveniet minima, eaque, quis dolores dolorem
            consectetur, recusandae aliquam.
          </p>
          <div className="box-user">
            <h3>R</h3>
            <p>Rodrigo Tavares</p>
          </div>
          <div className="box-data">
            <div className="km-date">
              <span>2013</span>
              <span>0 KM</span>
            </div>
            <span className="value">R$ 00.000,00</span>
          </div>
        </nav>
      </section>
      <button>
        <span>Acessar página do leilão</span>
        <BsArrowRight />
      </button>
    </ContainerAuction>
  );
};

export default AuctionCard;
