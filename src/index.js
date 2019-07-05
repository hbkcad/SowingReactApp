import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./components/generic/header.css";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import b2cauth from "react-azure-adb2c";
import { Provider } from "react-redux";

b2cauth.initialize({
  instance: "https://login.microsoftonline.com/tfp/",
  tenant: "valtechmoog.onmicrosoft.com",
  signInPolicy: "B2C_1_ReactApp",
  applicationId: "72e03165-74d1-456d-ba3b-a6eae4e2935d",
  cacheLocation: "sessionStorage",
  scopes: ["https://valtechmoog.onmicrosoft.com/api/user_impersonation"],
  redirectUri: "http://localhost:3000",
  postLogoutRedirectUri: window.location.origin
});

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
b2cauth.run(() => {
  ReactDOM.render(app, document.getElementById("root"));
  serviceWorker.unregister();
  // b2cauth.run(() => {
  //   ReactDOM.render(app, document.getElementById('root'));
  // serviceWorker.unregister();
});
