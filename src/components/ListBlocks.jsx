/* eslint-disable no-unused-vars */
import React from "react";
import data from "../../data/userData.json";
import style from "../styles/List.module.css";

function ListBlocks() {
  const uniqueBlocks = [...new Set(data.map((item) => item.blok))];
  console.log(uniqueBlocks);
  return (
    <section>
      <h2>Bina Seçin :</h2>
      <select>
        {uniqueBlocks.map((block, i) => (
          <option name={block} key={i}>
            {block}
          </option>
        ))}
      </select>
    </section>
  );
}

export default ListBlocks;
