import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  cardContainer: {
    position: "relative",
    "&:hover": {
      opacity: 0.75,
      cursor: "pointer",
    },
  },
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
    color: (props) => (props.stock > 40 ? "green" : "red"),
  },
  price: {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    color: "rgb(55 65 81)",
    fontWeight: 500,
    margin: 0,
  },
});

export default function ProductCardJss({ id, price, title, thumbnail, stock }) {
  const cl = useStyles({ stock });

  return (
    <div className={cl.cardContainer} id={id}>
      <div className={cl.imgWrapper}>
        <img src={thumbnail} alt={title} className={cl.img} />
      </div>
      <div className={cl.infoWrapper}>
        <div>
          <h3 className={cl.title}>{title}</h3>
          <p className={cl.stock}>
            {stock > 40 ? "In stock" : " Low on stock"}
          </p>
        </div>
        <p className={cl.price}>${price}</p>
      </div>
    </div>
  );
}

ProductCardJss.propTypes = {
  id: PropTypes.number,
  price: PropTypes.number,
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  stock: PropTypes.number,
};
