import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

// const BE_URL = "https://json-server.adaptable.app/hikes";

function NewReview(props) {
  // State variables to store the values of the form inputs. You can leave these as they are.
  const [reviewer, setReviewer] = useState("");
  const [stars, setStars] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [postedOn, setPostedOn] = useState("");

  const { hikeId } = useParams();

  const handleReviewer = (e) => setReviewer(e.target.value);
  const handleStars = (e) => setStars(e.target.value);
  const handleReviewText = (e) => setReviewText(e.target.value);
  const handlePostedOn = (e) => setPostedOn(e.target.value);

  const navigate = useNavigate();

  const addNewReview = (event) => {
    event.preventDefault();
    const requestBody = {
      reviewer,
      stars,
      reviewText,
      postedOn,
    };

    axios
      .post(
        `https://json-server.adaptable.app/hikes/${hikeId}/reviews`,
        requestBody
      )
      .then((response) => {
        const newReviewId = response.data._id;
        navigate(`/hikes/${hikeId}`);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="d-inline-flex flex-column w-100 p-4">
        <form onSubmit={addNewReview}>
          <label>Name</label>
          <input
            className="form-control mb-4"
            type="text"
            name="name"
            placeholder="Your Name"
            value={reviewer}
            onChange={handleReviewer}
          />
          <label>Stars</label>
          <input
            className="form-control mb-4"
            type="number"
            placeholder="Stars"
            value={stars}
            onChange={handleStars}
          />

          <label className="form-label">Description</label>
          <textarea
            className="form-control mb-4"
            type="text"
            name="description"
            placeholder="Description"
            rows="3"
            value={reviewText}
            onChange={handleReviewText}
          ></textarea>

          <label>Posted on</label>
          <input
            className="form-control mb-4"
            type="text"
            placeholder="DD.MM.YYYY"
            value={postedOn}
            onChange={handlePostedOn}
          />

          <button className="btn btn-primary btn-round">Add Review</button>
        </form>
      </div>
    </>
  );
}

export default NewReview;
