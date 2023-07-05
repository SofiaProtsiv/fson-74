// import {
//   useAddToCartMutation,
//   useDeleteFromCartMutation,
//   useGetCartQuery,
// } from "../../redux/products/productsRTK";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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
import { addProductToCart, deleteProductFromCart, getCart } from "../../api";

export default function ProductCard({ uid, image, title, price }) {
  const queryClient = useQueryClient();

  const { data: cart } = useQuery({
    queryKey: ['cart'],
    queryFn: getCart,
  });

  const addToCart = useMutation((product) => addProductToCart(product), {
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"])
    },
  });
  const deleteFromCart = useMutation((productId) => deleteProductFromCart(productId), {
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
    },
  });

  const isProductInCart = cart?.find((product) => product.uid === uid);

  const handleProduct = () => {
    if (isProductInCart) {
      deleteFromCart.mutate(isProductInCart.id);
    } else {
      addToCart.mutate({ uid, image, title, price });
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
