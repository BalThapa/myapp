import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const name = "BAL";
const first_page = 2023;

const demo = (
  <div>
    <h1>Hello World, {name}</h1>
    <p>My first page was {2023 - first_page} years ago</p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {demo}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
