import { Route, Routes } from "react-router-dom";
import DeleteAnnouncementModal from "../components/DeleteAnnouncementModal";
import EditAnnouncementModal from "../components/EditAnnouncementModal";
import Announcement from "../pages/Announcement";
import Home from "../pages/Home";

export default function clientRoutes() {
  return (
    <Routes>
      <Route path="/homepage" element={<Home />} />
      <Route path="/edit" element={<EditAnnouncementModal/>}/>
      <Route path="/delete" element={<DeleteAnnouncementModal/>}/>
      <Route path="/announcement" element={<Announcement/>}/>
    </Routes>
  );
}
