import React from "react";
import { Container  } from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Home: React.FC = () => {
    return(
        <Container>
            <Header />
        
            <Footer />
        </Container>
    );
};

export default Home;