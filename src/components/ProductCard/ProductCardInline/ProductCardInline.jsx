import React from "react";
import PropTypes from "prop-types";

const cl = {
  cardContainer: { position: "relative" },
  imgWrapper: {
    borderRadius: "0.375rem",
    overflow: "hidden",
    width: "100%",
    height: "20rem",
  },
  img: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    display: "block",
  },
  infoWrapper: {
    justifyContent: "space-between",
    display: "flex",
    marginTop: "1rem",
  },
  title: {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    margin: 0,
    color: "rgb(55 65 81)",
  },
  stock: {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    margin: 0,
    marginTop: "0.25rem",
  },
  price: {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    color: "rgb(55 65 81)",
    fontWeight: 500,
    margin: 0,
  },
};

export default function ProductCardInline({
  id,
  price,
  title,
  thumbnail,
  stock,
}) {

  return (
    <div style={cl.cardContainer} id={id}>
      <div style={cl.imgWrapper}>
        <img src={thumbnail} alt={title} style={cl.img} />
      </div>
      <div style={cl.infoWrapper}>
        <div>
          <h3 style={cl.title}>{title}</h3>
          <p
            style={
              stock > 40
                ? { ...cl.stock, color: "green" }
                : { ...cl.stock, color: "red" }
            }
          >
            {stock > 40 ? "In stock" : "Low on stock"}
          </p>
        </div>
        <p style={cl.price}>${price}</p>
      </div>
    </div>
  );
}

ProductCardInline.propTypes = {
  id: PropTypes.number,
  price: PropTypes.number,
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  stock: PropTypes.number,
};
