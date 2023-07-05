import {
  useAddToCartMutation,
  useDeleteFromCartMutation,
  useGetCartQuery,
} from "../../redux/products/productsRTK";
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

export default function ProductCard({ uid, image, title, price }) {
  const { data: cart } = useGetCartQuery();
  const [addToCart, { isLoading: isAdding }] = useAddToCartMutation();
  const [deleteFromCart, { isLoading: isDeleting }] =
    useDeleteFromCartMutation();

  const isProductInCart = cart?.find((product) => product.uid === uid);

  const handleProduct = () => {
    if (isProductInCart) {
      deleteFromCart(isProductInCart.id);
    } else {
      addToCart({ uid, image, title, price });
    }
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
            disabled={isAdding || isDeleting}
            onClick={handleProduct}
          >
            {isProductInCart ? "Remove from cart" : "Add to Cart"}
          </Button>
        </Wrapper>
      </ContentWrapper>
      <Icon>
        <AiFillHeart />
      </Icon>
    </ProductItem>
  );
}
