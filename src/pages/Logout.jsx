import Home from "./Logout/Home";
import Login from "./Logout/Login";
import Singin from "./Logout/Singin";
import { Route, Routes } from "react-router-dom";

function Logout() {

  return (
    <Routes>
      <Route path="/main" element={<Home />}/>
      <Route path="/singin" element={<Singin />}/>
      <Route path="/login" element={<Login />}/>
    </Routes>
  )
}

export default Logout;
