import { useContext } from "react"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import ImagemModal from "../../components/ImagemModal"
import SpecificAnnouncement from "../../components/SpecificAnnouncement"
import { AnnouncementContext } from "../../contexts/announcementContext"
import { ContainerAnnouncement } from "./styles"


const Announcement: React.FC = () => {

  const {imageModal} = useContext(AnnouncementContext);

  return (
    <ContainerAnnouncement>
      {imageModal && <ImagemModal/>}
      <Header/>
      <SpecificAnnouncement/>
      <Footer/>
    </ContainerAnnouncement>
  )
}

export default Announcement;