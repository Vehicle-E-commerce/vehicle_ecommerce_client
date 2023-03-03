import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { ThemesContext } from "../../contexts/Themes";
import { ContainerButtons, Container } from "./styles";
const ModalLogin: React.FC = () => {
  const { modal, setModal } = useContext(ThemesContext);
  const navigate = useNavigate();

  const {
    emailLogin,
    passwordLogin,

    loginUser,
    setEmailLogin,
    setPasswordLogin,
  } = useContext(ThemesContext);

  return (
    <Container>
      <h1>Login</h1>

      <div className="containerDataUser">
        <label htmlFor="user">Usuário</label>
        <Input
          id="user"
          margin="8px 0px 24px 0px"
          width="100%"
          placeholder="Digitar usuário"
          onCharge={(e) => setEmailLogin(e.target.value)}
          value={emailLogin}
        />

        <label htmlFor="password">Senha</label>
        <Input
          value={passwordLogin}
          onCharge={(e) => setPasswordLogin(e.target.value)}
          id="password"
          width="100%"
          placeholder="Digitar senha"
        />

        <button
          onClick={() => setModal("resetPassword")}
          className="recoverPassword"
        >
          Esqueci minha senha
        </button>
      </div>
      <ContainerButtons>
        <Button
          onClick={() => loginUser()}
          width="100%"
          backColor="var(--brand1)"
          textColor="var(--whiteFixed)"
        >
          Entrar
        </Button>
        <button onClick={() => navigate("/homepage")} className="createCont">
          Ainda não possui conta?
        </button>
        <Button onClick={() => navigate("/homepage")} width="100%">
          Cadastrar
        </Button>
      </ContainerButtons>
    </Container>
  );
};
export default ModalLogin;
