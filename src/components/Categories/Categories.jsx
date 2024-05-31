import React from "react";
import { Link } from "react-router-dom";
import "./Categories.scss";

const Categories = () => {
  return (
    <main className="main">
      <div className="grid-container">
        <div className="grid-item alpinism">
          <Link to="/products/1">АЛЬПІНІЗМ</Link>
        </div>

        <div className="grid-item tourism">
          <Link to="/products/1">ТУРИЗМ</Link>
        </div>

        <div className="grid-item gear">
          <Link to="/products/1">СПОРЯДЖЕННЯ</Link>
        </div>

        <div className="grid-item accessories">
          <Link to="/products/1">АКСЕСУАРИ</Link>
        </div>

        <div className="grid-item trailrunning">
          <Link to="/products/1">ТРЕЙЛРАНІНГ</Link>
        </div>
      </div>
    </main>
  );
};

export default Categories;
