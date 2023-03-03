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
  navigate: NavigateFunction
  commentsByAnnouncement: (id_announcement: string) => Promise<void>
  catchExample: (event: any) => void

  announcementList: never[] | IAnnouncement[]
  setAnnouncementList: React.Dispatch<React.SetStateAction<never[]>>
  carList: never[] | IAnnouncement[]
  setCarList: React.Dispatch<React.SetStateAction<never[]>>
  motorbikeList: never[] | IAnnouncement[]
  setMotorbikeList: React.Dispatch<React.SetStateAction<never[] >> 
  vehicleSpecific: null | IAnnouncement
  setVehicleSpecific: React.Dispatch<React.SetStateAction<null>>
  imageToModal: string
  setImageToModal: React.Dispatch<SetStateAction<string>>
  imageModal: boolean
  setImageModal: React.Dispatch<SetStateAction<boolean>>
  commentsAd: never[] | IComment[]
  setCommentsAd: React.Dispatch<SetStateAction<never[]>>
  exampleComment: string
  setExampleComment: React.Dispatch<SetStateAction<string>>
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
interface IComment {
  id: string,
  announcement: IAnnouncement
  comment: string,
  created_at: Date,
  updated_at: Date
  user: IUser
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
export interface ICommentData {
  userName: string,
  date: Date,
  comment: string
}

export const AnnouncementContext = createContext<IAnnouncementContext>(
  {} as IAnnouncementContext
);


export const AnnouncementContext = createContext<IAnnouncementContext>({} as IAnnouncementContext);

function AnnouncementProvider({children}: IAnnouncementProviders) {
  
  
  
  const navigate = useNavigate();
  
  const [announcementList, setAnnouncementList] = useState([])
  const [carList, setCarList] = useState([])
  const [motorbikeList, setMotorbikeList] = useState([])
  const [commentsAd, setCommentsAd] = useState([])
  const [vehicleSpecific, setVehicleSpecific] = useState(null)
  const [imageToModal, setImageToModal] = useState('')
  const [imageModal, setImageModal] = useState(false)
  const [exampleComment, setExampleComment] = useState('');
  
  document.onkeydown = function(e) {
    if(e.key === 'Escape') {
      setImageModal(false)
    }
  };
  
  const catchExample = (event:any) => {
    const example = event.target.getAttribute("data-valor");
    if(example){
      setExampleComment(example)
    }
  }
  
  const commentsByAnnouncement = async(id_announcement: string):Promise<void> => {

    await api.get(`announcement/${id_announcement}/comments/`)
      .then((res) => {
        setCommentsAd(res.data)
      })
      .catch((err) => console.log(err))
  }

  const announcementData = async ():Promise<void> => {
    await api.get("announcements/") 
      .then((res) => {
        setAnnouncementList(res.data);
        setCarList(
          res.data.filter((data: IAnnouncement) => !data.is_motorbike)
        );
        setMotorbikeList(
          res.data.filter((data: IAnnouncement) => data.is_motorbike)
        );
      })
      .catch((err) => {console.log(err)})
  }

  useEffect(() => {
    announcementData();
  }, []);

  return (
    <AnnouncementContext.Provider
      value={{
        navigate,
        commentsByAnnouncement,
        catchExample,
        setAnnouncementList,
        announcementList,
        setCarList,
        carList,
        setMotorbikeList,
        motorbikeList,
        setVehicleSpecific,
        vehicleSpecific,
        setImageToModal,
        imageToModal,
        setImageModal,
        imageModal,
        setCommentsAd,
        commentsAd,
        setExampleComment,
        exampleComment
      }
    }>
      {children}
    </AnnouncementContext.Provider>
  );
}

export default AnnouncementProvider;
