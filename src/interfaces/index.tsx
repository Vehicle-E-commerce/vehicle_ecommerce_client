import { ReactNode } from "react";
import { DefaultTheme } from "styled-components";
import { IUser } from "../contexts/announcementContext";

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
  user: null | IUser
  logout: () => void
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
