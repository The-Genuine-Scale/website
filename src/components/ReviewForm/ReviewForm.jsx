import { useState, useEffect } from "react";
import "./ReviewForm.css";
import { getUserDetails } from "../../api/user";

const ReviewForm = ({ onAddReview }) => {
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0);
  const [personalDetails, setPersonalDetails] = useState({});
  const userId = localStorage.getItem("uid");
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const review = {
      name: personalDetails.name,
      description,
      rating,
    };
    onAddReview(review);
    setDescription("");
    setRating(0);
  };
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userDetails = await getUserDetails(userId);
        setPersonalDetails({
          name: userDetails.name,
          mobileNumber: userDetails.mobileNumber,
          email: userDetails.email,
        });
        console.log(personalDetails);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserDetails();
  }, [userId]);
  return (
    <div className="review-form">
      <h4>Add a Review</h4>
      <form onSubmit={handleReviewSubmit}>
        <input type="text" placeholder="Name" value={personalDetails.name} />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <input
          type="number"
          placeholder="Rating"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;
