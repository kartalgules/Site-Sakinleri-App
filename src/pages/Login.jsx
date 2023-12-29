import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function Login({ users }) {
  const { auth } = useContext(FirebaseContext);
  const İsLogin = () => {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact="true" element={<HomeLogin />} />
            <Route path="/list" element={<List />} />
            <Route path="/add" element={<Add />} />
            <Route path="/excelAdd" element={<ExcelAdd />} />
            <Route path="/bulkDelete" element={<BulkDelete />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/*" element={<BadRequest />} />
          </Routes>
        </Router>
      </>
    );
  };

  const İsLogout = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<HomeLogout />} />
          <Route path="/register" element={<Auth />} />
          <Route path="/*" element={<BadRequest />} />
        </Routes>
      </Router>
    );
  };
  return <>{users.email ? <İsLogin /> : <İsLogout />}</>;
}

export default Login;
