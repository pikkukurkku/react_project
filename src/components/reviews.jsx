import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import './reviews.css'

function Reviews({ reviews: reviewsProp }) {
  const [reviews, setReviews] = useState([]);
  const { hikeId } = useParams();
  const navigate = useNavigate();

  const BE_URL = "https://json-server.adaptable.app/hikes";

  const getReviews = () => {
    axios
      .get(`${BE_URL}/${hikeId}?_embed=reviews`)
      .then((response) => setReviews(response.data.reviews))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getReviews();
  }, [hikeId]);

  const handleDeleteReview = async (reviewId) => {
    try {
      await axios.delete(
        `https://json-server.adaptable.app/reviews/${reviewId}`
      );
      getReviews();
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  return (
    <div className="reviews">
      {reviews &&
        reviews.map((review) => (
          <div key={review.id}>
            <p className="reviewerName">
              <b>Review by:</b> {review.reviewer}
            </p>
            <p className="stars">Stars: {review.stars}</p>
            <p className="reviewText">{review.reviewText}</p>
            <p className="postedOn">{`Posted on: ${review.postedOn}`}</p>
            <div className="buttonDiv">
            <Link to={`/hikes/${review.hikeId}/reviews/${review.id}/edit`}>
           
              <button className="editButton">Edit</button>
            </Link>
            <div>
              <button className="deleteButton" onClick={() => handleDeleteReview(review.id)}>
                Delete Review
              </button>
              </div>
            </div>
            <br />
          </div>
        ))}
    </div>
  );
}

export default Reviews;
