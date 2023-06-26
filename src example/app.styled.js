import styled from "@emotion/styled";

export const Input = styled.input`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid gray;
  border-radius: 4px;
  padding: 12px 28px;
`;
export const ProductList = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;
  width: max-content;
`;

export const ProductItem = styled.li`
  align-items: center;
  width: fit-content;
  padding: 10px;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 10px;
`;

export const ProductImage = styled.p`
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 50px;
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
    props.action === "delete" ? "red" : "#4f46e5"};
  color: #ffffff;
  border: none;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  justify-content: center;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  cursor: pointer;
`;

export const Label = styled.label`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  gap: 10px;
`;

export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
