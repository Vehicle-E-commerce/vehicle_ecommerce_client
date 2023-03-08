import React, { useContext } from "react";
import { ContFixed, Container, Title } from "./styles";
import { SiExpo } from "react-icons/si";
import styled from "styled-components";
import { shade } from "polished";
import { ThemesContext } from "../../contexts/Themes";
import { ThemeContext } from "styled-components";


const Footer: React.FC = () => {
  const { colors, title } = useContext(ThemeContext);

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
            
            <div>

            <ContFixed 
              onClick={()=> window.scrollTo(0, 0)}
              >

                <SiExpo/>
            </ContFixed>
            </div>
        </footer>
    </Container>
  );
};

export default Footer;
