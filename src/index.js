import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bulma/css/bulma.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
require("dotenv").config();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
