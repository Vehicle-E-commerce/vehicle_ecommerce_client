import { useContext } from "react"
import DeleteAnnouncementModal from "../../components/DeleteAnnouncementModal"
import EditAddressModal from "../../components/EditAddressModal"
import EditCommentModal from "../../components/EditCommentModal"
import EditUserModal from "../../components/EditUserModal"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import ImagemModal from "../../components/ImagemModal"
import SpecificAnnouncement from "../../components/SpecificAnnouncement"
import { AnnouncementContext } from "../../contexts/announcementContext"
import { ContainerAnnouncement } from "./styles"


const Announcement: React.FC = () => {

  const {imageModal, userEditAddress, userEditModal, deleteAdModal, commentModal} = useContext(AnnouncementContext);

  return (
    <ContainerAnnouncement>
      {imageModal && <ImagemModal/>}
      {userEditAddress && <EditAddressModal/>}
      {userEditModal && <EditUserModal/>}
      {deleteAdModal && <DeleteAnnouncementModal/>}
      {commentModal && <EditCommentModal/>}
      <Header/>
      <SpecificAnnouncement/>
      <Footer/>
    </ContainerAnnouncement>
  )
}

export default Announcement;