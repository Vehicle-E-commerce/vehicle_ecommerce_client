import React from "react";
import { Cont, Container, Title } from "./styles";
import { SiExpo } from "react-icons/si";
import styled from "styled-components";


const Footer: React.FC = () => {
  return (
    <Container>
        <footer>
            <Title> 
                <p>Motors</p>
                <p className="word_shop">shop</p>
            </Title>
            <p>
              &copy; {new Date().getFullYear()} - Todos os direitos reservados.
            </p>

            <Cont onClick={()=> window.scrollTo(0, 0)} >

                <SiExpo/>
            </Cont>
        </footer>
    </Container>
  );
};

export default Footer;
