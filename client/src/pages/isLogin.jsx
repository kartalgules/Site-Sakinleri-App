import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import HomeLogin from "./Login/Home";
import List from "./Login/List";
import Add from "./Login/Add";
import BulkDelete from "./Login/BulkDelete";
import Edit from "./Login/Edit";
import Settings from "./Login/Settings";
import BadRequest from "./BadRequest";
import style from "../styles/İsLogin.module.css";
import { usePersonContext } from "../../hooks/usePersonContext";
import { useAuthContext } from "../../hooks/useAuthContext";

const İsLogin = () => {
  const { persons, dispatch } = usePersonContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchPersons = async () => {
      const response = await fetch("/api/persons", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "PERSONS_GET", payload: json });
      }
    };
    if (user) {
      fetchPersons();
    }
  }, [dispatch, user]);

  return (
    <div className={style.mainContainer}>
      <Router>
        <Navbar />
        <article className={style.article}>
          <Routes>
            <Route path="/" exact="true" element={<HomeLogin />} />
            <Route path="/list" element={<List />} />
            <Route path="/add" element={<Add />} />
            <Route path="/excelAdd" element={<ExcelAdd />} />
            <Route path="/bulkDelete" element={<BulkDelete />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/*" element={<BadRequest />} />
          </Routes>
        </article>
      </Router>
    </div>
  );
};

export default İsLogin;
