import { Route, Routes } from "react-router-dom";
import CreateAnnouncement from "../Adverts/Created";
import DeleteAnnouncementModal from "../components/DeleteAnnouncementModal";
import EditAnnouncementModal from "../components/EditAnnouncementModal";
import Announcement from "../pages/Announcement";
import Home from "../pages/Home";
import Login from "../pages/Login";

export default function clientRoutes() {
  return (
    <Routes>
      <Route path="/homepage" element={<Home />} />
      <Route path="/edit" element={<EditAnnouncementModal />} />
      <Route path="/delete" element={<DeleteAnnouncementModal />} />
      <Route path="/announcement" element={<Announcement />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
