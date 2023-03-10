import { createContext, useContext } from "react";
import { toast } from "react-hot-toast";
import { AddressContextType, IAddress, Props } from "../../interfaces";
import api from "../../services/server";
import { AnnouncementContext } from "../announcementContext";

export const AddressContext = createContext({} as AddressContextType);

export const AddressProvider: React.FC<Props> = ({ children }) => {
  const { setUserEditAddress, userEditAddress } =
    useContext(AnnouncementContext);

  const updateAddressUser = (data: IAddress) => {
    api.defaults.headers.Authorization = `bearer ${localStorage.getItem(
      "@token"
    )}`;
    api
      .patch("/address", data)
      .then((res) => {
        toast.success("Endereço atualizado!", {
          style: {
            borderRadius: "10px",
            background: "var( --Grey-2)",
            color: "var(--Grey-0)",
            fontSize: "14px",
            fontWeight: "700",
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AddressContext.Provider value={{ updateAddressUser }}>
      {children}
    </AddressContext.Provider>
  );
};
