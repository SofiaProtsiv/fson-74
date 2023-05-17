import styled from "@emotion/styled";

export const ProductContainer = styled.div`
  position: relative;
  /* @media (min-width: 1190px) {
        width: 100px;
      } */
`;
export const ImageWrapper = styled.div`
  border-radius: 0.375rem;
  overflow: hidden;
  width: 100%;
  height: 20rem;
`;
export const ProductImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-width: 100%;
  display: block;
`;

export const InfoWrapper = styled.div`
  justify-content: space-between;
  display: flex;
  margin-top: 1rem;
`;

export const ProductName = styled.h3`
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin: 0;
  color: rgb(55 65 81);
`;

const Text = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin: 0;
`

export const ProductStock = styled(Text)`
  margin-top: 0.25rem;
  color: ${(props) => (props.stock > 40 ? "green" : "red")};
`;

export const ProductPrice = styled(Text)`
  color: rgb(55 65 81);
  font-weight: 500;
`;
