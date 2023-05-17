import React from 'react';
import PropTypes from "prop-types";

// import ProductCard from '../ProductCard/ProductCardInline'👎🏼
// import ProductCard from '../ProductCard/ProductCardCss'; 👎🏼
// import ProductCard from '../ProductCard/ProductCardModule'; 👍🏼
// import ProductCard from '../ProductCard/ProductCardJss'; 👍🏼👎🏼
// import ProductCard from '../ProductCard/ProductCardTailwind'; 👍🏼👎🏼
import ProductCard from '../ProductCard/ProductCardStyledComponents'; //👍🏼

export default function ProductList({data}) {
    return (
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {data.map(({ id, price, title, thumbnail, stock }) => {
          return (
            <ProductCard
              key={id}
              id={id}
              price={price}
              title={title}
              thumbnail={thumbnail}
              stock={stock}
            />
          );
        })}
      </div>
    )
}

ProductList.propTypes = {
data: PropTypes.array
}