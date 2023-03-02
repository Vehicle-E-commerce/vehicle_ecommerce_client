import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { ContainerButtons, ContainerLogin, MainLogin } from "./style";

const Login = () => {
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
            />

            <label htmlFor="password">Senha</label>
            <Input id="password" width="100%" placeholder="Digitar senha" />

            <button className="recoverPassword">Esqueci minha senha</button>
          </div>
          <ContainerButtons>
            <Button
              width="100%"
              backColor="var(--brand1)"
              textColor="var(--whiteFixed)"
            >
              Entrar
            </Button>
            <button className="createCont">Ainda não possui conta?</button>
            <Button width="100%">Cadastrar</Button>
          </ContainerButtons>
        </MainLogin>
      </ContainerLogin>
    </div>
  );
};

export default Login;
