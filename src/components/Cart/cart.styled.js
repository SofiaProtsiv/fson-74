import styled from "@emotion/styled";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;
export const Modal = styled.div`
  position: fixed;
  background: white;
  width: 400px;
  height: 100vh;
  padding: 30px;
  top: 0;
  right: 0;
`;
export const ModalContent = styled.div``;
export const CloseButton = styled.button`
  position: absolute;
  right: 30px;
  top: 30px;
`;

export const Title = styled.h2`
  margin: 3rem 0 1rem 0;
  color: #111827;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  letter-spacing: -0.025em;
`;

export const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const CartItem = styled.li`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  border: 1px solid lightgray;
  border-radius: 10px;
`;
export const ProductName = styled.p`
  font-size: 50px;
`;
export const ProductPrice = styled.p`
  font-size: 20px;
`;
export const ProductQuantity = styled.p`
  font-size: 20px;
`;
export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
export const TotalPrice = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  color: white;
  font-size: 18px;
  font-weight: 700;
`;
export const TotalPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 340px;
  background-color: #4f46e5;
  border-radius: 8px;
  padding: 10px 20px;
  position: absolute;
  bottom: 30px;
`;
export const Text = styled.p`
  color: white;
  font-size: 18px;
  font-weight: 700;
`