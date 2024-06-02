import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>
          <StarBorderIcon />
          {type}
        </h1>
        <p>Багато покупців надають перевагу цим товарам</p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
