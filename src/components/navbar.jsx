import "./Navbar.css";

function Navbar() {
  return (
    <nav>
    <div className="left">
      <img src="/public/images/menu_icon-icons.com_72311.png" alt="menu-icon" className="menu"></img>
      <img src="/public/images/HikeLove.webp" alt="hiking-logo" className="logo" />
      </div>
      <div className="right">
        <p className="help">Help</p>
        <p>Log In</p>
      </div>
    </nav>
  );
}

export default Navbar;
