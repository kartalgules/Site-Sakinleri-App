import { useState, useEffect } from "react";
import style from "../../styles/List.module.css";

function List() {
  const [persons, setPersons] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/persons")
        .then((response) => response.json())
        .then((data) => setPersons(data))
        .cacth(err)(console.log(err));
    };
  }, []);

  return (
    <div className={style.container}>
      <div className={style.select}>
        <h2>Blok</h2>
      </div>

      <div>
        <div className={style.detail}>
          <div className={style.seated}>
            {persons &&
              persons.map((p) => (
                <div key={p._id}>
                  <h3>{p.block}</h3>
                  <h3>{p.apartment}</h3>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
