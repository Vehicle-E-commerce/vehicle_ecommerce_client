import AuctionCard from "../AuctionCard";
import { ContainerAuctionList } from "./styles";

const AuctionList = () => {

  const number = [0, 1, 2, 3, 4, 5, 6, 7]

  return (
    <ContainerAuctionList>
      <label>Leilão</label>
      <ul>
        {
          number.length === 0 ?
          <div>Sem item à serem leiloados</div>
          :
          number.map((el) => (
            <AuctionCard key={el}/>
          ))
        }
      </ul>
    </ContainerAuctionList>
  )
}

export default AuctionList;