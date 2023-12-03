import React from "react";
import ReactDom from "react-dom/client";
import AppComponent from './app';
import './index.css';

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <AppComponent />
);