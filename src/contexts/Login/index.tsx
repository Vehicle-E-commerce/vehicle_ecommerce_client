import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { IUserLogin, IUserLoginContext, IUserUpdate, Props } from "../../interfaces";
import { AnnouncementContext } from "../announcementContext";
import api from "../../services/server";
import { FieldValues, SubmitHandler } from "react-hook-form";

export const LoginContext = createContext({} as IUserLoginContext);

export const LoginProvider: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const [modal, setModal] = useState("login");
  const [user, setUser] = useState(null);

  const {setUserEditModal, userEditModal} = useContext(AnnouncementContext);

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
        location.reload()
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
  const onSubmitUpdateUser: SubmitHandler<FieldValues> = async (data) => {
    api.defaults.headers.Authorization = `bearer ${localStorage.getItem("@token")}`
    api.patch("/user/", data)
      .then((res) => {
        setUserEditModal(false)
        toast.success("Dados atualizados", {
          style: {
            borderRadius: "10px",
            background: "var( --Grey-2)",
            color: "var(--Grey-0)",
            fontSize: "14px",
            fontWeight: "700",
          },
        });
      })
      .catch((err) => {
        console.log(err)
      })
  }

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

  const logout = () => {
    localStorage.clear()
    navigate("", {replace: true})
    location.reload()
  }

  return (
    <LoginContext.Provider
      value={{
        signIn,
        modal,
        setModal,
        user,
        logout,
        onSubmitUpdateUser
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
