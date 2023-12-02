import Home from "./Logout/Home";
// import Descriptions from "./Logout/Desciprions";

import {useContext} from "react";
import LoginContext from "../context/LoginContext";
import { Route, Routes } from "react-router-dom";

function Logout() {
  const data = useContext(LoginContext)

  return (
    <Routes>
      <Route path="/" exact="true" component={<Home data={data} />}/>
    </Routes>
  )
}

export default Logout;
