/* eslint-disable no-unused-vars */
import { BrowserRouter } from "react-router-dom";
import { FirebaseProvider } from "./context/FirebaseContext.jsx";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import style from "./styles/Main.module.css";
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <FirebaseProvider>
        <App />
      </FirebaseProvider>
    </BrowserRouter>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      theme="light"
    />
    {/* Same as */}
    <ToastContainer />
  </>
);
