import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { DefaultTheme, ThemeProvider } from "styled-components";
import api from "../../services/server";
import dark from "../../styles/themes/dark";
import light from "../../styles/themes/light";
import usePersistedState from "../../utils/usePersistedState";
import { AnnouncementContext } from "../announcementContext";

interface IImage {
  image: string;
}
interface ThemesContextType {
  theme: DefaultTheme;
  toggleTheme: () => void;
  typeAnnoun: {
    yes: string;
    no: string;
  };
  typeVehicle: {
    yes: string;
    no: string;
  };
  imgsGalery: IImage[];

  infoVeicle: string;
  yearVeicle: string;
  kmVeicle: string;
  priceVeicle: string;
  desVeicle: string;
  coverVeicle: string;

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
  editImg: (i: number, e: React.ChangeEvent<HTMLInputElement>) => void;
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

  const { openAndClosedModalCreateAnnou } = useContext(AnnouncementContext);

  const toggleTheme = () => {
    setTheme(theme.title == "light" ? dark : light);
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

  const editImg = (i: number, e: React.ChangeEvent<HTMLInputElement>) => {
    let imagens = imgsGalery;
    imagens[i].image = e.target.value;
    setImgGalery([...imagens]);
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
    openAndClosedModalCreateAnnou();
  };

  return (
    <ThemeProvider theme={theme}>
      <ThemesContext.Provider
        value={{
          theme,
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
          editImg,
        }}
      >
        {children}
      </ThemesContext.Provider>
    </ThemeProvider>
  );
};
