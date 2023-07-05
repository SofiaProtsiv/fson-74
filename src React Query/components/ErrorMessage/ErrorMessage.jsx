import { Alert } from "./errorMessage.styled";

export default function ErrorMessage({ children }) {
  return (
    <Alert role="alert">
      <h2>Oops! 😫</h2>
      <p>{children}</p>
    </Alert>
  );
}
