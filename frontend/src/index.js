import React from "react";
import { render } from "react-dom";
import "./index.scss";
import App from "./components/App";

// React Router
import { BrowserRouter as Router } from "react-router-dom";
// React Redux
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";

const store = configureStore();

render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById("root")
);
