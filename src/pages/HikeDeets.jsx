import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Map from "../components/map";
import Carousel from "../components/Carousel";
import "./HikeDeets.css";
import Reviews from "../components/Reviews"

// import Reviews from "./reviews"
import axios from "axios";

function HikeDeets() {
  const [hike, setHike] = useState({});
  const navigate = useNavigate();
  const { hikeId } = useParams();

  const BE_URL = "https://json-server.adaptable.app/hikes";

  const getOneHike = () => {
    axios
      .get(`${BE_URL}/${hikeId}?=embed=images`)
      .then((response) => setHike(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getOneHike();
  }, [hikeId]);

  return (
    
    <div className="main">
      <h1>{hike.nameOfHike}</h1>
      <Carousel />
      <div className="HikeCard">
        {hike && (
          <div className="container">
          <div className="text">
            <p>
              <b>Mountain range: </b>
              {hike.mountainRange}
            </p>
            <p>
              <b>County:</b> {hike.country}
            </p>
            <p>
              <b>Start point:</b> {hike.hikeStartPoint}
            </p>
            <div className="data">
              <p>
                <b>Time:</b> {hike.time} h
              </p>
              <p>
                <b>Distance:</b> {hike.distance} km
              </p>
              <p>
                <b>Elevation:</b> {hike.elevation} m asl
              </p>
              <p>
                <b>Uphill:</b> {hike.uphill}
              </p>
              <p>
                <b>Downhill:</b> {hike.downhill}
              </p>
            </div>
            <p className="description">
              <b>Description:</b>
              <br />
              <br /> {hike.description}
            </p>
          </div>
          </div>
        )}
        </div>
        

          <div className="map-container" style={{ height: "400px" }}>
            <p>
              <b>Location on map:</b>
            </p>
            {hike.latitude && hike.longitude && (
              <Map
                className="map"
                latitude={hike.latitude}
                longitude={hike.longitude}
              />
            )}
            
          </div>
          <div className="userReviews">
          <h2>Reviews</h2>
          <br />
          <Reviews />
          <Link to={`/hikes/${hikeId}/new-review`}>
          <button className="addReview">Add your review</button>
        </Link>
          
        </div>
 
      <Link to="/hikes">
        <button className="btn">Back</button>
      </Link>
      
      {hike.images && hike.images.length > 0 && (
        <div>
          <img src={hike.images[0].src} alt="Hike" />
          </div>)}
    </div>
    
  );
}

export default HikeDeets;
