import "./HomePage.css";
import AppOfTheYear from "../components/AppOfTheYear";
import { Link } from "react-router-dom";
import AppDemo from "../components/AppDemo";
import RandomHikes from "../components/RandomHikes";

function HomePage() {
  console.log("Hello from the Homepage");
  return (
    <div>

      <div className="homePage">
        <img
          src="../images/mountain.jpg"
          alt="big-mountain-pic"
          className="big-mountain-pic"
        />
        <RandomHikes />
        <Link to="/hikes" className="Linktohikes">
          <p className="links">See all hikes...</p>
        </Link>
      </div>
      {/* <img src="/images/menu-white.avif" alt="big-image-of-mountain"></img> */}
      {/* <AllHikes /> */}
      <AppDemo />
      <AppOfTheYear/>
    </div>
  );
}

export default HomePage;
