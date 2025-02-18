import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const StarRating = ({ rating,size }) => {
  const stars = [];
  const fullStars = Math.floor(rating); // Number of full stars
  const hasHalfStar = rating % 1 !== 0; // Check if there is a half star
  const emptyStars = 5 - Math.ceil(rating); // Remaining empty stars

  // Push full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} className="text-orange-400"  size={size} />);
  }

  // Push half star (if applicable)
  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key="half" className="text-orange-400" size={size} />);
  }

  // Push empty stars
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FaRegStar key={`empty-${i}`} className="text-gray-300" size={size} />);
  }

  return <div className="flex">{stars}</div>;
};

export default StarRating;
