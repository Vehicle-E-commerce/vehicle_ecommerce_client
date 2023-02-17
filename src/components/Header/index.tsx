import React, {useContext, useState} from "react";
import { Container, Title, VerticalSwitchContainer} from "./styled";
import Switch from  'react-switch';
import { ThemeContext } from "styled-components";
import { shade } from 'polished'
import MenuMobile from "../MenuMobile";

interface Props {
    toggleTheme(): void;

}



const Header: React.FC<Props> = ({toggleTheme}) => {
    const { colors, title } = useContext(ThemeContext)
    const [menuMobVisible, setMenuMobVisible] = useState(false)

    return (
        <Container className="BB">
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
                    onColor='#fff'
                />
            </VerticalSwitchContainer>
            <Title> Motors shop</Title>
            <MenuMobile
                menuMobVisible={menuMobVisible}
                setMenuMobVisible={setMenuMobVisible}
            />
            
        </Container>
    )
};

export default Header;