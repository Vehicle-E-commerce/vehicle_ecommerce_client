import React, { useContext } from "react";
import { Container, ContainerModal, Cont, Title } from "./styles";
import { Input } from "../../components/Input";

import { AnnouncementContext } from "../../contexts/announcementContext";
import Button from "../../components/Button";
import { useParams } from "react-router-dom"

const ChangePassword: React.FC = () => {
  const { navigate } = useContext(AnnouncementContext);
  const token = useParams()
    console.log(token)

  return (
    <Container>
      <Title
          onClick={() => {
            navigate("/homepage", { replace: true });
          }}
        >
          <p>Motors</p>
          <p className="word_shop">shop</p>
        </Title>
      <ContainerModal>
        <h1>Recuperação de senha</h1>

        <Cont>
          <Input
            id="password"
            margin="8px 0px 24px 0px"
            width="100%"
            placeholder="Nova senha"
          />
          <Input
            id="confirm_password"
            type="password"
            margin="8px 0px 24px 0px"
            width="100%"
            placeholder="Confirme a senha"
          />

          <Button
            //   onClick={() => }
            width="100%"
            backColor="var(--brand1)"
            textColor="var(--whiteFixed)"
            margin="25px 0px 13px 0px"
          >
            Enviar
          </Button>
        </Cont>

        <span>
          Lembrei minha senha !
          <a
            onClick={() => navigate("login/", { replace: true })}
          > Login</a>
        </span>
      </ContainerModal>
    </Container>  
  )
};
export default ChangePassword;