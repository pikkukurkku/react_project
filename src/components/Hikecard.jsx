import Map from "./map";
import { useState } from "react";
import "leaflet/dist/leaflet.css";
import "./Hikecard.css";

function Hikecard() {
  const latitude = 47.4211;
  const longitude = 10.9854;
  return (
    <div className="HikeCard">
      <section className="text">
        <p>Name of Hike:</p>
        <p>Mountain range:</p>
        <p>Country:</p>
        <p>Time:</p>
        <p>Distance:</p>
        <p>Uphill:</p>
        <p>Downhill:</p>
        <p>Description:</p>
      </section>
      <Map latitude={latitude} longitude={longitude} className="map" />
    </div>
  );
}

export default Hikecard;
