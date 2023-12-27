import { FirebaseProvider } from "./context/FirebaseContext.jsx";
import ReactDOM from "react-dom/client";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from "./App.jsx";
import style from "./styles/Main.module.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <>
      <FirebaseProvider>
        <App />
      </FirebaseProvider>
    </>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      theme="light"
    />
  </>
);
