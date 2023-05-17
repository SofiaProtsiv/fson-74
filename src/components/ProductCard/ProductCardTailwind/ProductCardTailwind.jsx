import React from "react";
import PropTypes from "prop-types";

export default function ProductCardTailwind({
  id,
  price,
  title,
  thumbnail,
  stock,
}) {
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
          <h3 className="text-sm text-gray-700">{title}</h3>
          <p
            className={`mt-1 text-sm ${
              stock > 40 ? "text-green-500" : "text-red-500"
            }`}
          >
            {stock > 40 ? "In stock" : " Low on stock"}
          </p>
        </div>
        <p className="text-sm font-medium text-gray-900">${price}</p>
      </div>
    </div>
  );
}

ProductCardTailwind.propTypes = {
  id: PropTypes.number,
  price: PropTypes.number,
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  stock :PropTypes.number,
};
