// App.jsx

import "./App.css";

import Footer from "./components/Footer";
import Navbar from "./components/navbar";
import AllHikes from "./pages/AllHikes";
import HikeDeets from "./pages/HikeDeets";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
       
        <Route path="/hikes" element={<AllHikes />} />
        <Route path="/hikes/:hikeId" element={<HikeDeets />} />
        <Route path="/" element={<HomePage />} />
        
       
      </Routes>
      <Footer />
    </>
  );
}

export default App;
