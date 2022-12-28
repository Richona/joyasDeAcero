import React from "react";
import "./Home.css"
import Carousel from "../components/home/Carousel";

export const Home = () => {
  return (
    <div className="home_container">
      <div className="home_containerTitle">
        <h1 className="home_title">Joyas de Acero y Plata por Mayor</h1>
      </div>
      <section className="home_containerSection1">
        <Carousel />
      </section>
    </div>
  );
};
