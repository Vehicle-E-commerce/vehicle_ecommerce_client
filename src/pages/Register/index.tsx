import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { UserRegister } from "../../components/Register ";
import { Container } from "./styles";

const RegisterPage: React.FC = () => {
  return (
    <Container>
      <Header />
      <UserRegister />
      <Footer />
    </Container>
  );
};

export default RegisterPage;
