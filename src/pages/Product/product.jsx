import React, { useState } from "react";
import "./Product.scss";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://images.unsplash.com/photo-1605762566242-bd1c73c885b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFscGluaXNtfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1516733745173-62e8f8651711?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFscGluaXNtfGVufDB8fDB8fHww",
  ];

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={() => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={() => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>

      <div className="right">
        <h1>Title</h1>
        <span>$223</span>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab eos quam,
          eveniet odit, laboriosam voluptatum deleniti error quos impedit,
          laudantium numquam quas vero aperiam magni illo porro quisquam quidem
          dicta?
        </p>
        <div className="quantity">
          <button onClick={handleDecrement}>
            <RemoveIcon />
          </button>
          {quantity}
          <button onClick={handleIncrement}>
            <AddIcon />
          </button>
        </div>
        <button className="add">
          <AddShoppingCartIcon /> ДОДАТИ В КОРЗИНУ
        </button>
        <div className="link">
          <div className="item">
            <FavoriteBorderIcon /> ДО ВПОДОБАНИХ
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
