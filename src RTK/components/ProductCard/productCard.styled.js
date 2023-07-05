import styled from "@emotion/styled";

export const ProductItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 300px;
  gap: 20px;
  padding: 25px 15px;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 10px;
`;
export const ProductName = styled.p`
  font-size: 14px;
  font-weight: 500;
`;
export const ProductImage = styled.div`
  width: 100%;
  height: 220px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: ${(props) => `url(${props.image})`};
`;
export const ProductPrice = styled.p`
  font-size: 20px;
  font-weight: 700;
`;
export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 10px;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Button = styled.button`
  display: flex;
  padding: 0.375rem 0.75rem;
  background-color: ${(props) =>
    props.isProductInCart ? "#069806" : "#4f46e5"};
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  justify-content: center;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  :hover {
    opacity: 0.85;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  & svg {
    width: 20px;
    height: 20px;
    fill: ${(props) => (props.isProductInFavorites ? "#4f46e5" : "none")};
    stroke: ${(props) => (props.isProductInFavorites ? "none" : "#4f46e5")};
    stroke-width: ${(props) => (props.isProductInFavorites ? "0" : "100px")};
    pointer-events: none;
  }
`;
