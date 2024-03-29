import { useContext } from "react";
import { useForm } from "react-hook-form";
import { RegisterContext } from "../../contexts/Register";
import { IUserRegister } from "../../interfaces";
import Button from "../Button";
import { Input } from "../Input";
import { DivInp, FormRegister, H1, Label, MainRegister } from "./styles";

export const UserRegister = () => {
  const {
    registerUser,
    city,
    handleCepBlur,
    state,
    accountType,
    handleAccountTypeChange,
  } = useContext(RegisterContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegister>();

  return (
    <MainRegister>
      <H1>Cadastro</H1>
      <FormRegister onSubmit={handleSubmit(registerUser)}>
        <Label>Informações pessoais</Label>
        <DivInp>
          <Label htmlFor="name">Nome</Label>
          <Input
            id="name"
            placeholder="Ex: Samuel Leão"
            required
            {...register("name")}
          />
        </DivInp>
        <DivInp>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            required
            placeholder="Ex: samuel@kenzie.com.br"
            {...register("email")}
          />
        </DivInp>
        <DivInp>
          <Label htmlFor="cpf">CPF</Label>
          <Input
            id="cpf"
            type="number"
            required
            placeholder="000.000.000-00"
            {...register("cpf")}
          />
        </DivInp>
        <DivInp>
          <Label htmlFor="telephone">Celular</Label>
          <Input
            id="telephone"
            required
            type="number"
            placeholder="(DDD) 90000-0000"
            {...register("telephone")}
          />
        </DivInp>
        <DivInp>
          <Label htmlFor="date_of_birth">Data de nascimento</Label>
          <Input
            id="date_of_birth"
            required
            type="date"
            placeholder="00/00/00"
            {...register("date_of_birth")}
          />
        </DivInp>
        <DivInp>
          <Label htmlFor="bio">Descrição</Label>
          <Input
            id="bio"
            type="text"
            placeholder="Digitar descrição"
            {...register("bio")}
          />
        </DivInp>
        <h3>Informações de endereço</h3>
        <DivInp>
          <Label htmlFor="cep">CEP</Label>
          <Input
            id="cep"
            type="number"
            placeholder="00000.000"
            {...register("cep")}
            onBlur={handleCepBlur}
          />
        </DivInp>
        <DivInp>
          <Label htmlFor="city">Cidade</Label>
          <Input id="city" type="text" value={city} {...register("city")} />
        </DivInp>
        <DivInp>
          <Label htmlFor="state">Estado</Label>
          <Input id="state" type="text" value={state} {...register("state")} />
        </DivInp>
        <DivInp>
          <Label htmlFor="road">Rua</Label>
          <Input
            id="road"
            type="text"
            placeholder="Digitar Rua"
            {...register("road")}
          />
        </DivInp>
        <DivInp>
          <Label htmlFor="number">Número</Label>
          <Input
            id="number"
            type="number"
            placeholder="Digitar número"
            {...register("number")}
          />
        </DivInp>
        <DivInp>
          <Label htmlFor="complement">Complemento</Label>
          <Input
            id="complement"
            type="text"
            placeholder="Ex: apart 307"
            {...register("complement")}
          />
        </DivInp>
        <div>
          <Label htmlFor="accountType">Tipo de conta</Label>
          <DivInp>
            <Label>
              <input
                type="radio"
                value="anunciante"
                checked={accountType}
                onChange={handleAccountTypeChange}
              />
              Anunciante
            </Label>
            <Label>
              <input
                type="radio"
                value="comprador"
                checked={!accountType}
                onChange={handleAccountTypeChange}
              />
              Comprador
            </Label>
          </DivInp>
        </div>
        <DivInp>
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            required
            type="password"
            placeholder="Digitar senha"
            {...register("password")}
          />
        </DivInp>
        <DivInp>
          <Label htmlFor="confirm_password">Confirmar Senha</Label>
          <Input
            id="confirm_password"
            required
            type="password"
            placeholder="Digitar senha"
            {...register("confirm_password")}
          />
        </DivInp>

        <Button
          type="submit"
          backColor="var(--brand1)"
          textColor="var(--whiteFixed)"
          width="100%"
        >
          Finalizar cadastro
        </Button>
      </FormRegister>
    </MainRegister>
  );
};
