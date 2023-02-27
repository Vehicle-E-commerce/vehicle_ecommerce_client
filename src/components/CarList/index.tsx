import CardsCar from "../CardCar"
import { ContainerCarList } from "./styles"


const Carlist = () => {

  const number = [0, 1, 2, 3, 4, 5, 6, 7]

  return (
    <ContainerCarList>
      <label>Carros</label>
      <ul>
        {
          number.length === 0 ?
          <div>Sem carros amostra</div>
          :
          number.map((el) => (
            <CardsCar key={el}/>
          ))
        }
      </ul>
    </ContainerCarList>
  )
}

export default Carlist;