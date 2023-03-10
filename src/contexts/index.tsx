import { Props } from "../interfaces";
import { AddressProvider } from "./Address";
import AnnouncementProvider from "./announcementContext";
import { LoginProvider } from "./Login";
import { RegisterProvider } from "./Register";
import { ThemesProvider } from "./Themes";

const Providers: React.FC<Props> = ({ children }) => {
  return (
    <AddressProvider>
      <LoginProvider>
        <RegisterProvider>
          <ThemesProvider>
            <AnnouncementProvider>
              <ThemesProvider>{children}</ThemesProvider>
            </AnnouncementProvider>
          </ThemesProvider>
        </RegisterProvider>
      </LoginProvider>
    </AddressProvider>
  );
};

export default Providers;
