import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Hikecard from "../components/Hikecard";
// import Reviews from "./reviews"
import axios from "axios";

function HikeDeets() {
  const [hike, setHike] = useState([]);
  // const navigate = useNavigate();
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

  console.log(`${BE_URL}/${hikeId}`);

  return (
    <div>
      <h2>Hike details</h2>
      <img src="../src/images/mountain.jpg" alt="big-image-of-mountain" />
      <Hikecard hike={hike} />
      {/* <Reviews /> */}
    </div>
  );
}

export default HikeDeets;
