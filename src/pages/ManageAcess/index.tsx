import { Container, ContainerModal } from "./style";
import { useContext } from "react";

import ModalResetPassword from "../../components/ModalResetPassword";
import ModalLogin from "../../components/ModalLogin";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { ThemesContext } from "../../contexts/Themes";

const Login = () => {
  const {modal, setModal} = useContext(ThemesContext)

  return (
    <Container>
      <Header />
      <ContainerModal>
        { modal === "login" ? 
          <ModalLogin/>
        : modal === "resetPassword" ?
          <ModalResetPassword />
        :
          <>Register</>
        }
      </ContainerModal>
      <Footer/>
    </Container>
  );
};

export default Login;
