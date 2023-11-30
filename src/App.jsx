/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Login/Home";
import Add from "./pages/Login/Add";
import BulkDelete from "./pages/Login/BulkDelete";
import Descriptions from "./pages/Login/Descriptions";
import Edit from "./pages/Login/Edit";
import ExcelAdd from "./pages/Login/ExcelAdd";
import List from "./pages/Login/List";
import Logout from "./pages/Login/Logout";
import Settings from "./pages/Login/Settings";
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
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
