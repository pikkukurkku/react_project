// App.jsx

import "./App.css";

import Footer from "/src/components/Footer";
import Navbar from "/src/components/navbar";
import AllHikes from "/src/pages/AllHikes";
import HikeDeets from "/src/pages/HikeDeets";
import HomePage from "/src/pages/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hikes" element={<AllHikes />} />
        <Route path="/hikes/:hikeId" element={<HikeDeets />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
