import React, { useContext } from 'react'
import DeleteAnnouncementModal from '../../components/DeleteAnnouncementModal'
import EditAddressModal from '../../components/EditAddressModal'
import EditAnnouncementModal from '../../components/EditAnnouncementModal'
import EditUserModal from '../../components/EditUserModal'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import MainRandomUserAnnouncement from '../../components/MainRandomUserAnnouncement'
import MainUserAnnouncement from '../../components/MainUserAnnouncements'
import { AnnouncementContext } from '../../contexts/announcementContext'
import { ContainerAdvertiserUser } from './styles'

const Advertiser = () => {

  const { userEditAddress, userEditModal, updateAdModal, deleteAdModal } = useContext(AnnouncementContext);

  return (
    <ContainerAdvertiserUser>
      {userEditAddress && <EditAddressModal/>}
      {userEditModal && <EditUserModal/>}
      {updateAdModal && <EditAnnouncementModal/>}
      {deleteAdModal && <DeleteAnnouncementModal/>}
      <Header/>
      <MainRandomUserAnnouncement/>
      <Footer/>
    </ContainerAdvertiserUser>
  )
}

export default Advertiser