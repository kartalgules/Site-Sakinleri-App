import { Router, Routes } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
      <>
        <Router>
          <Routes>
            <Login />
          </Routes>
        </Router>
      </>
  )
}

export default App;
