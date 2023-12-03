/* eslint-disable no-unused-vars */
import { useContext } from "react";
import LoginContext from "./context/LoginContext";
import Login from "./pages/Login";
import Logout from "./pages/Logout";

function App() {
  const data = useContext(LoginContext);

  return <>{data.login ? <Login /> : <Logout />}</>;
}

export default App;
