import { createContext, ReactNode, useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import dark from "../../styles/themes/dark";
import light from "../../styles/themes/light";
import usePersistedState from "../../utils/usePersistedState";
import api from "../../services/server";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
interface IImage {
  image: string;
}
interface IUserLogin {
  email: string;
  password: string;
}
interface ThemesContextType {
  theme: DefaultTheme;
  emailLogin: string;
  passwordLogin: string;
  typeAnnoun: {
    yes: string;
    no: string;
  };
  typeVehicle: {
    yes: string;
    no: string;
  };
  imgsGalery: IImage[];
  modal: string;
  infoVeicle: string;
  yearVeicle: string;
  kmVeicle: string;
  priceVeicle: string;
  desVeicle: string;
  coverVeicle: string;

  toggleTheme: () => void;
  loginUser: () => void;
  setEmailLogin: React.Dispatch<React.SetStateAction<string>>;
  setPasswordLogin: React.Dispatch<React.SetStateAction<string>>;
  setModal: React.Dispatch<React.SetStateAction<string>>;
  setTypeAnnoun: React.Dispatch<
    React.SetStateAction<{
      yes: string;
      no: string;
    }>
  >;
  setTypeVehicle: React.Dispatch<
    React.SetStateAction<{
      yes: string;
      no: string;
    }>
  >;
  newImage: () => void;
  announcementCreate: () => Promise<void>;
  setInfoVeicle: React.Dispatch<React.SetStateAction<string>>;
  setYearVeicle: React.Dispatch<React.SetStateAction<string>>;
  setKmVeicle: React.Dispatch<React.SetStateAction<string>>;
  setPriceVeicle: React.Dispatch<React.SetStateAction<string>>;
  setDesVeicle: React.Dispatch<React.SetStateAction<string>>;
  setCoverVeicle: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemesContext = createContext<ThemesContextType>(
  {} as ThemesContextType
);

interface Props {
  children: ReactNode;
}
export const ThemesProvider: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate();

  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const [modal, setModal] = useState("login");

  const toggleTheme = () => {
    setTheme(theme.title == "light" ? dark : light);
  };
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [userDataLogin, setUserDataLogin] = useState<IUserLogin>(
    {} as IUserLogin
  );
  const loginUser = () => {
    let user = userDataLogin;
    user.email = emailLogin;
    user.password = passwordLogin;
    setUserDataLogin(user);
  };

  const [typeAnnoun, setTypeAnnoun] = useState({
    yes: "isActive",
    no: "desActive",
  });

  const [typeVehicle, setTypeVehicle] = useState({
    yes: "isActive",
    no: "desActive",
  });

  const [imgsGalery, setImgGalery] = useState<IImage[]>([]);

  const newImage = () => {
    let imagens = imgsGalery;
    if (imagens.length < 6) {
      imagens.push({ image: "" });
      setImgGalery([...imagens]);
    }
  };

  const [infoVeicle, setInfoVeicle] = useState("");
  const [yearVeicle, setYearVeicle] = useState("");
  const [kmVeicle, setKmVeicle] = useState("");
  const [priceVeicle, setPriceVeicle] = useState("");
  const [desVeicle, setDesVeicle] = useState("");
  const [coverVeicle, setCoverVeicle] = useState("");

  let dataAnnunCreate = {
    title: "",
    year: yearVeicle,
    mileage: kmVeicle,
    price: priceVeicle,
    bio: desVeicle,
    is_motorbike: "",
    cover_image: coverVeicle,
    images: imgsGalery,
  };

  const announcementCreate = async () => {
    if (typeAnnoun.yes == "isActive") {
      dataAnnunCreate.title = "Venda";
    } else {
      dataAnnunCreate.title = "Leilão";
    }

    if (typeVehicle.yes == "isActive") {
      dataAnnunCreate.is_motorbike = "Carro";
    } else {
      dataAnnunCreate.is_motorbike = "Moto";
    }

    await api
      .post("/announcements", dataAnnunCreate)
      .then((res) => {
        toast.success("Anúncio criado com sucesso!", {
          style: {
            borderRadius: "10px",
            background: "var( --Grey-2)",
            color: "var(--Grey-0)",
            fontSize: "14px",
            fontWeight: "700",
          },
        });
        navigate("/", { replace: true });
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
    <ThemeProvider theme={theme}>
      <ThemesContext.Provider
        value={{
          theme,
          emailLogin,
          passwordLogin,
          modal,
          typeAnnoun,
          typeVehicle,
          imgsGalery,
          desVeicle,
          infoVeicle,
          kmVeicle,
          priceVeicle,
          yearVeicle,
          coverVeicle,

          toggleTheme,
          loginUser,
          setEmailLogin,
          setPasswordLogin,
          setModal,
          setTypeAnnoun,
          setTypeVehicle,
          newImage,
          announcementCreate,
          setDesVeicle,
          setInfoVeicle,
          setKmVeicle,
          setPriceVeicle,
          setYearVeicle,
          setCoverVeicle,
        }}
      >
        {children}
      </ThemesContext.Provider>
    </ThemeProvider>
  );
};
