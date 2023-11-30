/* eslint-disable no-unused-vars */
import React from "react";
import ListApartment from "../../components/ListApartment";
import style from "../../styles/List.module.css";
import data from "../../../data/userData.json";

function List() {
  return (
    <div className={style.container}>
      <ListApartment />
    </div>
  );
}

export default List;
