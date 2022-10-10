import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = ({ product, handleAddToCart }) => {
  const { name, img, seller, price, ratings } = product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Price : ${price}</p>
        <p>Seller : {seller}</p>
        <p>Ratings : {ratings} Star</p>
      </div>
      <button onClick={() => handleAddToCart(product)} className="btn-cart">
        <p className="btn-text">Add To Cart</p>
        <FontAwesomeIcon icon={faCartPlus} />
      </button>
    </div>
  );
};

export default Product;
