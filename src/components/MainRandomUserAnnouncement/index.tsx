import { useContext } from "react"
import { AnnouncementContext } from "../../contexts/announcementContext"
import { LoginContext } from "../../contexts/Login"
import AuctionList from "../AuctionList"
import Carlist from "../CarList"
import MotorBikelist from "../MotorBikeList"
import { ContainerArticleUser, ContainerMainUserAnnouncement } from "./styles"

const MainRandomUserAnnouncement = () => {

  const { vehicleSpecific } = useContext(AnnouncementContext);
  const { user } = useContext(LoginContext);

  return (
    <ContainerMainUserAnnouncement>
      <ContainerArticleUser>
        <h1>{vehicleSpecific?.user.name.substring(0,1).toLocaleUpperCase()}</h1>
        <div>
          <h2>{vehicleSpecific?.user.name}</h2>
          <span>{vehicleSpecific?.user.is_advertiser && "Anunciante"}</span>
        </div>
        <p>{vehicleSpecific?.user.bio}</p>
        {user?.id === vehicleSpecific?.user.id && 
          <button>Criar anúncio</button>
        }
      </ContainerArticleUser>
      <AuctionList/>
      <Carlist/>
      <MotorBikelist/>
    </ContainerMainUserAnnouncement>
  )
}

export default MainRandomUserAnnouncement