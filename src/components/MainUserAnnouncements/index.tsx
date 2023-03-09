import { useContext } from "react"
import { LoginContext } from "../../contexts/Login"
import AuctionList from "../AuctionList"
import Carlist from "../CarList"
import MotorBikelist from "../MotorBikeList"
import { ContainerArticleUser, ContainerMainUserAnnouncement } from "./styles"

const MainUserAnnouncement = () => {

  const { user } = useContext(LoginContext);

  return (
    <ContainerMainUserAnnouncement>
      <ContainerArticleUser>
        <h1>{user?.name.substring(0,1).toLocaleUpperCase()}</h1>
        <div>
          <h2>{user?.name}</h2>
          <span>{user?.is_advertiser && "Anunciante"}</span>
        </div>
        <p>{user?.bio}</p>
        <button>
          Criar anúncio
        </button>
      </ContainerArticleUser>
      <AuctionList/>
      <Carlist/>
      <MotorBikelist/>
    </ContainerMainUserAnnouncement>
  )
}

export default MainUserAnnouncement