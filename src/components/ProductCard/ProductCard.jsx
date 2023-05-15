import React from "react";
import PropTypes from "prop-types";

export default function ProductCard({ id, price, title, thumbnail, brand }) {
  return (
    <div className="group relative" id={id}>
      <div className="h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={thumbnail}
          alt={title}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href="#">
              <span aria-hidden="true" className="absolute inset-0"></span>
              {title}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{brand}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${price}</p>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.string,
  price: PropTypes.number,
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  brand: PropTypes.string,
};
