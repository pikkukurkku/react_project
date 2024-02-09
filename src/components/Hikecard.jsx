import Map from "./map";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import "./Hikecard.css";

function Hikecard() {
  const latitude = 47.4211;
  const longitude = 10.9854;

  const [hike, setHike] = useState([]);
  const navigate = useNavigate();
  const { hikeId } = useParams();
  const BE_URL = "https://json-server.adaptable.app/hikes";

  const getHikeDeets = () => {
    axios
      .get(`${BE_URL}/${hikeId}`)
      .then((response) => setHike(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getHikeDeets();
  }, [hikeId]);
  console.log(`${BE_URL}/${hikeId}`);

  return (
    <div className="HikeCard">
      {hike && (
        <>
          <h3>Name of hike: {hike.nameOfHike}</h3>
          <p>Mountain range: {hike.mountainRange}</p>
          <p>County: {hike.country}</p>
          <p>Start point: {hike.hikeStartPoint}</p>
          <p>Time: {hike.time} h</p>
          <p>Distance: {hike.distance} km</p>
          <p>Elevation: {hike.elevation} m asl</p>
          <p>Uphill: {hike.uphill}</p>
          <p>Downhill: {hike.downhill}</p>
          <p>Description:{hike.description}</p>

          <button
            className="btn btn-primary"
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </button>
          <Map latitude={latitude} longitude={longitude} className="map" />
        </>
      )}
    </div>
  );
}

export default Hikecard;

