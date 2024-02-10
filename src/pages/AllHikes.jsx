import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./AllHikes.css"

const BE_URL = "https://json-server.adaptable.app/hikes";


function AllHikes() {
  const [hikes, setHikes] = useState([]);


  function getAllHikes() {
    axios
      .get(BE_URL)
      .then((response) => setHikes(response.data))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getAllHikes();
  }, []);

  return (
    <>
    <div className="all-hikes">
     
      {hikes &&
        hikes.map((hike, i) => {
          return (
            <div key={i}>
            <Link to={"/hikes/" +  hike.id} className="link">
            <div className="oneHike">
              <p className="name">{hike.nameOfHike}</p>
              <p>Mountain range: {hike.mountainRange}</p>
              <p>County: {hike.country}</p>
              {/* <p>{hike.hikeStartPoint}</p> */}
              {/* <p>{hike.time}</p>
              <p>{hike.distance}</p> */}
              <p>Elevation: {hike.elevation}</p>
              </div>
              {/* <p>{hike.uphill}</p>
              <p>{hike.downhill}</p>
              <p>{hike.description}</p> */}
              </Link>
            </div>
          );
        })}
    </div>
    </>
  );
}

export default AllHikes;
