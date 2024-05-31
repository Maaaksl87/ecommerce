import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link to={"/product/${item.id}"}>
      <div className="card">
        <div className="image">
          <img src={item.img} alt="" className="mainImg" />
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
          <h3>${item.oldPriсe}</h3>
          <h3>${item.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
