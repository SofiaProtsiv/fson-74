import { Alert } from "./errorMessage.styled";

export default  function ErrorMessage() {
    return (
      <Alert role="alert">
        <h2>Oops! 😫</h2>
        <p>
          Sorry, no images were found or something went wrong. Please try again,
          or <a href="/">refresh the page</a>.
        </p>
      </Alert>
    );
  }
  