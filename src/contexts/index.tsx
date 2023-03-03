import { Props } from "../interfaces";
import { RegisterProvider } from "./Register";
import { ThemesProvider } from "./Themes";

const Providers: React.FC<Props> = ({ children }) => {
  return (
    <RegisterProvider>
      <ThemesProvider>{children}</ThemesProvider>
    </RegisterProvider>
  );
};
import { ReactNode } from "react";
import AnnouncementProvider from "./announcementContext";
import { ThemesProvider } from "./Themes";

interface Props {
    children: ReactNode
}
 
const Providers: React.FC<Props> = ({ children }) => { 
    return(
 	    <ThemesProvider>
            <AnnouncementProvider>
                {children}
            </AnnouncementProvider>
        </ThemesProvider> 
    )
}; 

export default Providers;
