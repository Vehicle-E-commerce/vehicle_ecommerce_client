import { ReactNode } from "react";
import { ThemesProvider } from "./Themes";

interface Props {
    children: ReactNode
}
 
const Providers: React.FC<Props> = ({ children }) => { 
    return(
 	    <ThemesProvider>
            {children}
        </ThemesProvider> 
    )
}; 

export default Providers;