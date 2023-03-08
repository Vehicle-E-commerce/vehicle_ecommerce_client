import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { LoginContext } from "../../contexts/Login";
import { IUserLogin } from "../../interfaces";
import { Container, ContainerButtons, StyledInputLogin, TagP } from "./styles";
const ModalLogin: React.FC = () => {
  const { signIn } = useContext(LoginContext);
  const navigate = useNavigate();
  const [teste, setTeste] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>();

  return (
    <Container onSubmit={handleSubmit(signIn)}>
      <h1>Login</h1>

      <div className="containerDataEmail">
        <label htmlFor="email">Email</label>
        <StyledInputLogin
          id="email"
          placeholder="Digitar email"
          {...register("email")}
        />

        <label htmlFor="password">Senha</label>
        <StyledInputLogin
          id="password"
          // width="100%"
          placeholder="Digitar senha"
          type="password"
          {...register("password")}
        />

        <button
          onClick={() => navigate("/recoveryPassword")}
          className="recoverPassword"
        >
          Esqueci minha senha
        </button>
      </div>
      <ContainerButtons>
        <Button
          width="100%"
          backColor="var(--brand1)"
          textColor="var(--whiteFixed)"
          type="submit"
        >
          Entrar
        </Button>
        <TagP>Ainda não possui conta?</TagP>
        <Button onClick={() => navigate("/register")} width="100%">
          Cadastrar
        </Button>
      </ContainerButtons>
    </Container>
  );
};
export default ModalLogin;
