import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import RootRoutes from "./root-routes";
import { Security } from "@okta/okta-react";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { toRelativeUrl } from "@okta/okta-auth-js";

import { oktaAuthInstance } from "./config/okta-config";

// @ts-ignore
const restoreOriginalUri = async (_oktaAuth, originalUri) => {
  //     history.replace("/profile");
  window.location.replace(
    toRelativeUrl(originalUri || "/", window.location.origin)
  );
};

const handleRedirect = () => window.location.replace("/");

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Security
        oktaAuth={oktaAuthInstance}
        restoreOriginalUri={restoreOriginalUri}
        onAuthRequired={handleRedirect}
      >
        <RootRoutes />
      </Security>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
