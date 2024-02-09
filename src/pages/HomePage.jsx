import Hikecard from "../components/Hikecard";
import Navbar from "../components/navbar";
import './HomePage.css'
import AppOfTheYear from "../components/AppOfTheYear";
import AllHikes from "./AllHikes";


function HomePage () {
    console.log("Hello from the Homepage");
    return (
        <div>
<Navbar />
<img src="../src/images/mountain.jpg" alt="big-mountain-pic" className="big-mountain-pic"/>
{/* <img src="/images/menu-white.avif" alt="big-image-of-mountain"></img> */}
<AllHikes />
<Hikecard />
<AppOfTheYear />
</div>
    )
}

export default HomePage;