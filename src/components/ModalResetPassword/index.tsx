import React, { useContext } from "react";
import Button from "../Button";
import { Input } from "../Input";
import { Cont, Container } from "./styles";

import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../contexts/Login";
interface Props {
  setModal: React.Dispatch<React.SetStateAction<string>>;
}

const ModalResetPassword: React.FC = () => {
  const { modal, setModal } = useContext(LoginContext);

  const navigate = useNavigate();

  return (
    <Container>
      <h1>Recuperação de senha</h1>
      <span>Informe seu E-mail para enviarmos a recuperação de senha</span>
      <Cont>
        <label htmlFor="user">Email</label>
        <Input
          id="email"
          margin="8px 0px 24px 0px"
          width="100%"
          placeholder="email@email.com"
          //   onCharge={(e) => setEmailLogin(e.target.value)}
          //   value={emailLogin}
        />

        <Button
          //   onClick={() => }
          width="100%"
          backColor="var(--brand1)"
          textColor="var(--whiteFixed)"
          margin="25px 0px 0px 0px"
        >
          Enviar
        </Button>
      </Cont>

      <span>
        Voltar ao
        <a onClick={() => navigate("/login")}> Login</a>
      </span>
      <span>
        Não tem uma conta?
        <a onClick={() => navigate("/register")}> Cadastre-se</a>
      </span>
    </Container>
  );
};
export default ModalResetPassword;
