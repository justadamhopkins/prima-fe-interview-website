import React from "react";
import ReactDOM from "react-dom/client";

import "@styles/tokens/base/index.css";

import { App } from "@components/_templates/App";
import { BrowserRouter } from "react-router";

async function enableMocking() {
  const { worker } = await import("./tests/server/browser");

  return worker.start();
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

enableMocking().then(() => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  );
});
