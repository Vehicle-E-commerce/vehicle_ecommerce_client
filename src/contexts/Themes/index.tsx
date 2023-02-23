import { createContext, ReactNode } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import usePersistedState from "../../utils/usePersistedState";
import light from "../../styles/themes/light";
import dark from "../../styles/themes/dark";

interface ThemesContextType {
    theme: DefaultTheme;
    toggleTheme: () => void;
} 
export const ThemesContext = createContext<ThemesContextType>({
    theme: light,
    toggleTheme: () => {},
});

interface Props { children: ReactNode }
export const ThemesProvider: React.FC<Props> =  ({children}) => {
    const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

    const toggleTheme = () => {
        setTheme(theme.title == "light" ? dark : light);
      };

    return (
        <ThemeProvider theme={theme}>
            <ThemesContext.Provider value={{theme, toggleTheme}}>
                {children}
            </ThemesContext.Provider>
        </ThemeProvider>
    )
}