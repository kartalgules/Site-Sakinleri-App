// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import HomeLogin from "./Login/Home";
// import List from "./Login/List";
// import Add from "./Login/Add";
// import ExcelAdd from "./Login/ExcelAdd";
// import BulkDelete from "./Login/BulkDelete";
// import Edit from "./Login/Edit";
// import Settings from "./Login/Settings";
// import BadRequest from "./BadRequest";
// import HomeLogout from "./Logout/Home";

// function Coise({ users }) {
  //   const İsLogin = () => {
    //     return (
//       <div className={style.mainContainer}>
//         <Router>
//           <Navbar />
//           <article className={style.article}>
//             <Routes>
//               <Route path="/" exact="true" element={<HomeLogin />} />
//               <Route path="/list" element={<List />} />
//               <Route path="/add" element={<Add />} />
//               <Route path="/excelAdd" element={<ExcelAdd />} />
//               <Route path="/bulkDelete" element={<BulkDelete />} />
//               <Route path="/edit" element={<Edit />} />
//               <Route path="/settings" element={<Settings />} />
//               <Route path="/*" element={<BadRequest />} />
//             </Routes>
//           </article>
//         </Router>
//       </div>
//     );
//   };

//   const İsLogout = () => {
  //     return (
    //       <Router>
    //         <Routes>
    //           <Route path="/" element={<HomeLogout />} />
    //           <Route path="/register" element={<Auth />} />
    //           <Route path="/*" element={<BadRequest />} />
    //         </Routes>
    //       </Router>
    //     );
    //   };
    //   return <>{users.email ? <İsLogin /> : <İsLogout />}</>;
    // }
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
    import HomeLogout from "../pages/Logout/Home";
    import Login from "./Login";
    import SingUp from "./SingUp";
    import BadRequest from "../pages/BadRequest";
    import style from '../styles/İsLogin.module.css'
    
const Coise = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exect element={<HomeLogout />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<BadRequest />} />
      </Routes>
    </Router>
  );
};

export default Coise;