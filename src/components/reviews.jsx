import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { hikeId } = useParams();

  const BE_URL = "https://json-server.adaptable.app/hikes";

  const getReviews = () => {
    axios
      .get(`${BE_URL}/${hikeId}`)
      .then((response) => setReviews(response.data.reviews))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getReviews();
  }, [hikeId]);

  return (
    <div className="reviews">
      {reviews &&
        reviews.map((review) => (
          <div key={review.id}>
            <p className="reviewerName"><b>Review by:</b> {review.reviewer}</p>
            <p className="stars">Stars: {review.stars}</p>
            <p className="reviewText">{review.reviewText}</p>
            <p className="postedOn">{`Posted on: ${review.postedOn}`}</p>
            <br />
          </div>
        ))}
    </div>
  );
}

export default Reviews;
