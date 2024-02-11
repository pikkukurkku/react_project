
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "leaflet/dist/leaflet.css";
// import "./Hikecard.css";

// function Hikecard({ hikeId }) {
//   const navigate = useNavigate();
  
//   const BE_URL = "https://json-server.adaptable.app/hikes";

//   const [hikeDetails, setHikeDetails] = useState({});

//   useEffect(() => {
//     const getHikeDeets = () => {
//       axios
//       .get(`${BE_URL}/${hikeId}`)
//         .then((response) => setHikeDetails(response.data))
//         .catch((error) => console.log(error));
//     };

//   getHikeDeets();
//   }, [BE_URL, hikeId]);


//   const latitude = 47.4211;
//   const longitude = 10.9854;

//   return (
//     <div className="HikeCard">
//       {hikeDetails && (
//         <>
//           <h3>Name of hike: {hikeDetails.nameOfHike}</h3>
//           <p>Mountain range: {hikeDetails.mountainRange}</p>
//           <p>County: {hikeDetails.country}</p>
//           <p>Start point: {hikeDetails.hikeStartPoint}</p>
//           <p>Time: {hikeDetails.time} h</p>
//           <p>Distance: {hikeDetails.distance} km</p>
//           <p>Elevation: {hikeDetails.elevation} m asl</p>
//           <p>Uphill: {hikeDetails.uphill}</p>
//           <p>Downhill: {hikeDetails.downhill}</p>
//           <p>Description:{hikeDetails.description}</p>

//           <button
//             className="btn btn-primary"
//             onClick={() => {
//               navigate(-1);
//             }}
//           >
//             Back
//           </button>
        
//         </>
//       )}
//     </div>
//   );
// }

// export default Hikecard;

