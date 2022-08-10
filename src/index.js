import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
//component file
import TodoContainer from "./components/TodoContainer";
import "./App.css";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <TodoContainer />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
