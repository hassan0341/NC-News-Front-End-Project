import { Link } from "react-router-dom";
import "../CSS/Header.css";

function Header({ user }) {
  return (
    <header>
      <h1 className="header">
        Welcome to my Front End Project {user.username}!
      </h1>
      <p>Many awesome articles to read!</p>
      <Link to="/">
        <button className="home-button">
          <p className="home-text">Home</p>
        </button>
      </Link>
      <Link to="/topics">
        <button className="topics-button">
          <p className="topics-text">Topics</p>
        </button>
      </Link>
    </header>
  );
}

export default Header;
