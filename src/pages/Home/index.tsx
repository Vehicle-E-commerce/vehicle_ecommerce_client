import React from "react";
import { Container  } from "./styles";
import Header from "../../components/Header";

interface Props {
    toggleTheme(): void;
}

const Home: React.FC<Props> = ({toggleTheme}) => {
    return(
        <Container>
            <Header toggleTheme={toggleTheme} />
        </Container>
    );
};

export default Home;