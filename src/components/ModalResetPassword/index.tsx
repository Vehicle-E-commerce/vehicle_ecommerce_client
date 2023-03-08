import React, { useContext, useState } from "react";
import Button from "../Button";
import { Input } from "../Input";
import { Cont, Container } from "./styles";

import {useForm} from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../contexts/Login";
import api from "../../services/server";
interface Props {
  setModal: React.Dispatch<React.SetStateAction<string>>;
}

const ModalResetPassword: React.FC = () => {
  const { register, handleSubmit, formState: {errors}} = useForm();
  const [successMessage, setSuccessMessage] = useState("")
  const [failMessage, setFailMessage] = useState("")

  const navigate = useNavigate();

  const onSubmit = async (data: object)=>{
    await api.post("/forgot-password", data)
      .then(async(res) => {
        setFailMessage("")
        setSuccessMessage("Recuperação de senha enviado. Por favor, verifique seu E-mail!")
      })
      .catch((err) => {
        setSuccessMessage("")
        setFailMessage("E-mail não cadastrado !")
        console.log(err)
      })

  }

  return (
    <Container>
      <h1>Recuperação de senha</h1>
      <span>Informe seu E-mail cadastrado para enviarmos a recuperação de senha</span>
      {successMessage && <span className="success">{successMessage}</span>}
      {failMessage && <span className="fail">{failMessage}</span>}
      <Cont>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="user">E-mail</label>
          <Input
            id="email"
            margin="8px 0px 24px 0px"
            width="100%"
            placeholder="email@email.com"
            {...register("email")}
          />

          <Button
            type="submit"
            width="100%"
            backColor="var(--brand1)"
            textColor="var(--whiteFixed)"
            margin="25px 0px 0px 0px"
          >
            Enviar
          </Button>
        </form>
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
