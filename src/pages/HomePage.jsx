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
          src=".../public/mountain.jpg"
          alt="big-mountain-pic"
          className="big-mountain-pic"
        />
          <Link to="/hikes" className="Linktohikes">
          <p className="links">See all hikes...</p>
        </Link>
        <RandomHikes />
      
      </div>
      <AppDemo />
      <AppOfTheYear/>
    </div>
  );
}

export default HomePage;
