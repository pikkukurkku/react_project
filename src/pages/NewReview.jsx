import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./NewReview.css";

function NewReview(props) {
  const [reviewer, setReviewer] = useState("");
  const [stars, setStars] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [postedOn, setPostedOn] = useState("");
  const [hike, setHike] = useState({});

  const { hikeId } = useParams();

  useEffect(() => {
    axios
      .get(`https://json-server.adaptable.app/hikes/${hikeId}`)
      .then((response) => {
        setHike(response.data);
      })
      .catch((error) => console.log(error));
  }, [hikeId]);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleReviewer = (e) => setReviewer(e.target.value);
  const handleStars = (e) => setStars(e.target.value);
  const handleReviewText = (e) => setReviewText(e.target.value);
  const handlePostedOn = (e) => setPostedOn(e.target.value);

  const navigate = useNavigate();

  const formattedDate = new Date(postedOn).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  const addNewReview = (event) => {
    event.preventDefault();
    const requestBody = {
      hikeId: Number(hikeId),
      reviewer,
      stars,
      reviewText,
      postedOn: formattedDate,
    };

    console.log("Request Body:", requestBody);

    axios
      .post(`https://json-server.adaptable.app/reviews`, requestBody)
      .then((response) => {
        console.log("Response:", response);
        const newReviewId = response.data;
        navigate(`/hikes/${hikeId}`);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="form-container">
        <h1>
          Your review of: <br />
          {hike.nameOfHike}
        </h1>
        <form onSubmit={addNewReview} className="form">
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
            min="1"
            max="5"
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
            type="date"
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
