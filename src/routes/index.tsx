import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

export default function clientRoutes() {
  return (
    <Routes>
      <Route path="/homepage" element={<Home />} />
    </Routes>
  );
}
