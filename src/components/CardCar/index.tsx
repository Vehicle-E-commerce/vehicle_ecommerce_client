import { useContext } from "react";
import {
  AnnouncementContext,
  ICardData,
} from "../../contexts/announcementContext";
import { CardCar } from "./styles";


const CardsCar = ({cover_image, title, year, mileage, price, bio, user_name, data}: ICardData) => {

  const {setVehicleSpecific, navigate} = useContext(AnnouncementContext);

  return (
    <CardCar onClick={() => {
      setVehicleSpecific(data)
      navigate("announcement/", {replace:true})
      window.scrollTo(0,0)
    }}>

      <figure>
        <img src={cover_image} alt={cover_image} />
      </figure>
      <h2>{title}</h2>
      <p>{bio}</p>
      <div className="advertiser-box">
        <h2>{user_name && user_name[0].toLocaleUpperCase()}</h2>
        <h3>{user_name}</h3>
      </div>
      <div className="data-box">
        <div className="km-date">
          <span>{mileage} KM</span>
          <span>{year}</span>
        </div>
        <span className="value">R$ {price && price},00</span>
      </div>
    </CardCar>
  );
};
export default CardsCar;
