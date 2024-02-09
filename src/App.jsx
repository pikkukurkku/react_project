// App.jsx

import "./App.css";
import Hikecard from "./components/Hikecard";
import AllHikes from "./pages/AllHikes";
// import HikeDeets from "./pages/HikeDeets";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/hike" element={<HikeDeets />} /> */}
        <Route path="/hikecard" element={<Hikecard />} />
        <Route path="/hikes" element={<AllHikes />} />
      </Routes>
    </>
  );
}

export default App;
