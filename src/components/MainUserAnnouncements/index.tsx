
import { useContext } from "react";
import CreateAnnouncement from "../../Adverts/Created";
import { AnnouncementContext } from "../../contexts/announcementContext";
import { LoginContext } from "../../contexts/Login";
import AuctionList from "../AuctionList";
import Carlist from "../CarList";
import CarlistUser from "../CarListUser"
import MotorBikelistUser from "../MotorBikeListUser"
import MotorBikelist from "../MotorBikeList";
import { ContainerArticleUser, ContainerMainUserAnnouncement } from "./styles";

const MainUserAnnouncement = () => {
  const { user } = useContext(LoginContext);
  const { isCreateAnnou, openAndClosedModalCreateAnnou } =
    useContext(AnnouncementContext);

  return (
    <ContainerMainUserAnnouncement>
      <ContainerArticleUser>
        <h1>{user?.name.substring(0, 1).toLocaleUpperCase()}</h1>
        <div>
          <h2>{user?.name}</h2>
          <span>{user?.is_advertiser && "Anunciante"}</span>
        </div>
        <p>{user?.bio}</p>
        <button onClick={openAndClosedModalCreateAnnou}>Criar anúncio</button>
      </ContainerArticleUser>
      <AuctionList />
      <Carlist />
      <MotorBikelist />
      {isCreateAnnou ? <CreateAnnouncement /> : <></>}
    </ContainerMainUserAnnouncement>
  );
};

export default MainUserAnnouncement;
