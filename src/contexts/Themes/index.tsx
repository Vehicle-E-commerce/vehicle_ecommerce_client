import { createContext, ReactNode, useState } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import usePersistedState from "../../utils/usePersistedState";
import light from "../../styles/themes/light";
import dark from "../../styles/themes/dark";

interface IUserLogin {
  email: string;
  password: string;
}

interface ThemesContextType {
  theme: DefaultTheme;
  emailLogin: string;
  passwordLogin: string;

  toggleTheme: () => void;
  loginUser: () => void;
  setEmailLogin: React.Dispatch<React.SetStateAction<string>>;
  setPasswordLogin: React.Dispatch<React.SetStateAction<string>>;
  modal: string;
  setModal: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemesContext = createContext<ThemesContextType>({
 
} as ThemesContextType);

interface Props {
  children: ReactNode;
}
export const ThemesProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);
  const [ modal, setModal ] = useState("login")
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

  return (
    <ThemeProvider theme={theme}>
      <ThemesContext.Provider
        value={{
          theme,
          emailLogin,
          passwordLogin,
          modal,

          toggleTheme,
          loginUser,
          setEmailLogin,
          setPasswordLogin,
          setModal,
        }}
      >
        {children}
      </ThemesContext.Provider>
    </ThemeProvider>
  );
};
