/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/list">Sakin Listesi</NavLink>
        <NavLink to="/add">Sakin Ekle</NavLink>
        <NavLink to="/excelAdd">Excel Sakin Ekle</NavLink>
        <NavLink to="/bulkDelete">Sakin Listesi</NavLink>
        <NavLink to="/settings">Ayarlar</NavLink>
        <NavLink to="/logout">Çıkış</NavLink>
    </nav>
  )
}

export default Navbar;
