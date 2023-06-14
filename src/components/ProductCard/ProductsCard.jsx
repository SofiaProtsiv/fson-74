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

export default function ProductCard({ id, images, title, price }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const base_url = window.location.origin;
  const location = useLocation();

  const { products, cart, favorites, setCart, setFavorites } =
    useStateContext();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [cart, favorites]);

  const isProductInCart = cart.find((product) => product.id === id);
  const isProductInFavorites = favorites.find((product) => product.id === id);

  const addToCart = (productId) => {
    if (!isProductInCart) {
      const product = products.find((product) => product.id === productId);
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  const toggleFavorite = (productId) => {
    if (!isProductInFavorites) {
      const product = products.find((product) => product.id === productId);
      setFavorites((prevFavorites) => [...prevFavorites, product]);
    } else {
      const updatedFavorites = favorites.filter(
        (product) => product.id !== productId
      );
      setFavorites(updatedFavorites);
    }

    setIsFavorite(!isFavorite);
  };

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
            onClick={() => addToCart(id)}
          >
            {isProductInCart ? "In Cart" : "Add to Cart"}
          </Button>
        </Wrapper>
      </ContentWrapper>
      <Icon
        isProductInFavorites={isProductInFavorites}
        onClick={() => toggleFavorite(id)}
      >
        <AiFillHeart />
      </Icon>
    </ProductItem>
  );
}
