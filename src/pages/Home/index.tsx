import React, { useContext } from "react";
import DeleteAnnouncementModal from "../../components/DeleteAnnouncementModal";
import EditAddressModal from "../../components/EditAddressModal";
import EditAnnouncementModal from "../../components/EditAnnouncementModal";
import EditUserModal from "../../components/EditUserModal";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";
import { AnnouncementContext } from "../../contexts/announcementContext";
import { Container } from "./styles";

const Home: React.FC = () => {

  const { userEditAddress, userEditModal, updateAdModal, deleteAdModal } = useContext(AnnouncementContext);

  return (
    <Container>
      {userEditAddress && <EditAddressModal/>}
      {userEditModal && <EditUserModal/>}
      {updateAdModal && <EditAnnouncementModal/>}
      {deleteAdModal && <DeleteAnnouncementModal/>}
      <Header />
      <Main />
      <Footer />
    </Container>
  );

};

export default Home;
