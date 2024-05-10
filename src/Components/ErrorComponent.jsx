import "../CSS/Error.css";

function ErrorComponent({ error }) {
  return <p className="error-message">{error}</p>;
}

export default ErrorComponent;
