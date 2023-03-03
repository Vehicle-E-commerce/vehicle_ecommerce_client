import { useContext } from "react";
import { AnnouncementContext } from "../../contexts/announcementContext";
import CardsCar from "../CardCar"
import { ContainerMotorBikeList } from "./styles"

const MotorBikelist = () => {

  const {motorbikeList} = useContext(AnnouncementContext);

  return (
    <ContainerMotorBikeList id="motorbike-list">
      <label>Motos</label>
      <ul>
        {
          motorbikeList.length === 0 ?
          <div>Sem motos amostra</div>
          :
          motorbikeList.map((motorbike) => (
            <CardsCar 
              key={motorbike.id}
              cover_image={motorbike.cover_image}
              title={motorbike.title}
              bio={motorbike.bio}
              user_name={motorbike.user.name.split(" ")[0]}
              mileage={motorbike.mileage}
              year={motorbike.year}
              price={motorbike.price}
              data={motorbike}
            />
          ))
        }
      </ul>
    </ContainerMotorBikeList>
  )
}

export default MotorBikelist;