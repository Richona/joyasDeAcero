import React from "react";
import "./Home.css"
import Carousel from "../components/home/Carousel";
import Products from "../components/home/Products";
import Banner from "../components/home/Banner";

export const Home = () => {
  return (
    <div className="home_container">
      <section className="home_containerTitle">
        <h1 className="home_title">Joyas de Acero y Plata por Mayor</h1>
      </section>
      <section className="home_containerSection1">
        <Carousel />
      </section>
      <section className="home_containerSection2">
        <Products />
        <Banner />
      </section>
    </div>
  );
};
