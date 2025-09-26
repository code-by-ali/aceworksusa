// components/StarRating.js
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function StarRating({ rating, totalReviews }) {
  const stars = [];
  const maxStars = 5;

  for (let i = 1; i <= maxStars; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-gray-300" />);
    }
  }

  return (
    <div>
<div className="flex items-center space-x-2">
      <div className="flex">{stars}</div>
      <span className="font-semibold text-white">{rating.toFixed(1)}</span>
     
    </div>
         <div className="text-white py-2">{totalReviews} Reviews</div>
    </div>
    

  );
}