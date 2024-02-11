import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Map from "../components/map";
import Carousel from "../components/Carousel";
import "./HikeDeets.css";

// import Reviews from "./reviews"
import axios from "axios";

function HikeDeets() {
  const [hike, setHike] = useState({});
  const navigate = useNavigate();
  const { hikeId } = useParams();

  const BE_URL = "https://json-server.adaptable.app/hikes";

  const getOneHike = () => {
    axios
      .get(`${BE_URL}/${hikeId}`)
      .then((response) => setHike(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getOneHike();
  }, [hikeId]);

  return (
    <div className="main">
      <h2>{hike.nameOfHike}</h2>
      <Carousel />
      <img src="/public/images/mountain.jpg" alt="big-image-of-mountain" />
      <div className="HikeCard">
        {hike && (
          <div className="text">
            <p>Mountain range: {hike.mountainRange}</p>
            <p>County: {hike.country}</p>
            <p>Start point: {hike.hikeStartPoint}</p>
            <p>Time: {hike.time} h</p>
            <p>Distance: {hike.distance} km</p>
            <p>Elevation: {hike.elevation} m asl</p>
            <p>Uphill: {hike.uphill}</p>
            <p>Downhill: {hike.downhill}</p>
            <p>Description:{hike.description}</p>
          </div>
        )}

        <div className="map-container" style={{ height: "400px" }}>
          {hike.latitude && hike.longitude && (
            <Map
              className="map"
              latitude={hike.latitude}
              longitude={hike.longitude}
            />
          )}
        </div>
        <div>
          <h3>Reviews</h3>
        </div>
      </div>
      <Link to="/hikes">
        <button className="btn btn-primary">Back</button>
      </Link>
    </div>
  );
}

export default HikeDeets;
