import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

const Main = () => {
  return (
    <main className="main">
      <div className="grid-container">
        <div className="grid-item alpinism">
          <Link to="/alpinism">АЛЬПІНІЗМ</Link>
        </div>

        <div className="grid-item tourism">
          <Link to="/tourism">ТУРИЗМ</Link>
        </div>

        <div className="grid-item gear">
          <Link to="/gear">СПОРЯДЖЕННЯ</Link>
        </div>

        <div className="grid-item accessories">
          <Link to="/accessories">АКСЕСУАРИ</Link>
        </div>

        <div className="grid-item trailrunning">
          <Link to="/trailrunning">ТРЕЙЛРАНІНГ</Link>
        </div>
      </div>
    </main>
  );
};

export default Main;
