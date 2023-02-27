import { createContext, ReactNode, useEffect, useState } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import usePersistedState from "../../utils/usePersistedState";
import light from "../../styles/themes/light";
import dark from "../../styles/themes/dark";

interface IImage {
  image: string;
}
interface ThemesContextType {
  theme: DefaultTheme;
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
  setTypeAnnoun: () => {},
  setTypeVehicle: () => {},
  newImage: () => {},
});

interface Props {
  children: ReactNode;
}
export const ThemesProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);
  const [typeAnnoun, setTypeAnnoun] = useState({
    yes: "isActive",
    no: "desActive",
  });

  const [typeVehicle, setTypeVehicle] = useState({
    yes: "isActive",
    no: "desActive",
  });

  const toggleTheme = () => {
    setTheme(theme.title == "light" ? dark : light);
  };

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
          typeAnnoun,
          typeVehicle,
          imgsGalery,

          toggleTheme,
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
