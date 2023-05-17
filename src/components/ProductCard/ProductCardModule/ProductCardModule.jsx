import React from "react";
import PropTypes from "prop-types";
import cl from "./productCardModule.module.css";

export default function ProductCardModule({
  id,
  price,
  title,
  thumbnail,
  stock,
}) {
  return (
    <div className={cl.cardContainer} id={id}>
      <div className={cl.imgWrapper}>
        <img src={thumbnail} alt={title} className={cl.img} />
      </div>
      <div className={cl.infoWrapper}>
        <div>
          <h3 className={cl.title}>{title}</h3>
          <p
            className={
              stock > 40 ? `${cl.stock} ${cl.green}` : `${cl.stock} ${cl.red}`
            }
          >
            {stock > 40 ? "In stock" : " Low on stock"}
          </p>
        </div>
        <p className={cl.price}>${price}</p>
      </div>
    </div>
  );
}

ProductCardModule.propTypes = {
  id: PropTypes.number,
  price: PropTypes.number,
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  stock: PropTypes.number,
};
