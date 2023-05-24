import styled from "@emotion/styled";

export const ProductList = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
export const ProductItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 250px;
  gap: 20px;
  align-items: center;
  padding: 25px 15px;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 10px;
`;
export const ProductName = styled.p`
  font-size: 20px;
`;
export const ProductImage = styled.p`
  font-size: 90px;
  line-height: 0;
`;
export const ProductPrice = styled.p`
  font-size: 20px;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 10px;
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
  width: 100%;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  :hover {
    opacity: 0.85;
  }
`;
