import { useEffect, useState } from "react";
import { useStateContext } from "../../context/StateContext";
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
import { NavLink, useLocation } from "react-router-dom";
import { addToCart } from "../../redux/cart/actions";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/favorites/actions";

export default function ProductCard({ id, images, title, price }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const base_url = window.location.origin;
  const location = useLocation();

  const { products } = useStateContext();

  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const {  favorites } = useSelector((state) => state.favorites);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [cart, favorites]);

  const isProductInCart = cart.find((product) => product.id === id);
  const isProductInFavorites = favorites.find((product) => product.id === id);

  const handleAddToCart = (productId) => {
    if (!isProductInCart) {
      const product = products.find((product) => product.id === productId);
      dispatch(addToCart(product));
    }
  };

  const handleToggleFavorite = (productId) => {
    if (!isProductInFavorites) {
      const product = products.find((product) => product.id === id);
      dispatch(addToFavorites(product));
    } else {
      dispatch(removeFromFavorites(productId));
    }

    setIsFavorite(!isFavorite);
  };
  // const toggleFavorite = (productId) => {
  //   if (!isProductInFavorites) {
  //     const product = products.find((product) => product.id === productId);
  //     setFavorites((prevFavorites) => [...prevFavorites, product]);
  //   } else {
  //     const updatedFavorites = favorites.filter(
  //       (product) => product.id !== productId
  //     );
  //     setFavorites(updatedFavorites);
  //   }

  //   setIsFavorite(!isFavorite);
  // };

  return (
    <ProductItem key={id}>
      <ProductImage image={images[0]}></ProductImage>
      <ContentWrapper>
        <NavLink to={`${base_url}/product/${id}`} state={{ from: location }}>
          <ProductName>{title}</ProductName>
        </NavLink>
        <Wrapper>
          <ProductPrice>${price}</ProductPrice>
          <Button
            isProductInCart={isProductInCart}
            onClick={() => handleAddToCart(id)}
          >
            {isProductInCart ? "In Cart" : "Add to Cart"}
          </Button>
        </Wrapper>
      </ContentWrapper>
      <Icon
        isProductInFavorites={isProductInFavorites}
        onClick={() => handleToggleFavorite(id)}
      >
        <AiFillHeart />
      </Icon>
    </ProductItem>
  );
}
