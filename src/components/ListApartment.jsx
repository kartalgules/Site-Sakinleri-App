/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import style from "../styles/List.module.css";
import data from "../../data/userData.json";

function ListApartment() {
  //    *****FUNCTİONS*****
  
  //    Select Key Function
  const handleItemClick = (key) => {
    setSelectedItemKey(key);
  };
  //    Block Key Function
  const handleBlockChange = (e) => {
    setSelectedBlockKey(e.target.value);
  };
  
  //    Unic Bloks
  const uniqueBlocks = [...new Set(data.map((item) => item.blok))];
  //  Seleck Key State
  const [selectedItemKey, setSelectedItemKey] = useState(null);
  //    Select Block Key State
  const [selectedBlockKey, setSelectedBlockKey] = useState("");
  //    Selected Blok List
  const filterBloks = data.filter((item) => item.blok === selectedBlockKey);

  return (
    <>
      <div className={style.select}>
        <h2>Blok</h2>
        <select onChange={handleBlockChange}>
          <option value="" disabled selected>Seçiniz</option>
          {uniqueBlocks.map((block, i) => (
            <option key={i}>{block}</option>
          ))}
        </select>
      </div>

      <div>
        <div className={style.detail}>
          <div className={style.seated}>
            {selectedBlockKey == "" ? "" : <h2>Daire Sakini</h2>}
            {selectedBlockKey == "" ? (
              <div className={style.loading}><h1>Lütfen blok seçiniz...</h1></div>
            ) : (
              filterBloks.map((item, i) => (
                <div
                  className={style.seated_child}
                  key={i}
                  onClick={() => handleItemClick(i)}
                >
                  <span>{item.apartment}</span>
                  <p>{item.fullName}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListApartment;
