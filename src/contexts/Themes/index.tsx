import { createContext } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { Props, ThemesContextType } from "../../interfaces";
import dark from "../../styles/themes/dark";
import light from "../../styles/themes/light";
import usePersistedState from "../../utils/usePersistedState";

export const ThemesContext = createContext<ThemesContextType>({
  theme: light,
  toggleTheme: () => {},
});

export const ThemesProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title == "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <ThemesContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemesContext.Provider>
    </ThemeProvider>
  );
};
