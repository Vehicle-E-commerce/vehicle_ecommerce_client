import React from "react";
import GlobalStyle from './styles/global';
import { ThemeProvider, DefaultTheme } from "styled-components";
import usePersistedState from "./utils/usePersistedState";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import Home from "./pages/Home";


const App = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title == "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home toggleTheme={toggleTheme} />
    </ThemeProvider>
  )
}

export default App;
