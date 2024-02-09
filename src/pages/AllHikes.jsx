
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
            <div className="hike" key={i}>
              <p>{hike.nameOfHike}</p>
              <p>{hike.mountainRange}</p>
              <p>{hike.country}</p>
              <p>{hike.hikeStartPoint}</p>
              <p>{hike.time}</p>
              <p>{hike.distance}</p>
              <p>{hike.elevation}</p>
              <p>{hike.uphill}</p>
              <p>{hike.downhill}</p>
              <p>{hike.description}</p>
            </div>
          );
        })}
    </div>
    </>
  );
}

export default AllHikes;
