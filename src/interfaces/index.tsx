import { Dispatch, ReactNode, ReactPortal, SetStateAction } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { NavigateFunction } from "react-router-dom";
import { DefaultTheme } from "styled-components";

export interface Props {
  children: ReactNode;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserLoginContext {
  modal: string;
  setModal: React.Dispatch<React.SetStateAction<string>>;
  signIn: (data: IUserLogin) => Promise<void>;
  user: null | IUser;
  logout: () => void;
}

export interface ThemesContextType {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

export interface RegisterContextType {
  registerUser: (data: IUserRegister) => Promise<void>;
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  handleCepBlur: (event: { target: { value: string } }) => void;
  accountType: boolean;
  setAccountType: React.Dispatch<React.SetStateAction<boolean>>;
  handleAccountTypeChange: (event: { target: { value: string } }) => void;
}

export interface AddressContextType {
  updateAddressUser: (data: IAddress) => void;
}

export interface IUserRegister {
  name: string;
  email: string;
  cpf: number;
  telephone: number;
  date_of_birth: Date;
  bio: string;
  cep: number;
  state: string;
  city: string;
  road: string;
  number: number;
  complement: number;
  is_announcement: boolean;
  password: string;
  confirm_password: string;
}

export interface IUserRegisterData {
  name: string;
  email: string;
  cpf: number;
  telephone: number;
  date_of_birth: Date;
  bio: string;
  address: {
    cep: number;
    state: string;
    city: string;
    street: string;
    number: number;
    complement: number;
  };
  is_announcement: boolean;
  password: string;
  confirm_password: string;
}

export interface IAnnouncement {
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
export interface IImages {
  id: string;
  image: string;
  created_at: Date;
  updated_at: Date;
}
export interface IUser {
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
export interface IAddress {
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
export interface IComment {
  id: string;
  announcement: IAnnouncement;
  comment: string;
  created_at: Date;
  updated_at: Date;
  user: IUser;
}

export interface ICardData {
  cover_image: string;
  title: string;
  year: number;
  mileage: number;
  price: number;
  bio: string;
  user_name: string;
  data: any;
}
export interface ICommentData {
  userName: string;
  date: Date;
  comment: string;
}

export interface IAnnouncementProviders {
  children: ReactNode | ReactPortal;
}
export interface IAnnouncementContext {
  navigate: NavigateFunction;
  commentsByAnnouncement: (id_announcement: string) => Promise<void>;
  catchExample: (event: any) => void;
  onSubmitCreateComment: SubmitHandler<FieldValues>;
  onDeleteAd: () => void;

  announcementList: [] | IAnnouncement[];
  carList: [] | IAnnouncement[];
  motorbikeList: [] | IAnnouncement[];
  setVehicleSpecific: React.Dispatch<
    React.SetStateAction<IAnnouncement | null>
  >;
  imageToModal: string;
  setImageToModal: React.Dispatch<SetStateAction<string>>;
  imageModal: boolean;
  setImageModal: React.Dispatch<SetStateAction<boolean>>;
  commentsAd: [] | IComment[];
  exampleComment: string;
  setExampleComment: React.Dispatch<SetStateAction<string>>;
  userEditModal: boolean;
  setUserEditModal: React.Dispatch<SetStateAction<boolean>>;
  userEditAddress: boolean;
  setUserEditAddress: React.Dispatch<SetStateAction<boolean>>;
  updateAdModal: boolean;
  setUpdateAdModal: React.Dispatch<SetStateAction<boolean>>;
  deleteAdModal: boolean;
  setDeleteAdModal: React.Dispatch<SetStateAction<boolean>>;
  setAnnouncementList: Dispatch<SetStateAction<IAnnouncement[]>>;
  setCarList: Dispatch<SetStateAction<IAnnouncement[]>>;
  setMotorbikeList: Dispatch<SetStateAction<IAnnouncement[]>>;
  vehicleSpecific: IAnnouncement | null;
  setCommentsAd: Dispatch<SetStateAction<IComment[]>>;
  openAndClosedModalCreateAnnou: () => void;
  isCreateAnnou: boolean;
}
