import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import axios from "axios";
import "./index.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://qorkd.onrender.com";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
