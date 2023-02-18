import { Container, Navegacao, Cont } from "./styles";
import { IconBaseProps } from 'react-icons'
import { HiBars3, HiOutlineXMark } from "react-icons/hi2"
import Button from "../Button";
import { useContext, useState } from "react";




interface Props extends IconBaseProps {
    menuMobVisible: boolean;
    setMenuMobVisible(value:boolean): void;
    
}

const MenuMobile: React.FC<Props> = ({menuMobVisible, setMenuMobVisible}) => {
    // const {user, auth} = useContext(AuthContext)
    const auth = true

    if (auth) {
        return (
            <Container isVisible={menuMobVisible}>
                <HiBars3 className="opem_menu" size={45} onClick={()=> setMenuMobVisible(true)}/>
                <HiOutlineXMark className="close_menu" size={45}  onClick={()=> setMenuMobVisible(false)}/>
                <Navegacao isVisible={menuMobVisible}>
                    <Cont height={'184px'} borderRadius={'13px'}>
                        <a href="#">Editar Perfil</a>
                        <a href="#">Editar endereço</a>
                        <a href="#">Meus Anúncios</a>
                        <a href="#">Sair</a>
                    </Cont>
                    {/* <Cont height={'236px'}>
                        <a href="#">Carros</a>
                        <a href="#">Motos</a>
                        <a href="#">leilão</a>
                    </Cont> */}
                </Navegacao>
            </Container>
        )
    }

    return (
        <Container isVisible={menuMobVisible}>
            <HiBars3 className="opem_menu" size={45} onClick={()=> setMenuMobVisible(true)}/>
            <HiOutlineXMark className="close_menu" size={45}  onClick={()=> setMenuMobVisible(false)}/>
            <Navegacao isVisible={menuMobVisible}>
                <Cont height={'236px'}>
                    <a href="#">Carros</a>
                    <a href="#">Motos</a>
                    <a href="#">leilão</a>
                </Cont>
                <Cont height={'184px'} borderRadius={'13px'}>
                    <a href="#"> Fazer Login</a>
                    <Button width="20.8rem" height="48px">Cadastrar</Button>
                </Cont>
            </Navegacao>
        </Container>
    )

    
};

export default MenuMobile;