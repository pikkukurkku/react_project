import { useState, useEffect } from "react";
import "./Carousel.css";

function Carousel() {
  const data = ["1", "2", "3", "4"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselInfiniteScroll = () => {
    if (currentIndex === data.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      carouselInfiniteScroll();
    }, 4000);
    return () => clearInterval(interval);
  });

  return (
    <div className="carousel-container">
      {data.map((item, index) => {
        return (
          <h1
            className="carousel-item"
            style={{ transform: `translate(-${currentIndex * 100}%)` }}
            key={index}
          >
            {item}
          </h1>
        );
      })}
    </div>
  );
}

export default Carousel;
