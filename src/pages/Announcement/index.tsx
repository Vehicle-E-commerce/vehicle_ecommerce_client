import Footer from "../../components/Footer"
import Header from "../../components/Header"
import SpecificAnnouncement from "../../components/SpecificAnnouncement"
import { ContainerAnnouncement } from "./styles"


const Announcement: React.FC = () => {
  return (
    <ContainerAnnouncement>
      <Header/>
      <SpecificAnnouncement/>
      <Footer/>
    </ContainerAnnouncement>
  )
}

export default Announcement;