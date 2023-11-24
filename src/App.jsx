/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import BulkDelete from "./pages/BulkDelete";
import Descriptions from "./pages/Descriptions";
import Edit from "./pages/Edit";
import ExcelAdd from "./pages/ExcelAdd";
import List from "./pages/List";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Settings from "./pages/Settings";
import Navbar from "./components/Navbar";
import style from "./styles/App.module.css";

function App() {
  return (
    <div className={style.container}>
      <Navbar />
      <div className={style.article}>
        <Routes>
          <Route path="/" exact="true" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/add" element={<Add />} />
          <Route path="/excelAdd" element={<ExcelAdd />} />
          <Route path="/bulkDelete" element={<BulkDelete />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/description" element={<Descriptions />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
