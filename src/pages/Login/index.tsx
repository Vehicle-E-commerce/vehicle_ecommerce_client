import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { ThemesContext } from "../../contexts/Themes";
import { ContainerButtons, ContainerLogin, MainLogin } from "./style";

const Login = () => {
  const navigate = useNavigate();

  const {
    emailLogin,
    passwordLogin,

    loginUser,
    setEmailLogin,
    setPasswordLogin,
  } = useContext(ThemesContext);

  return (
    <div>
      <Header />
      <ContainerLogin>
        <MainLogin>
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
              onCharge={(e) => setPasswordLogin(e.target.value)}
              id="password"
              width="100%"
              placeholder="Digitar senha"
            />

            <button className="recoverPassword">Esqueci minha senha</button>
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
            <button
              onClick={() => navigate("/homepage")}
              className="createCont"
            >
              Ainda não possui conta?
            </button>
            <Button onClick={() => navigate("/homepage")} width="100%">
              Cadastrar
            </Button>
          </ContainerButtons>
        </MainLogin>
      </ContainerLogin>
    </div>
  );
};

export default Login;
