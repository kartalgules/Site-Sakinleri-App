import { useContext } from "react";
import { Route } from "react-router-dom";
import FirebaseContext from "../context/FirebaseContext";
import Navbar from "../components/Navbar";
import HomeLogin from "./Login/Home";
import List from "./Login/List";
import Add from "./Login/Add";
import ExcelAdd from "./Login/ExcelAdd";
import BulkDelete from "./Login/BulkDelete";
import Edit from "./Login/Edit";
import Settings from "./Login/Settings";
import BadRequest from "./BadRequest";
import HomeLogout from "./Logout/Home";
import Auth from "../apps/auth/Auth";

function Login() {
  const { auth } = useContext(FirebaseContext);

  const İsLogin = () => {
    return (
      <>
        <Navbar>
          <Route path="/" exact="true" element={<HomeLogin />} />
          <Route path="/list" element={<List />} />
          <Route path="/add" element={<Add />} />
          <Route path="/excelAdd" element={<ExcelAdd />} />
          <Route path="/bulkDelete" element={<BulkDelete />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/logout" element={<LogoutButton />} />
          <Route path="/*" element={<BadRequest />} />
        </Navbar>
      </>
    );
  };

  const İsLogout = () => {
    return (
      <>
        <Route path="/" element={<HomeLogout />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/*" element={<BadRequest />} />
      </>
    );
  };
  return <>{ auth ? <İsLogin /> : <İsLogout />}</>;
}

export default Login;
