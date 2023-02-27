import { Route, Routes } from "react-router-dom";
import Advertiser from "../pages/AdvertiserPag";
import DeleteAnnouncementModal from "../components/DeleteAnnouncementModal";
import EditAnnouncementModal from "../components/EditAnnouncementModal";
import Home from "../pages/Home";

export default function clientRoutes() {
  return (
    <Routes>
      <Route path="/homepage" element={<Home />} />
      <Route path="/edit" element={<EditAnnouncementModal/>}/>
      <Route path="/delete" element={<DeleteAnnouncementModal/>}/>
      <Route path="/advertiser" element={<Advertiser/>}/>
    </Routes>
  );
}
