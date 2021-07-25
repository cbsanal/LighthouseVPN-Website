import App from "./App";
import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollTop from "./components/ScrollTop";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollTop />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
