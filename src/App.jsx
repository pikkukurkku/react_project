// App.jsx

import "./App.css";
import Hikecard from "./components/Hikecard";
import Footer from "./components/Footer";
import Navbar from "./components/navbar";
import AllHikes from "./pages/AllHikes";
// import HikeDeets from "./pages/HikeDeets";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
     
        <Route path="/hikecard" element={<Hikecard />} />
        <Route path="/hikes" element={<AllHikes />} />
       
      </Routes>
      <Footer />
    </>
  );
}

export default App;
