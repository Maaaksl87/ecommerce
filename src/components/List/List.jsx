import React from "react";
import "./List.scss";
import Card from "../Card/Card";

const List = () => {
  const data = [
    {
      id: 1,
      img: "https://www.gorgany.com/amasty/webp/catalog/product/cache/2d670869fdac8adea45c2e7338c869dd/T/u/Turbat_Kotogora_Wmn_beige_1_24_5227_jpg.webp",
      title: "Зображення 1",
      oldPriсe: 19,
      price: 10,
    },
    {
      id: 2,
      img: "https://www.gorgany.com/catalog/product/cache/2d670869fdac8adea45c2e7338c869dd/T/u/Turbat_Escape_Mns_Ecru_Olive_1_23_ee40.jpg",
      title: "Зображення 2",
      oldPriсe: 21,
      price: 17,
    },
    {
      id: 3,
      img: "https://www.gorgany.com/catalog/product/cache/2d670869fdac8adea45c2e7338c869dd/p/i/picture_organic_object_jkt_2023_dark_blue_1_23_2ab5.jpg",
      title: "Зображення 3",
      oldPriсe: 20,
      price: 10,
    },
    {
      id: 4,
      img: "https://www.gorgany.com/catalog/product/cache/2d670869fdac8adea45c2e7338c869dd/T/u/Turbat_Fun_Camp___loudburst_grey_Khaki_2_23_832c.jpg",
      title: "Зображення 4",
      oldPriсe: 36,
      price: 18,
    },
  ];

  return (
    <div className="list">
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
