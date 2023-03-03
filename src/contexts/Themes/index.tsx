import { createContext, ReactNode, useState } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import usePersistedState from "../../utils/usePersistedState";
import light from "../../styles/themes/light";
import dark from "../../styles/themes/dark";

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

  toggleTheme: () => void;
  loginUser: () => void;
  setEmailLogin: React.Dispatch<React.SetStateAction<string>>;
  setPasswordLogin: React.Dispatch<React.SetStateAction<string>>;
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
}

export const ThemesContext = createContext<ThemesContextType>({
  theme: light,
  emailLogin: "",
  passwordLogin: "",
  typeAnnoun: {
    yes: "",
    no: "",
  },
  typeVehicle: {
    yes: "",
    no: "",
  },

  imgsGalery: [],

  toggleTheme: () => {},
  loginUser: () => {},
  setEmailLogin: () => {},
  setPasswordLogin: () => {},
  setTypeAnnoun: () => {},
  setTypeVehicle: () => {},
  newImage: () => {},
});

interface Props {
  children: ReactNode;
}
export const ThemesProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title == "light" ? dark : light);
  };

  const [emailLogin, setEmailLogin] = useState(""); // Email para login
  const [passwordLogin, setPasswordLogin] = useState(""); // Password para login

  // Dados em formato de objeto para logar usuário
  const [userDataLogin, setUserDataLogin] = useState<IUserLogin>(
    {} as IUserLogin
  );

  // Pega os dados do usuario Email e Senha para login
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

  return (
    <ThemeProvider theme={theme}>
      <ThemesContext.Provider
        value={{
          theme,
          emailLogin,
          passwordLogin,
          typeAnnoun,
          typeVehicle,
          imgsGalery,

          toggleTheme,
          loginUser,
          setEmailLogin,
          setPasswordLogin,
          setTypeAnnoun,
          setTypeVehicle,
          newImage,
        }}
      >
        {children}
      </ThemesContext.Provider>
    </ThemeProvider>
  );
};
