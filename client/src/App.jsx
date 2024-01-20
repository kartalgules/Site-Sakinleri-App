import Login from "./pages/Login";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {

  const [users, setUsers] = useState("");
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUsers(user);
      }else{
        setUsers("");
      }
    });
  }, []);
  
  return (
      <>
        <Login users={users} />
      </>
  );
};

export default App;