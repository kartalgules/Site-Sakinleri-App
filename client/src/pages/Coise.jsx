import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import HomeLogout from "../pages/Logout/Home";
import Login from "./Login";
import SignUp from "./SignUp";
import BadRequest from "../pages/BadRequest";
import İsLogin from './isLogin'
import { useAuthContext } from "../../hooks/useAuthContext";

const Coise = () => {
  const { user } = useAuthContext();

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exect element={!user ? <HomeLogout /> : <Navigate to={<İsLogin />} />} />
          <Route path="/signup" element={!user ? <SignUp /> : <Navigate to={<İsLogin />} /> } />
          <Route path="/login" element={!user ? <Login /> : <Navigate to={<İsLogin />} />} />
          <Route path="/*" element={<BadRequest />} />
        </Routes>
      </Router>
    </>
  );
};

export default Coise;
