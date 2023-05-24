import styled from "@emotion/styled";

export const Label = styled.label`
  position: relative;
  display: block;
  color: #111827;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  line-height: 1.5rem;
`;
export const Input = styled.input`
  display: block;
  padding: 0.5rem 0.5rem 0.5rem 2.5rem;
  color: #111827;
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid #d1d5db;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  @media (min-width: 640px) {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 25%;
  left: 5%;
  & svg {
    width: 20px;
    height: 20px;
    fill: lightgray;
  }
`;
