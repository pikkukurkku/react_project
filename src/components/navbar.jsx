import "./Navbar.css";

function Navbar() {
  return (
    <nav>
    <div className="left">
      <img src="./src/images/" alt="menu-icon"></img>
      <img src="./src/images/HikeLove.webp" alt="hiking-logo" className="logo" />
      </div>
      <div className="right">
        <p>Help</p>
        <p>Log In</p>
      </div>
    </nav>
  );
}

export default Navbar;
