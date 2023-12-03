import BadRequest from "./BadRequest";
import Home from "./Logout/Home";
import Login from "./Logout/Login";
import Singin from "./Logout/Singin";
import { Route, Routes } from "react-router-dom";

function Logout() {

  return (
    <Routes>
      <Route path="/" exact="true"  element={<Home />}/>
      <Route path="/singin" element={<Singin />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/*" element={<BadRequest />} />
    </Routes>
  )
}

export default Logout;
