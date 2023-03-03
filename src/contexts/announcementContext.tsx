import {
  createContext,
  ReactNode,
  ReactPortal,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import api from "../services/server";

interface IAnnouncementProviders {
  children: ReactNode | ReactPortal;
}
interface IAnnouncementContext {
  announcementList: never[] | IAnnouncement[];
  carList: never[] | IAnnouncement[];
  motorbikeList: never[] | IAnnouncement[];
  vehicleSpecific: null | IAnnouncement;
  imageToModal: string;
  imageModal: boolean;

  navigate: NavigateFunction;
  setAnnouncementList: React.Dispatch<React.SetStateAction<never[]>>;
  setCarList: React.Dispatch<React.SetStateAction<never[]>>;
  setMotorbikeList: React.Dispatch<React.SetStateAction<never[]>>;
  setVehicleSpecific: React.Dispatch<React.SetStateAction<null>>;
  setImageToModal: React.Dispatch<SetStateAction<string>>;
  setImageModal: React.Dispatch<SetStateAction<boolean>>;
}
interface IAnnouncement {
  id: string;
  title: string;
  year: number;
  mileage: number;
  price: number;
  bio: string;
  is_motorbike: boolean;
  cover_image: string;
  created_at: Date;
  updated_at: Date;
  images: IImages[];
  user: IUser;
}
interface IImages {
  id: string;
  image: string;
  created_at: Date;
  updated_at: Date;
}
interface IUser {
  id: string;
  name: string;
  email: string;
  cpf: string;
  telephone: string;
  birth_date: string;
  bio: string;
  is_advertiser: boolean;
  created_at: Date;
  updated_at: Date;
  address: IAddress;
}
interface IAddress {
  id: string;
  cep: string;
  state: string;
  city: string;
  road: string;
  number: string;
  complement: string;
  created_at: Date;
  updated_at: Date;
}

export interface ICardData {
  cover_image: string;
  title: string;
  year: number;
  mileage: number;
  price: number;
  bio: string;
  user_name: string;
  data: SetStateAction<null>;
}

export const AnnouncementContext = createContext<IAnnouncementContext>(
  {} as IAnnouncementContext
);

function AnnouncementProvider({ children }: IAnnouncementProviders) {
  const navigate = useNavigate();

  const [announcementList, setAnnouncementList] = useState([]);
  const [carList, setCarList] = useState([]);
  const [motorbikeList, setMotorbikeList] = useState([]);
  const [vehicleSpecific, setVehicleSpecific] = useState(null);
  const [imageToModal, setImageToModal] = useState("");
  const [imageModal, setImageModal] = useState(false);

  document.onkeydown = function (e) {
    if (e.key === "Escape") {
      setImageModal(false);
    }
  };

  const announcementData = async (): Promise<void> => {
    await api
      .get("announcements/")
      .then((res) => {
        setAnnouncementList(res.data);
        setCarList(
          res.data.filter((data: IAnnouncement) => !data.is_motorbike)
        );
        setMotorbikeList(
          res.data.filter((data: IAnnouncement) => data.is_motorbike)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    announcementData();
  }, []);

  return (
    <AnnouncementContext.Provider
      value={{
        announcementList,
        carList,
        motorbikeList,
        vehicleSpecific,
        imageToModal,
        imageModal,

        navigate,
        setAnnouncementList,
        setCarList,
        setMotorbikeList,
        setVehicleSpecific,
        setImageToModal,
        setImageModal,
      }}
    >
      {children}
    </AnnouncementContext.Provider>
  );
}

export default AnnouncementProvider;
