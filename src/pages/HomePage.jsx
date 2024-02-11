
import "./HomePage.css";
import AppOfTheYear from "../components/AppOfTheYear";
import { Link } from "react-router-dom";
// import AllHikes from "./AllHikes";

function HomePage() {
  console.log("Hello from the Homepage");
  return (
    <div>
      <img
        src="../public/images/mountain.jpg"
        alt="big-mountain-pic"
        className="big-mountain-pic" />
        <Link to="/hikes">
        <p className="link">Browse hikes...</p>
        </Link>
      {/* <img src="/images/menu-white.avif" alt="big-image-of-mountain"></img> */}
      {/* <AllHikes /> */}
      <AppOfTheYear />
    </div>
  );
}

export default HomePage;
