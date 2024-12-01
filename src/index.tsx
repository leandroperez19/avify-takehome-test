import React from "react";
import { App } from "./app";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n";

createRoot(document.getElementById("reactMountPoint")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
