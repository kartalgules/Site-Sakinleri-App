/* eslint-disable no-unused-vars */
import React from "react";
import ListBlocks from "../components/ListBlocks";
import style from "../styles/List.module.css";
import data from "../../data/userData.json";

function List() {
  
  return (
    <div className={style.container}>
      <ListBlocks />
      
      {/* <div className={style.detail}>
        <div className={style.apartment}>
          

        </div>

        <div className={style.seated}>
        {data.map((item,i) => (
            <div key={i}>
              <p>{item.fullName}</p>
            </div>

          ))}
        </div>
      </div> */}
    </div>
  );
}

export default List;
