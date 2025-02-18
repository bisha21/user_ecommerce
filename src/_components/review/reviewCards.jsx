import { FaStar } from 'react-icons/fa';
import Slider from '../products/Carausel';

const ReviewCards = ({ reviews }) => {
  console.log( "hahaha" +reviews)
  return (
    <div className="flex flex-wrap justify-center mt-24 w-full">
      <Slider
        content={reviews}
        renderItem={(review) => (
          <div className="flex flex-col justify-between items-center rounded-md bg-teal-500 text-gray-700 p-8 shadow-xl">
            {/* User Name */}
            <div>
              <p className="text-xl font-semibold text-white">
                {review.user.name}
              </p>
            </div>

            {/* Review Content */}
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-900 text-xl">
              {review.review}
            </p>

            {/* Star Rating */}
            <div className="text-violet-500 flex gap-2">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  size={25}
                  key={index}
                  className={
                    index < review.rating ? 'text-yellow-500' : 'text-gray-300'
                  }
                />
              ))}
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default ReviewCards;
