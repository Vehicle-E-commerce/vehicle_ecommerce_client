import { createContext, ReactNode, ReactPortal, SetStateAction, useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import api from "../services/server";

interface IAnnouncementProviders {
  children: ReactNode | ReactPortal
}
interface IAnnouncementContext {
  navigate: NavigateFunction

  announcementList: never[] | IAnnouncement[]
  setAnnouncementList: React.Dispatch<React.SetStateAction<never[]>>
  carList: never[] | IAnnouncement[]
  setCarList: React.Dispatch<React.SetStateAction<never[]>>
  motorbikeList: never[] | IAnnouncement[]
  setMotorbikeList: React.Dispatch<React.SetStateAction<never[] >> 
  vehicleSpecific: null | IAnnouncement
  setVehicleSpecific: React.Dispatch<React.SetStateAction<null>>
}
interface IAnnouncement {
  id: string,
  title: string,
  year: number,
  mileage: number,
  price: number,
  bio: string,
  is_motorbike: boolean,
  cover_image: string,
  created_at: Date,
  updated_at: Date,
  images: IImages[],
  user: IUser
}
interface IImages {
  id: string,
  image: string,
  created_at: Date,
  updated_at: Date
}
interface IUser {
  id: string,
  name: string,
  email: string,
  cpf: string,
  telephone: string,
  birth_date: string,
  bio: string,
  is_advertiser: boolean,
  created_at: Date,
  updated_at: Date
  address: IAddress
}
interface IAddress {
  id: string,
  cep: string,
  state: string,
  city: string,
  road: string,
  number: string,
  complement: string,
  created_at: Date,
  updated_at: Date
}

export interface ICardData {
  cover_image: string,
  title: string,
  year: number,
  mileage: number,
  price: number,
  bio: string,
  user_name: string
  data: SetStateAction<null>
}



export const AnnouncementContext = createContext<IAnnouncementContext>({} as IAnnouncementContext);

function AnnouncementProvider({children}: IAnnouncementProviders) {
  
  const navigate = useNavigate();

  const [announcementList, setAnnouncementList] = useState([])
  const [carList, setCarList] = useState([])
  const [motorbikeList, setMotorbikeList] = useState([])

  const [vehicleSpecific, setVehicleSpecific] = useState(null)

  const announcementData = async ():Promise<void> => {
    await api.get("announcements/") 
      .then((res) => {
        setAnnouncementList(res.data)
        setCarList(res.data.filter((data: IAnnouncement) => !data.is_motorbike))
        setMotorbikeList(res.data.filter((data: IAnnouncement) => data.is_motorbike))
      })
      .catch((err) => {console.log(err)})
  }
  useEffect(() => {
    announcementData()
  }, [])


  return (
    <AnnouncementContext.Provider value={
      {
        navigate,
        setAnnouncementList,
        announcementList,
        setCarList,
        carList,
        setMotorbikeList,
        motorbikeList,
        setVehicleSpecific,
        vehicleSpecific,
      }
    }>
      {children}
    </AnnouncementContext.Provider>
  )
}

export default AnnouncementProvider;