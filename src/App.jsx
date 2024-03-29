// App.jsx

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AllHikes from "./pages/AllHikes";
import HikeDeets from "./pages/HikeDeets";
import Footer from "./components/Footer";
import NewReview from "./pages/NewReview";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import EditReviewForm from "./components/EditReviewForm";
import Aboutme from "./pages/Aboutme";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hikes" element={<AllHikes />} />
        <Route path="/hikes/:hikeId" element={<HikeDeets />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/hikes/:hikeId/new-review" element={<NewReview />} />
        <Route
          path="/hikes/:hikeId/reviews/:reviewId/edit"
          element={<EditReviewForm />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
