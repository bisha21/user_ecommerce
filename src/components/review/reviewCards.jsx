import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';

const ReviewCards = ({ review }) => {
  return (
    <div className="flex flex-wrap justify-center mt-24 w">
      <Carousel
        width={500}
        showThumbs={false}
        showArrows={false}
        autoPlay={true}
        infiniteLoop={true}
        height={600}
      >
        {review.map((review) => (
          <div
            key={review._id}
            className="flex  flex-col justify-between rounded-md  bg-blue-900 text-black p-8 shadow-2xl"
          >
            {/* Stars */}
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

            {/* Review Content */}
            <p className="my-4 mb-0  font-normal leading-relaxed tracking-wide text-white text-xl">
              {review.review}
            </p>

            {/* User Info */}
            <div className="mt-6 flex items-center gap-6">
              <div className="h-10 w-10 overflow-hidden rounded-full shadow-sm outline-neutral-800">
                <div className="relative inline-block overflow-hidden rounded-lg border-neutral-800">
                  <img
                    alt={`${review.user.name}'s profile`}
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                      review.user.name
                    )}&background=random`}
                    width={50}
                    height={50}
                    decoding="async"
                    data-nimg={1}
                    className="inline-block"
                    loading="lazy"
                    style={{ color: 'transparent' }}
                  />
                </div>
              </div>
              <div>
                <p className="leading-relaxed tracking-wide text-white font-semibold">
                  {review.user.name}
                </p>
                <p className="text-xs leading-relaxed tracking-wide text-white font-semibold">
                  Customer
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ReviewCards;
