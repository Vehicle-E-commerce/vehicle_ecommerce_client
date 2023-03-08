import { Props } from "../interfaces";
import AnnouncementProvider from "./announcementContext";
import { LoginProvider } from "./Login";
import { RegisterProvider } from "./Register";
import { ThemesProvider } from "./Themes";

const Providers: React.FC<Props> = ({ children }) => {
  return (
    <LoginProvider>
      <RegisterProvider>
        <ThemesProvider>
          <AnnouncementProvider>
            <ThemesProvider>{children}</ThemesProvider>
          </AnnouncementProvider>
        </ThemesProvider>
      </RegisterProvider>
    </LoginProvider>
  );
};

export default Providers;
