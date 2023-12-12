/* eslint-disable no-unused-vars */
import { NavLink , Route, Routes } from "react-router-dom";
import { singIn } from "../firebase";
import Navbar from "../components/Navbar";
import HomeLogin from "./Login/Home";
import List from "./Login/List";
import Add from "./Login/Add";
import ExcelAdd from "./Login/ExcelAdd";
import BulkDelete from "./Login/BulkDelete";
import Edit from "./Login/Edit";
import Settings from "./Login/Settings";
import LogoutButton from "./Login/Logout";
import BadRequest from "./BadRequest";
import HomeLogout from "./Logout/Home";
import GoLogin from "./Logout/Login";
import Singin from "./Logout/Singin";

function Login() {
  const İsLogin = () => {
    return (
      <>
        <Navbar>
          <Routes>
            <Route path="/" exact="true" element={<HomeLogin />} />
            <Route path="/list" element={<List />} />
            <Route path="/add" element={<Add />} />
            <Route path="/excelAdd" element={<ExcelAdd />} />
            <Route path="/bulkDelete" element={<BulkDelete />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/logout" element={<LogoutButton />} />
            <Route path="/*" element={<BadRequest />} />
          </Routes>
        </Navbar>
      </>
    );
  };

  const İsLogout = () => {
    return (
      <>
        <Routes>
          <Route path="/" element={<HomeLogout />} />
          <Route path="/singin" element={<Singin />} />
          <Route path="/login" element={<GoLogin />} />
          <Route path="/*" element={<BadRequest />} />
        </Routes>
      </>
    );
  };

  return <>{singIn ? <İsLogout /> : <İsLogin />}</>;
}

export default Login;
