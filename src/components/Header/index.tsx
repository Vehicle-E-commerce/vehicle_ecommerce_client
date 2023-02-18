import React, {useContext, useState} from "react";
import Switch from  'react-switch';
import { shade } from 'polished'
import MenuMobile from "../MenuMobile";

import { Cont, Container, Navegacao, Title, VerticalSwitchContainer} from "./styled";
import { ThemeContext } from "styled-components";
import { ThemesContext } from "../../contexts/Themes";
import { useMediaQuery } from 'react-responsive';
import Button from "../Button";


const Header: React.FC = () => {
    const {toggleTheme} = useContext(ThemesContext)
    const { colors, title } = useContext(ThemeContext)
    const [menuMobVisible, setMenuMobVisible] = useState(false)
    const isMobile = useMediaQuery({maxWidth: 767});

    // const {user, auth} = useContext(AuthContext)
    const auth = true
    // Gere um número aleatório para escolher a cor de fundo do círculo
    const colors_bg_icon_perfil = ['#FF7F50', '#00BFFF', '#8A2BE2', '#20B2AA', '#FFA500', '#FF69B4', '#9370DB'];
    const number_color = Math.floor(Math.random() * colors_bg_icon_perfil.length);


    return (
        <Container className="BB">
            <Cont>
            <VerticalSwitchContainer>
                <Switch 
                    onChange={toggleTheme}
                    checked={title == 'dark'}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={8}
                    width={30}
                    handleDiameter={10}
                    offHandleColor={shade(0.13, '#fff')}
                    offColor={shade(0.17, colors.primary)}
                    onColor='#fff'  />
            </VerticalSwitchContainer>
            <Title> Motors shop </Title>
            </Cont>
            { isMobile ? (
                <MenuMobile className="menuMob"
                    menuMobVisible={menuMobVisible}
                    setMenuMobVisible={setMenuMobVisible}
                />
            ) : (
                <Cont width={'40rem'}>
                    <Navegacao>
                            <ul>
                            <li><a href="#">Carros</a></li>
                            <li><a href="#">Motos</a></li>
                            <li><a href="#">leilão</a></li>
                            <div className="vertical_line" ></div>
                            
                            {auth ? (
                                <>
                                    <li>
                                    <div 
                                        className="initial_perfil" 
                                        style={{ backgroundColor: colors_bg_icon_perfil[number_color] }}>
                                        <p>U</p>
                                        <p>L</p>
                                    </div>
                                    Usuario Logado
                                    </li>
                                </>

                            ) : (
                                <>
                                    <li> <a href="#"> Fazer Login</a> </li>
                                    <li><Button 
                                            width="133px" 
                                            height="48px"
                                        >Cadastrar</Button></li>
                                </>
                            )}

                            </ul>
                    </Navegacao>
                </Cont>
            )}
        </Container>
    )
};

export default Header;