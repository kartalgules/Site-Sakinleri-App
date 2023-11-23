/* eslint-disable no-unused-vars */
import React from "react";
import ListBlocks from "../components/ListBlocks";
import ListApartment from "../components/ListApartment";
import style from "../styles/List.module.css";
import data from "../../data/userData.json";

function List() {
  return (
    <div className={style.container}>
      <ListBlocks />
      <ListApartment />
    </div>
  );
}

export default List;
