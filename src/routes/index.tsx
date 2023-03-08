import { Route, Routes } from "react-router-dom";
import ChangePassword from "../pages/ChangePassword";
import DeleteAnnouncementModal from "../components/DeleteAnnouncementModal";
import EditAnnouncementModal from "../components/EditAnnouncementModal";
import Announcement from "../pages/Announcement";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ResetPassword from "../pages/RecoveryPassword";
import RegisterPage from "../pages/Register";

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

      <Route path="*" element={<Home />} />
    </Routes>
  );
}
