import React from "react";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Categories from "../../components/Categories/Categories";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <FeaturedProducts type="featured" />
      <Categories />
    </div>
  );
};

export default Home;
