import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.tsx'
import { Header } from "./common/Header/index.tsx";
import { HeaderAlert } from "./common/Header/HeaderAlert/index.tsx";
import { HeaderMenu } from "./common/Header/HeaderMenu/index.tsx";
import { Slider } from "./layout/Slider/index.tsx";
import { Cards } from "./layout/Cards/index.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HeaderAlert />
    <Header />
    <HeaderMenu />
    <Slider />
    <Cards />
  </React.StrictMode>
);
