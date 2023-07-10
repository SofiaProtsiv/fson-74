import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useAddToCartMutation,
  useGetCartQuery,
  useGetProductsQuery,
} from "../../redux/products";
import {
  ProductItem,
  ProductPrice,
  ProductName,
  Button,
  ContentWrapper,
  Wrapper,
  ProductImage,
  Icon,
} from "./productCard.styled";
import { AiFillHeart } from "react-icons/ai";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/favorites/slice";

export default function ProductCard({ uid, image, title, price }) {
  const dispatch = useDispatch();

  const { favorites } = useSelector((state) => state.favorites);

  const { data: cart } = useGetCartQuery();
  const { data: products } = useGetProductsQuery();
  const [addToCart, { isLoading: isAdding }] = useAddToCartMutation();

  const [isFavorite, setIsFavorite] = useState(false);
  
  const isProductInCart = cart?.find((product) => product.uid === uid);
  const isProductInFavorites = favorites.find((product) => product.uid === uid);

  const handleProduct = () => {
    addToCart({ uid, image, title, price, quantity: 1 });
  };

  const handleFavorite = () => {
    if (!isProductInFavorites) {
      const product = products.find((product) => product.uid === uid);
      dispatch(addToFavorites(product));
    } else {
      dispatch(removeFromFavorites(uid));
    }

    setIsFavorite(!isFavorite);
  };
  return (
    <ProductItem key={uid}>
      <ProductImage image={image}></ProductImage>
      <ContentWrapper>
        <ProductName>{title}</ProductName>
        <Wrapper>
          <ProductPrice>${price}</ProductPrice>
          <Button
            isProductInCart={isProductInCart}
            disabled={isAdding}
            onClick={handleProduct}
          >
            {isProductInCart ? "In Cart" : "Add to Cart"}
          </Button>
        </Wrapper>
      </ContentWrapper>
      <Icon
        isProductInFavorites={isProductInFavorites}
        onClick={handleFavorite}
      >
        <AiFillHeart />
      </Icon>
    </ProductItem>
  );
}
