import { Container, ContainerModal } from "./style";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ModalLogin from "../../components/ModalLogin";

const Login = () => {
  return (
    <Container>
      <Header />
      <ContainerModal>
        <ModalLogin />
      </ContainerModal>
      <Footer />
    </Container>
  );
};

export default Login;
