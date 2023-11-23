/* eslint-disable no-unused-vars */
import React from "react";
import data from "../../data/userData.json";
import style from "../styles/List.module.css";

function ListBlocks() {
  const uniqueBlocks = [...new Set(data.map((item) => item.blok))];
  console.log(uniqueBlocks);
  return (
    <>
      {uniqueBlocks.map((block, i) => (
        <button key={i}>
          {block}
        </button>
      ))}
    </>
  );
}

export default ListBlocks;
