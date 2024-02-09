
import Map from "./map"
import Hikecard from "./Hikecard"
import AccuWeather from "./AccuWeather"
import Reviews from "./reviews"

function HikeDeets () {
    return (
        <div>
        <img src="./src/images/" alt="big-image-of-mountain"></img>
        <Hikecard />
        <AccuWeather />
        <img src="./src/images/" alt="big-image-of-mountain"></img>
        <Reviews />
        </div>
    )
}

export default HikeDeets;