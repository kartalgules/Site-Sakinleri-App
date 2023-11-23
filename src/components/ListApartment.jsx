/* eslint-disable no-unused-vars */
import React from "react";
import style from "../styles/List.module.css";
import data from "../../data/userData.json";

function ListApartment() {
  return (
    <>
      <div className={style.detail}>
        <div className={style.apartment}>
            <h2>Daire</h2>
          {data.map((item, i) => (
              <p key={i}>{item.apartment}</p>
          ))}
        </div>
        <div className={style.seated}>
            <h2>Daire Sakini</h2>
          {data.map((item, i) => (
              <p key={i}>{item.fullName}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default ListApartment;
