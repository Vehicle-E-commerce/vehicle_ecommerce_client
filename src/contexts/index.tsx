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