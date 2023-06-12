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
  overflow: scroll;
  height: 530px;
`;
export const CartItem = styled.li`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
  border: 1px solid lightgray;
  border-radius: 10px;
`;
export const ProductName = styled.p`
  font-size: 50px;
`;
export const ProductImage = styled.img`
 width: fit-content;
 height: 50px;
`;
export const ProductPrice = styled.p`
  font-size: 20px;
`;
export const ProductPricePerItem = styled.p`
  font-size: 12px;
  color: #a9a9a9;
`;
export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
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
`;
export const Text = styled.p`
  color: white;
  font-size: 18px;
  font-weight: 700;
`;
export const CounterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
`;
export const ProductQuantity = styled.p`
  color: rgb(55 65 81);
  font-weight: 700;
  margin: 0 10px;
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


`;
export const RemoveButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  cursor: pointer;

  & svg {
    width: 20px;
    height: 25px;
  }
`;
export const Summary = styled.div`
  position: absolute;
  bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const MakeOrderButton = styled.button`
  width: 340px;
  background-color: #2b9200e3;
  border-radius: 8px;
  padding: 10px 20px;
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: 600;
  :hover {
    opacity: 0.85;
  }
`;
