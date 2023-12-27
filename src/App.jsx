import { Router, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUsers(user);
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);
  return (
    <Router>
      <Routes>
        <Login />
      </Routes>
    </Router>
  );
}

export default App;
