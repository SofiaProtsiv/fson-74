import styled from "@emotion/styled";

export const ProductDetailsWrapper = styled.div`
width: 100%;
gap: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const ProductImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10;
  align-self: flex-start;
`;

export const ProductPrice = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ProductsDetailsBtn = styled.div`
  font-weight: bold;
  align-self: flex-start;
  font-size: 20px;
  margin-bottom: 20px;
  color: #4f46e5;
`;
export const ProductTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;
