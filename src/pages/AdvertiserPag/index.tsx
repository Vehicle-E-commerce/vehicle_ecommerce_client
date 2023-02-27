import React from "react";
import Advertiser from "../../components/Advertiser";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
        <Header />
        <Advertiser />
        <Footer />
    </Container>
  );
};

export default Home;
