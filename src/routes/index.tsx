import { Route, Routes } from "react-router-dom";
import ChangePassword from "../pages/ChangePassword";
import DeleteAnnouncementModal from "../components/DeleteAnnouncementModal";
import EditAnnouncementModal from "../components/EditAnnouncementModal";
import Advertiser from "../pages/Advertiser";
import AdvertiserUser from "../pages/AdvertiserUser";
import Announcement from "../pages/Announcement";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ResetPassword from "../pages/RecoveryPassword";
import RegisterPage from "../pages/Register";
import CreateAnnouncement from "../Adverts/Created";

export default function clientRoutes() {
  return (
    <Routes>
      <Route path="/homepage" element={<Home />} />
      <Route path="/edit" element={<EditAnnouncementModal />} />
      <Route path="/delete" element={<DeleteAnnouncementModal />} />
      <Route path="/announcement" element={<Announcement />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/recoveryPassword" element={<ResetPassword />} />

      <Route path="/reset-password/:token" element={<ChangePassword />} />

      <Route path="/advertiserUser" element={<AdvertiserUser />} />
      <Route path="/advertiser" element={<Advertiser />} />

      <Route path="/createAnnuncement" element={<CreateAnnouncement />} />

      <Route path="*" element={<Home />} />
    </Routes>
  );
}
