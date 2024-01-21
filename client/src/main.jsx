import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { PersonContextProvider } from "./context/PersonContext.jsx";
import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";
import style from "./styles/Main.module.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <PersonContextProvider>
      <App />
    </PersonContextProvider>
    <ToastContainer position="top-right" autoClose={5000} theme="light" />
  </>
);
