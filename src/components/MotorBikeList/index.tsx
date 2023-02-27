import CardsCar from "../CardCar"
import { ContainerMotorBikeList } from "./styles"

const MotorBikelist = () => {

  const number = [0, 1, 2, 3, 4, 5, 6, 7]

  return (
    <ContainerMotorBikeList>
      <label>Motos</label>
      <ul>
        {
          number.length === 0 ?
          <div>Sem motos amostra</div>
          :
          number.map((el) => (
            <CardsCar key={el}/>
          ))
        }
      </ul>
    </ContainerMotorBikeList>
  )
}

export default MotorBikelist;