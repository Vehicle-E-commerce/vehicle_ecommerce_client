import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { IUserLogin, IUserLoginContext, Props } from "../../interfaces";
import api from "../../services/server";

export const LoginContext = createContext({} as IUserLoginContext);

export const LoginProvider: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const [modal, setModal] = useState("login");
  const [user, setUser] = useState(null);

  const signIn = async (data: IUserLogin) => {
    console.log(data);
    await api
      .post("/login", data)
      .then((res) => {
        localStorage.setItem("@token", res.data.token);
        toast.success("Bem vindo!", {
          style: {
            borderRadius: "10px",
            background: "var( --Grey-2)",
            color: "var(--Grey-0)",
            fontSize: "14px",
            fontWeight: "700",
          },
        });
        navigate("/homepage", { replace: true });
      })
      .catch((err) => {
        toast.error("Email ou senha inválidos", {
          style: {
            borderRadius: "10px",
            background: "var( --Grey-2)",
            color: "var(--Grey-0)",
            fontSize: "14px",
            fontWeight: "700",
          },
        });
      });
  };
  const dataRender = async () => {
    api.defaults.headers.Authorization = `bearer ${localStorage.getItem('@token')}`
    await api.get("/user/")
      .then((res) => {
        setUser(res.data)
      })
  }
  useEffect(() => {
    dataRender()
  }, [])
  return (
    <LoginContext.Provider
      value={{
        signIn,
        modal,
        setModal,
        user
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
