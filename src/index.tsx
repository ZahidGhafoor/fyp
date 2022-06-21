import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import ErrorService from "services/error.service";
import SentryService from "services/sentry.service";
import ErrorBoundary from "components/atoms/ErrorBoundary";

ErrorService.init();
SentryService.init();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
