import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./layout/common/Header/index.tsx";
import { Slider } from "./layout/Slider/index.tsx";
import { Cards } from "./layout/Cards/index.tsx";
import { Brands } from "./layout/Brands/index.tsx";
import { Shelf } from "./layout/Shelf/index.tsx";
import { Banner } from "./layout/Banner/index.tsx";
import { Newsletter } from "./layout/Newsletter/index.tsx";
import { Footer } from "./layout/common/Footer/index.tsx";
import { ModalCustom } from "./layout/Modal/index.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ModalCustom />
    <Header />
    <Slider />
    <div style={{ margin: "0 3rem" }}>
      <Cards />
      <Brands />
      <Shelf />
      <Banner />
    </div>
    <Newsletter />
    <Footer />
  </React.StrictMode>
);
