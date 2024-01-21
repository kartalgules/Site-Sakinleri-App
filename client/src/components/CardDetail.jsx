import React from "react";

export default CardDetail = ({ person }) => {
  const detail = (person) => {};
  return (
    <div>
      <h4>{person.block}</h4>
      <h4>{person.apartment}</h4>
      <p>{person.fullname}</p>
      <p>{person.tel}</p>
      <i class="fa-solid fa-pencil" onClick={detail}></i>
    </div>
  );
};
