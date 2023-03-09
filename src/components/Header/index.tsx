import { shade } from "polished";
import React, { useContext, useState } from "react";
import Switch from "react-switch";

import { useMediaQuery } from "react-responsive";
import { ThemeContext } from "styled-components";
import { ThemesContext } from "../../contexts/Themes";

import {
  Cont,
  Container,
  Navegacao,
  Title,
  VerticalSwitchContainer,
} from "./styled";

import { AnnouncementContext } from "../../contexts/announcementContext";
import Button from "../Button";
import MenuMobile from "../MenuMobile";
import { LoginContext } from "../../contexts/Login";

const Header: React.FC = () => {
  const { toggleTheme } = useContext(ThemesContext);
  const { colors, title } = useContext(ThemeContext);
  const [menuMobVisible, setMenuMobVisible] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const { navigate, userEditAddress, userEditModal, setUserEditAddress, setUserEditModal } = useContext(AnnouncementContext);
  const { user, logout } = useContext(LoginContext);

  // const {user, auth} = useContext(AuthContext)
  // test de render
  // Gere um número aleatório para escolher a cor de fundo do círculo
  const colors_bg_icon_perfil = [
    "#FF7F50",
    "#00BFFF",
    "#8A2BE2",
    "#20B2AA",
    "#FFA500",
    "#FF69B4",
    "#9370DB",
  ];
  const number_color = Math.floor(Math.random() * colors_bg_icon_perfil.length);

  return (
    <Container className="BB">
      <Cont>
        <VerticalSwitchContainer>
          <Switch
            onChange={toggleTheme}
            checked={title == "dark"}
            checkedIcon={false}
            uncheckedIcon={false}
            height={8}
            width={30}
            handleDiameter={10}
            offHandleColor={shade(0.13, "#fff")}
            offColor={shade(0.17, colors.primary)}
            onColor="#fff"
          />
        </VerticalSwitchContainer>
        <Title
          onClick={() => {
            navigate("/homepage", { replace: true });
          }}
        >
          <p>Motors</p>
          <p className="word_shop">shop</p>
        </Title>
      </Cont>
      {isMobile ? (
        <MenuMobile
          className="menuMob"
          menuMobVisible={menuMobVisible}
          setMenuMobVisible={setMenuMobVisible}
        />
      ) : (
        <Cont width={"40rem"}>
          <Navegacao>
            <ul>
              <li onClick={() => navigate("homepage")}>
                <a href="#car-list">Carros</a>
              </li>
              <li onClick={() => navigate("homepage")}>
                <a href="#motorbike-list">Motos</a>
              </li>
              <li onClick={() => navigate("homepage")}>
                <a href="#auction-list">leilão</a>
              </li>
              <div className="vertical_line"></div>

              {user ? (
                <>
                  <li onClick={() => setMenuMobVisible(!menuMobVisible)}>
                    <Cont
                      className="initial_perfil"
                      style={{
                        backgroundColor: colors_bg_icon_perfil[number_color],
                      }}
                    >
                      <p>{user.name.substring(0,1).toLocaleUpperCase()}</p>
                    </Cont>
                    <h2>
                      {user.name}
                    </h2>
                  </li>
                  <Cont isVisible={menuMobVisible}>
                    <nav className="perfil_menu">
                      <ul>
                        <li>
                          <a onClick={() => {
                            setUserEditModal(!userEditModal)
                          }}>Editar Perfil</a>
                        </li>
                        <li>
                          <a onClick={() => {
                            setUserEditAddress(!userEditAddress)
                          }}>Editar Endereço</a>
                        </li>
                        {user?.is_advertiser ? (
                          <li>
                            <a onClick={() => {
                              navigate("/advertiserUser", { replace: true });
                            }}>Meus anuncios</a>
                          </li>
                        ) : (
                          <li>
                            <a>Minhas Compras</a>
                          </li>
                        )}
                        <li>
                          <a onClick={() => {
                            logout()
                          }}>Sair</a>
                        </li>
                      </ul>
                    </nav>
                  </Cont>
                </>
              ) : (
                <>
                  <li>
                    {" "}
                    <a href="#" onClick={() => {
                      navigate("login", {replace: true})
                    }}> Fazer Login</a>{" "}
                  </li>
                  <li>
                    <Button width="133px" height="48px" onClick={() => {
                      navigate("/register", {replace: true})
                    }}>
                      Cadastrar
                    </Button>
                  </li>
                </>
              )}
            </ul>
          </Navegacao>
        </Cont>
      )}
    </Container>
  );
};

export default Header;
