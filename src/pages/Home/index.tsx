import React from "react";
import { Container  } from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AuctionCard from "../../components/AuctionCard";
import Announcement from "../../components/Adverts/Created";

const Home: React.FC = () => {
    return(
        <Container>
            <Announcement />
        </Container>
    );
};

export default Home;