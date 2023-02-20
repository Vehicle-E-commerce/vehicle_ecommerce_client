import React from "react";
import { Cont, Container, Title } from "./styles";
import { SiExpo } from "react-icons/si";


const Footer: React.FC = () => {
  return (
    <Container>
        <footer>
            <Title> 
                <p>Motors</p>
                <p className="word_shop">shop</p>
            </Title>
            <p>
              &copy; {new Date().getFullYear()} - Todos os direitos reservados
            </p>

            <Cont>
                <SiExpo/>
            </Cont>
        </footer>
    </Container>
  );
};

export default Footer;