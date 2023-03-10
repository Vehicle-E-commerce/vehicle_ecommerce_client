import { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { AnnouncementContext } from "../../contexts/announcementContext";
import CardsCar from "../CardCar";
import { ContainerCarList } from "./styles";

const Carlist = () => {
  const { carList } = useContext(AnnouncementContext);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <ContainerCarList id="car-list">
      <label>Carros</label>
      <Slider {...settings}>
        {carList.length === 0 ? (
          <div>Sem carros amostra</div>
        ) : (
          carList.map((car) => (
            <CardsCar
              key={car.id}
              cover_image={car.cover_image}
              title={car.title}
              bio={car.bio}
              user_name={car.user.name.split(" ")[0]}
              mileage={car.mileage}
              year={car.year}
              price={car.price}
              data={car}
            />
          ))
        )}
      </Slider>
    </ContainerCarList>
  );
};

export default Carlist;
