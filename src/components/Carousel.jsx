import { useState, useEffect } from "react";
import "./Carousel.css";

function Carousel() {
  const data = ["1", "2", "3", "4"];
  data[0] = (
    <img className="firstPic" src="https://i.ibb.co/bg2rpTf/5736-ED3-C-47-D9-474-D-B4-C4-E3-CFE1927941.jpg" />
  );
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
            style={{ transform: `translate(-${currentIndex * 100}%)`, width: "100%" }}
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

// import { useState, useEffect } from "react";
// import "./Carousel.css";

// function Carousel() {
//   const [data, setData] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const carouselInfiniteScroll = () => {
//     if (currentIndex === data.length - 1) {
//       return setCurrentIndex(0);
//     }
//     return setCurrentIndex(currentIndex + 1);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("your_mock_backend_url");
//         const jsonData = await response.json();
//         setData(jsonData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();

//     const interval = setInterval(() => {
//       carouselInfiniteScroll();
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   return (
//     <div className="carousel-container">
//       {data.map((imageUrl, index) => (
//         <img
//           src={imageUrl}
//           alt={`Carousel Item ${index + 1}`}
//           className="carousel-item"
//           style={{ transform: `translate(-${currentIndex * 100}%)` }}
//           key={index}
//         />
//       ))}
//     </div>
//   );
// }

// export default Carousel;
