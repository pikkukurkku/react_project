import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src="./HikeLove.webp" alt="hiking-logo" className="logo" />
      </Link>
      <div className="right">
        <p className="help">Help</p>
        <p>Log In</p>
      </div>
    </nav>
  );
}

export default Navbar;
