const ReviewCards = ({ review }) => {
  return (
    <section className="bg-white px-4 py-12 md:py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-black text-black text-center text-3xl leading-none uppercase max-w-2xl mx-auto mb-12">
          What Listeners Are Saying
        </h2>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 relative">
          {review?.map((singleReview, index) => (
            <div key={index} className="flex flex-col justify-between rounded-md border border-neutral-800 bg-black p-8 shadow-sm max-w-sm mx-auto mt-24">
              {/* Star Rating */}
              <div className="text-violet-500 flex gap-2">
                {Array.from({ length: singleReview?.rating }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-violet-500"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className="my-4 mb-0 text-base font-normal leading-relaxed tracking-wide text-gray-400">
                {singleReview?.review}
              </p>

              {/* User Info */}
              <div className="mt-6 flex items-center gap-6">
                <div className="h-10 w-10 overflow-hidden rounded-full shadow-sm outline-neutral-800">
                  <img
                    alt={singleReview?.user?.name}
                    src={singleReview?.user?.image || "https://randomuser.me/api/portraits/men/1.jpg"} 
                    width="50"
                    height="50"
                    className="inline-block"
                  />
                </div>
                <div>
                  <p className="leading-relaxed tracking-wide text-gray-200">{singleReview?.user?.name}</p>
                  <p className="text-xs leading-relaxed tracking-wide text-gray-400">{singleReview?.user?.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewCards;
