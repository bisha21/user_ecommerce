import { useForm } from "react-hook-form";
import { addReview } from "../../api/review";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";

export default function ReviewForm({ product }) {
  const userId = useSelector((store) => store.auth.user.id);
  const { register, handleSubmit } = useForm();
  const [rating, setRating] = useState(0); // State to hold selected rating

  const onSubmit = async (data) => {
    try {
      const reviewData = { ...data, rating }; // Include rating in data
      await addReview(product._id, reviewData);
      toast.success("Review added successfully!!");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  // Function to handle star click
  const handleStarClick = (value) => {
    setRating(value);
  };

  return (
    <form
      className="w-1/2 mx-auto py-4 px-4 shadow"
      onSubmit={handleSubmit(onSubmit)}
    >
        <h2 className="text-lg font-bold mb-4 text-center">Leave a Review for {product.name}</h2>
      {/* Hidden Inputs */}
      <input
        type="hidden"
        id="userId"
        value={userId}
        {...register("userId", { required: "User ID is required." })}
        readOnly
      />
      <input
        type="hidden"
        id="productId"
        value={product._id}
        {...register("productId", { required: "Product ID is required." })}
        readOnly
      />

      {/* Review Input */}
      <div className="py-1">
        <label htmlFor="review">Review</label>
        <input
          type="text"
          id="review"
          name="review"
          className="w-full mt-1 py-1 px-2 rounded border"
          {...register("review", { required: "Product review is required." })}
        />
      </div>

      {/* Star Rating */}
      <div className="py-1">
        <label>Rating</label>
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`cursor-pointer text-2xl ${
                rating >= star ? "text-yellow-500" : "text-gray-300"
              }`}
              onClick={() => handleStarClick(star)}
            >
              <FaStar size={40}/> 
            </span>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit Review
      </button>
    </form>
  );
}
