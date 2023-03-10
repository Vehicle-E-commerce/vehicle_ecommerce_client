import { Props } from "../interfaces";
import { AddressProvider } from "./Address";
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
            <AddressProvider>
              <ThemesProvider>{children}</ThemesProvider>
            </AddressProvider>
          </AnnouncementProvider>
        </ThemesProvider>
      </RegisterProvider>
    </LoginProvider>
  );
};

export default Providers;
