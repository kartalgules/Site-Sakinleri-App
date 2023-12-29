import React, { useState } from "react";
import style from "../../styles/List.module.css";

function List() {
  return (
    <div className={style.container}>
      <div className={style.select}>
        <h2>Blok</h2>
        {/* <select defaultValue="" onChange={handleBlockChange}>
          <option value="" disabled>
            Seçiniz
          </option>
          {uniqueBlocks.map((block, i) => (
            <option value={block} key={i}>
              {block}
            </option>
          ))}
        </select> */}
      </div>

      <div>
        <div className={style.detail}>
          <div className={style.seated}>
            {/* {selectedBlockKey == "" ? "" : <h2>Daire Sakini</h2>}
            {selectedBlockKey == "" ? (
              <div className={style.loading}>
                <h1>Lütfen blok seçiniz...</h1>
              </div>
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
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
