import { Props } from "../interfaces";
import AnnouncementProvider from "./announcementContext";
import { RegisterProvider } from "./Register";
import { ThemesProvider } from "./Themes";

const Providers: React.FC<Props> = ({ children }) => {
  return (
    <RegisterProvider>
      <ThemesProvider>
        <AnnouncementProvider>
          <ThemesProvider>{children}</ThemesProvider>
        </AnnouncementProvider>
      </ThemesProvider>
    </RegisterProvider>
  );
};

export default Providers;
