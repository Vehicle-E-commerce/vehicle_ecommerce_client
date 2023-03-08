import axios from "axios";
import { createContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { IUserRegister, Props, RegisterContextType } from "../../interfaces";
import api from "../../services/server";

export const RegisterContext = createContext({} as RegisterContextType);

export const RegisterProvider: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [accountType, setAccountType] = useState(false);

  const handleAccountTypeChange = (event: { target: { value: string } }) => {
    const value = event.target.value === "anunciante";
    setAccountType(value);
  };

  const handleCepBlur = (event: { target: { value: string } }) => {
    const cep = event.target.value.replace(/\D/g, "");
    axios
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => {
        setCity(response.data.localidade);
        setState(response.data.uf);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const registerUser = async (dataRec: IUserRegister) => {
    const {
      name,
      email,
      cpf,
      telephone,
      date_of_birth,
      bio,
      is_announcement,
      password,
      confirm_password,
      ...rest
    } = dataRec;

    const data = {
      name,
      email,
      cpf,
      telephone,
      birth_date: date_of_birth,
      bio,
      is_announcement: accountType,
      password,
      confirm_password,
      address: { ...rest },
    };
    console.log(data);

    if (data.password !== data.confirm_password) {
      toast.error("As senhas não são iguais.", {
        style: {
          borderRadius: "10px",
          background: "var( --Grey-2)",
          color: "var(--Grey-0)",
          fontSize: "14px",
          fontWeight: "700",
        },
      });
      return;
    }
    await api
      .post("/user", data)
      .then((res) => {
        toast.success("Conta criada com sucesso!", {
          style: {
            borderRadius: "10px",
            background: "var( --Grey-2)",
            color: "var(--Grey-0)",
            fontSize: "14px",
            fontWeight: "700",
          },
        });
        navigate("/login", { replace: true });
      })
      .catch((err) =>
        toast.error(err.message, {
          style: {
            borderRadius: "10px",
            background: "var( --Grey-2)",
            color: "var(--Grey-0)",
            fontSize: "14px",
            fontWeight: "700",
          },
        })
      );
  };
  return (
    <RegisterContext.Provider
      value={{
        registerUser,
        city,
        setCity,
        state,
        setState,
        handleCepBlur,
        accountType,
        setAccountType,
        handleAccountTypeChange,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};
