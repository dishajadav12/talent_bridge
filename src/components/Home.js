import React from "react";
import Intro from "../components/HomeComponents/Intro";
import Services from "../components/HomeComponents/Services";
import Features from "../components/HomeComponents/Features";
import Footer from "../components/HomeComponents/Footer";
import Categories from "./HomeComponents/Categories";

const Home = () => {
  return (
    <div>
      <Intro />
      <Services />
      <Features />
      <Categories />
      <Footer />
    </div>
  );
};

export default Home;
