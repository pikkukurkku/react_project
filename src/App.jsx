// App.jsx

import Navbar from "./components/navbar";
import HomePage from "./pages/HomePage";
import AllHikes from "./pages/AllHikes";
import HikeDeets from "./pages/HikeDeets";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import "./App.css";

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
