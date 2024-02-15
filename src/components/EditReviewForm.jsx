import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import './EditReviewForm.css'


function EditReviewForm(props) {
  const [reviewer, setReviewer] = useState("");
  const [stars, setStars] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [postedOn, setPostedOn] = useState("");
  const [hike, setHike] = useState({});
  const { hikeId, reviewId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {

    axios
      .get(`https://json-server.adaptable.app/hikes/${hikeId}`)
      .then((response) => {
        setHike(response.data);
      })
      .catch((error) => console.error("Error fetching hike data:", error));

    axios
      .get(`https://json-server.adaptable.app/reviews/${reviewId}`)
      .then((response) => {
        const reviewData = response.data;
        console.log("Review Data:", reviewData);
        setReviewer(reviewData.reviewer);
        setStars(reviewData.stars);
        setReviewText(reviewData.reviewText);
        setPostedOn(reviewData.postedOn);
      })
      .catch((error) => console.error("Error fetching review data:", error));
  }, [hikeId, reviewId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleEditReview = async (event) => {
    event.preventDefault();
    const requestBody = {
    hikeId: Number(hikeId),
      reviewer,
      stars,
      reviewText,
      postedOn,
    };

    try {
      await axios.put(`https://json-server.adaptable.app/reviews/${reviewId}`, requestBody);
      navigate(`/hikes/${hikeId}`);
    } catch (error) {
      console.error("Error updating review:", error);
    }
};

const handlePostedOn = (e) => {
  setPostedOn(e.target.value);
};

useEffect(() => {
  window.scrollTo(0, 0);
}, []);
 

  return (
      <div className="d-inline-flex flex-column w-100 p-4">
      <h1>
          Edit your review of: {hike.nameOfHike}
        </h1>
        <form className="form" onSubmit={handleEditReview}>
          <label>Name</label>
          <input
            className="form-control mb-4"
            type="text"
            name="name"
            placeholder="Your Name"
            value={reviewer}
            onChange={(e) => setReviewer(e.target.value)}
          />
          <label>Stars</label>
          <input
            className="form-control mb-4"
            type="number"
            placeholder="Stars"
            value={stars}
            onChange={(e) => setStars(e.target.value)}
          />

          <label className="form-label">Description</label>
          <textarea
            className="form-control mb-4"
            type="text"
            name="description"
            placeholder="Description"
            rows="3"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          ></textarea>

          <label>Posted on</label>
          <input
            className="form-control mb-4"
            type="date"
            value={postedOn}
            onChange={handlePostedOn}
          />

          <button className="btn btn-primary btn-round">Update</button>
        </form>
       
      </div>
  );
}

export default EditReviewForm;
