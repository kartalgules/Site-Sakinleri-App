import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLogout from "../pages/Logout/Home";
import Login from "./Login";
import SingUp from "./SingUp";
import BadRequest from "../pages/BadRequest";

const Coise = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exect element={<HomeLogout />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<BadRequest />} />
      </Routes>
    </Router>
  );
};

export default Coise;
