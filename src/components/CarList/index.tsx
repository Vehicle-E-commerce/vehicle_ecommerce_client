import { useContext } from "react"
import { AnnouncementContext } from "../../contexts/announcementContext"
import CardsCar from "../CardCar"
import { ContainerCarList } from "./styles"


const Carlist = () => {

  const {carList} = useContext(AnnouncementContext);

  return (
    <ContainerCarList id="car-list">
      <label>Carros</label>
      <ul>
        {
          carList.length === 0 ?
          <div>Sem carros amostra</div>
          :
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
        }
      </ul>
    </ContainerCarList>
  )
}

export default Carlist;