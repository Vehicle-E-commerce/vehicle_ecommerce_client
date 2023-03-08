import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ModalResetPassword from "../../components/ModalResetPassword";
import { ContainerRecovery } from "./styles";


const ResetPassword = () => {

  return (
    <ContainerRecovery>
      <Header />
      <ModalResetPassword />
      <Footer />
    </ContainerRecovery>
  );
};

export default ResetPassword;
