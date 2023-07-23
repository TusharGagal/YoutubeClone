import React from "react";
import reactDom from "react-dom/client";
import App from "./app";
import './index.css';

const root=reactDom.createRoot(document.getElementById('root'));

root.render(<App />);