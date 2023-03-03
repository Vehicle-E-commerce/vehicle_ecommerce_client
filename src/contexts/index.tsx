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

export default Providers;
