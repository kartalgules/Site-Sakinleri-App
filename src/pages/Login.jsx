import { Route, Routes } from "react-router-dom";
import Home from "./Login/Home";
import List from "./Login/List";
import Add from "./Login/Add";
import ExcelAdd from "./Login/ExcelAdd";
import BulkDelete from "./Login/BulkDelete";
import Edit from "./Login/Edit";
import Settings from "./Login/Settings";
import Logout from "./Login/Logout";

function Login() {
  return (
    <Routes>
      <Route path="/" exact="true" element={<Home />} />
      <Route path="/list" element={<List />} />
      <Route path="/add" element={<Add />} />
      <Route path="/excelAdd" element={<ExcelAdd />} />
      <Route path="/bulkDelete" element={<BulkDelete />} />
      <Route path="/edit" element={<Edit />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  );
}

export default Login;
