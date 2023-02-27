import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";
import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
};

export default Home;
