import Routes from "./routes";
import GlobalStyle from "./styles/global";
import Providers from "./contexts";

const App = () => {
  return (
    <Providers>
      <GlobalStyle />
      <Routes />
    </Providers>
  );
};

export default App;
