import React from "react";
import "./Cart.scss";

import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://www.gorgany.com/amasty/webp/catalog/product/cache/2d670869fdac8adea45c2e7338c869dd/T/u/Turbat_Kotogora_Wmn_beige_1_24_5227_jpg.webp",
      title: "Зображення 1",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente officia possimus nesciunt error nisi necessitatibus. Quidem deleniti culpa consectetur nihil.",
      oldPriсe: 19,
      price: 10,
    },
    {
      id: 2,
      img: "https://www.gorgany.com/catalog/product/cache/2d670869fdac8adea45c2e7338c869dd/T/u/Turbat_Escape_Mns_Ecru_Olive_1_23_ee40.jpg",
      title:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente officia possimus nesciunt error nisi necessitatibus. Quidem deleniti culpa consectetur nihil.",
      oldPriсe: 21,
      price: 17,
    },
  ];

  return (
    <div className="cart">
      <h1>В корзині</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price"> 1 x ${item.price}</div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>ЗАГАЛОМ</span>
        <span>$123</span>
      </div>
      <button>До оформлення замовлення</button>
      <span className="reset">Скинути</span>
    </div>
  );
};

export default Cart;
