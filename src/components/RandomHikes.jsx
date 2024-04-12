import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./RandomHikes.css";

const BE_URL = "https://json-server.adaptable.app/hikes";

function RandomHikes() {
  const [randomHikes, setRandomHikes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRandomHikes = () => {
      axios
        .get(`${BE_URL}/?_embed=images`)
        .then((response) => {
          const shuffledHikes = response.data.sort(() => 0.5 - Math.random());
          const selectedHikes = shuffledHikes.slice(0, 3);
          setRandomHikes(selectedHikes);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    };

    getRandomHikes();
  }, []);

  if (loading) return <p>Loading random hikes...</p>;

  return (
    <div className="all-hikes">
      {randomHikes.map((hike, index) => (
        <div key={index}>
          <Link to={`/hikes/${hike.id}`} className="link">
            <div className="oneHike">
              {hike.images && hike.images.length > 0 && (
                <img
                  src={hike.images[0].src}
                  alt={hike.nameOfHike}
                  className="hike-image"
                />
              )}
              <p className="name">{hike.nameOfHike}</p>
              <p className="range">Mountain range: {hike.mountainRange}</p>
              <p>County: {hike.country}</p>
              <p>Elevation: {hike.elevation}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default RandomHikes;
