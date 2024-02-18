import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Map from "../components/Map";
import Carousel from "../components/Carousel";
import "./HikeDeets.css";
import Reviews from "../components/Reviews";
import Spinner from "../components/Spinner";
import axios from "axios";
import AccuWeather from "../components/AccuWeather";

function HikeDeets() {
  const [hike, setHike] = useState({});
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [locationKey, setLocationKey] = useState(null);
  const { hikeId } = useParams();
  const BE_URL = "https://json-server.adaptable.app/hikes";

  const getOneHike = () => {
    axios
      .get(`${BE_URL}/${hikeId}?_embed=images&_embed=reviews`)
      .then((response) => {
        console.log(response.data);
        setLoading(false);
        setHike(response.data);
        setReviews(response.data.reviews || []);
        setLocationKey(response.data.locationKey);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    console.log("useEffect");
    getOneHike();
  }, [hikeId]);

  if (loading) return <Spinner />;


  return (
    <div className="main">
      <h1>{hike.nameOfHike}</h1>
      {hike.images && hike.images.length > 0 && <Carousel />}
      <div className="HikeCard">
        {hike && (
          <div className="container">
            <div className="text">
              <p className="range">
                <b>Mountain range: </b>
                {hike.mountainRange}
              </p>
              <p>
                <b>Country:</b> {hike.country}
              </p>
              <p className="startPoint">
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
      <div>
        {hike.locationKey && <AccuWeather locationKey={hike.locationKey} />}
      </div>
      <div className="userReviews">
        <h2>Reviews</h2>
        <br />
        <Reviews reviews={reviews} />
        <Link to={`/hikes/${hikeId}/new-review`}>
          <button className="addReview">Add your review</button>
        </Link>
      </div>

      <Link to="/hikes">
        <button className="btn">Back</button>
      </Link>
    </div>
  );
}

export default HikeDeets;
