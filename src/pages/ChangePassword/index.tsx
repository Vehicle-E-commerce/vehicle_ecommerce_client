import React, { useContext, useEffect, useState } from "react";
import { Container, ContainerModal, Cont, Title } from "./styles";
import { Input } from "../../components/Input";

import { AnnouncementContext } from "../../contexts/announcementContext";
import Button from "../../components/Button";
import { useParams } from "react-router-dom"
import { useForm } from "react-hook-form";
import api from "../../services/server";

const ChangePassword: React.FC = () => {
  const { navigate } = useContext(AnnouncementContext);
  const { register, handleSubmit, formState: {errors}} = useForm();
  const [validateTime, setValidateTime] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [changePassword, setChangePassword] = useState(false)

  const token = useParams()
  useEffect(()=>{
    async function validateTime(){
      try {
        await api.get(`/forgot-password/${token.token}`)
      } catch (error) {
        setValidateTime("Tempo de recuperação expirado!")
        console.log("fail")
      }
    }
    validateTime()
  },[]);


  const onSubmit = async (data:any)=>{
     if(data.password === data.confirm_password){
        setConfirmPassword("")
        await api.post(`/forgot-password/${token.token}`, data)
          .then(async(res) => {
            setChangePassword(true)
            setTimeout(() => {
               navigate('/login')               
            }, 5000)
          })
          .catch((err) => {
            console.log(err)
          })
        
     }else{
      setConfirmPassword("As senhas não coincidem!")
    }
  }

  return (
    <Container>
      <Title onClick={() => {navigate("/homepage", { replace: true })}}>
        <p>Motors</p>
        <p className="word_shop">shop</p>
      </Title>

      { validateTime ?
        <div className="expiredCont">
          {validateTime}
          <p>
            Por favor, solicite novamente:
            <span
              onClick={() => navigate("/recoveryPassword")}
              >
              Redefinir senha
            </span>
          </p>
        </div>
      :
        <ContainerModal>
          { changePassword ?
            <div className="CONTsuccessChange">
              <h1>Senha alterada com sucesso ! </h1>
              <h2>Estamos te encaminhando para o login...</h2>  
            </div>
          :
            <>
              <h1>Recuperação de senha</h1>
              {confirmPassword && <span className="fail">{confirmPassword}</span>}
              <Cont>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Input
                    id="password"
                    type="password"
                    margin="8px 0px 24px 0px"
                    width="100%"
                    placeholder="Nova senha"
                    {...register("password")}
                    required
                    />
                  <Input
                    id="confirm_password"
                    type="password"
                    margin="8px 0px 24px 0px"
                    width="100%"
                    placeholder="Confirme a senha"
                    {...register("confirm_password")}
                    required
                    />

                  <Button
                    type="submit"
                    width="100%"
                    backColor="var(--brand1)"
                    textColor="var(--whiteFixed)"
                    margin="25px 0px 13px 0px"
                    >
                    Enviar
                  </Button>
                </form>
              </Cont>

              <span>
                Lembrei minha senha !
                <a
                  onClick={() => navigate("login/", { replace: true })}
                  > Login</a>
              </span>
            </>
          }
        </ContainerModal>
      }
    </Container>
  )
};
export default ChangePassword;