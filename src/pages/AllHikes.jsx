import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./AllHikes.css"
import Spinner from "../components/Spinner"

const BE_URL = "https://json-server.adaptable.app/hikes";


function AllHikes() {
  const [hikes, setHikes] = useState([]);
  const [loading, setLoading] = useState(true);

  function getAllHikes() {
    axios
    .get(`${BE_URL}/?_embed=images`)
      .then((response) => {
        setHikes(response.data);
        setLoading(false); 
      })
      .catch((error) => {
        console.log(error);
        setLoading(false); 
      });
  }

  useEffect(() => {
    getAllHikes();
  }, []);

  if (loading) return <Spinner />;

  return (
    <>
    <div className="all-hikes">
     
      {hikes &&
        hikes.map((hike, i) => {
          return (
            <div key={i}>
            <Link to={`/hikes/${hike.id}`} className="link">
            <div className="oneHike">
            {hike.images && hike.images.length > 0 && (
                      <img src={hike.images[0].src} alt={hike.nameOfHike} />
                    )}
              <p className="name">{hike.nameOfHike}</p>
              <p>Mountain range: {hike.mountainRange}</p>
              <p>County: {hike.country}</p>
              <p>Elevation: {hike.elevation}</p>
              </div>
              </Link>
            </div>
          );
        })}
    </div>
    </>
  );
}

export default AllHikes;
