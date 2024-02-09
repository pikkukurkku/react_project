import Navbar from "./navbar"
import Map from "./map"
import Hikecard from "./Hikecard"
import AccuWeather from "./AccuWeather"
import Reviews from "./reviews"
import Footer from "./footer"

function HikeDeets () {
    return (
        <div>
        <Navbar />
        <img src="./src/images/" alt="big-image-of-mountain"></img>
        <Hikecard />
        <Map latitude={47.4211} longitude={10.9854} />
        <AccuWeather />
        <img src="./src/images/" alt="big-image-of-mountain"></img>
        <Reviews />
        <Footer />
        </div>
    )
}

export default HikeDeets;