import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
const rootElement = document.getElementById("root");
if (!rootElement) {
    throw new Error("Could not find root element to mount to");
}
const root = createRoot(rootElement);
root.render(_jsx(React.StrictMode, { children: _jsx(App, {}) }));
