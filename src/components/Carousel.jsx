import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Carousel.css";

function Carousel() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { hikeId } = useParams();

  
  const BE_URL = "https://json-server.adaptable.app/hikes";

  const fetchImages = () => {
    axios
      .get(`${BE_URL}/${hikeId}?_embed=images`)
      .then((response) => {
        setImages(response.data.images.map((img) => img.src));
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchImages();
  }, [hikeId]);


  const carouselInfiniteScroll = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      carouselInfiniteScroll();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, images]);

  if (images.length === 0) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="carousel-container">
      {images.map((url, index) => {
        return (
          <div
            className="carousel-item"
            style={{ transform: `translate(-${currentIndex * 100}%)` }}
            key={index}
          >
            <img className="carousel-image" src={url} alt="pic" />
          </div>
        );
      })}
    </div>
  );
}

export default Carousel;
