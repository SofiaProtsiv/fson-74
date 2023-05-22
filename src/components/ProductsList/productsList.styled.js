import styled from "@emotion/styled";

export const Title = styled.h2`
  margin: 3rem 0 1rem 0;
  color: #111827;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  letter-spacing: -0.025em;
`;
export const ProductList = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;
export const ProductItem = styled.li`
  display: flex;
  gap: 20px;
  align-items: center;
  width: fit-content;
  padding: 10px;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 10px;
`;
export const ProductName = styled.p`
  font-size: 20px;
`;
export const ProductImage = styled.p`
font-size: 50px;
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
  background-color: #4f46e5;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  justify-content: center;
  width: 100%;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  :hover {
    background-color: #6366f1;
  }
`;