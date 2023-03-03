import { Toaster } from "react-hot-toast";
import Providers from "./contexts";
import Routes from "./routes";
import GlobalStyle from "./styles/global";

const App = () => {
  return (
    <Providers>
      <GlobalStyle />
      <Routes />
      <Toaster />
    </Providers>
  );
};

export default App;
