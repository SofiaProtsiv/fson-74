import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  margin: 30px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
`;
export const Label = styled.label`
  display: block;
  color: #111827;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  line-height: 1.5rem;
`;
export const Input = styled.input`
  display: block;
  padding: 0.5rem 1rem;
  color: #111827;
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid #d1d5db;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`;
export const Select = styled.select`
  display: block;
  padding: 0.75rem 1rem;
  color: #111827;
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid #d1d5db;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`;
export const Button = styled.button`
  display: flex;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  background-color: #4f46e5;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  line-height: 1.5rem;
  justify-content: center;
  width: 100%;
  border-radius: 0.375rem;
  cursor: pointer;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  :hover {
    background-color: #6366f1;
  }
`;
export const RadioWrapper = styled.div``;

export const RadioContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  padding: 0.75rem;
  background-color: white;
  border-radius: 0.375rem;
  border: 1px solid #d1d5db;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`;

export const RadioInput = styled.input`
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
  color: #3182ce;
  background-color: #edf2f7;
  border-color: #cbd5e0;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
  color: #2d3748;
`;
export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  color: #111827;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  line-height: 1.5rem;
`;
export const CheckboxInput = styled.input`
  width: 1rem;
  height: 1rem;
  margin-left: 0.5rem;
  color: #3182ce;
  background-color: #edf2f7;
  border-color: #cbd5e0;
  border-radius: 0.25rem;
`;
