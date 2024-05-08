import { Link } from "react-router-dom";
import "../CSS/Header.css";
function Header() {
  return (
    <header>
      <h1 className="header">Welcome to my Front End Project!</h1>
      <p>Many awesome articles to read!</p>
      <Link to="/">
        <button className="home-button">
          <p className="home-text">Home</p>
        </button>
      </Link>
    </header>
  );
}

export default Header;