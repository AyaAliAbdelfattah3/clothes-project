import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Products from "../components/Products";
import Bannar from "../components/Bannar";
import NewArrivals from "../components/NewArrivals";
import Crazy from "../components/Crazy";
import PhotosBanner from "../components/PhotosBanner";
import Forms from "../components/Forms";

const Home = () => {
  return (
    <div>
        <Hero/>
      <Features />
      <Products />
      <Bannar />
      <NewArrivals />
      <Crazy />
      <PhotosBanner />
      <Forms />
    </div>
  )
}

export default Home
