import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export default function ProductCardCss({ id, price, title, thumbnail, stock }) {
  return (
    <div className="productCardCss__container" id={id}>
      <div className="productCardCss__img-wrapper">
        <img src={thumbnail} alt={title} className="productCardCss__img" />
      </div>
      <div className="productCardCss__info-wrapper">
        <div>
          <h3 className="productCardCss__title">{title}</h3>
          <p
            className={
              // `productCardCss__stock ${stock > 40 ? "green" : "red"}`
              stock > 40
                ? `productCardCss__stock green`
                : `productCardCss__stock red`
            }
          >
            {stock > 40 ? "In stock" : "Low on stock"}
          </p>
        </div>
        <p className="productCardCss__price">${price}</p>
      </div>
    </div>
  );
}

ProductCardCss.propTypes = {
  id: PropTypes.number,
  price: PropTypes.number,
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  stock: PropTypes.number,
};
