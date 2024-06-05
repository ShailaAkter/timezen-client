import { useState } from "react";
import { Link } from "react-router-dom";

const WatchReviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      reviewerName: "John Doe",
      rating: 4.5,
      reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et dolor nec turpis bibendum interdum at vel nunc.",
    },
    {
      id: 2,
      reviewerName: "Jane Smith",
      rating: 5,
      reviewText: "Nullam eget lorem sed est ultricies semper a a diam. Donec posuere consectetur neque, at ultricies metus imperdiet non.",
    },
    {
      id: 3,
      reviewerName: "Michael Johnson",
      rating: 4,
      reviewText: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus id justo ac elit dictum lobortis.",
    },
  ]);

  return (
    <div className="container mx-auto my-8 py-20">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">What Experts Are Saying</h1>
        <p className="text-lg text-gray-600 mb-4">Hear from renowned watch reviewers about our latest collection.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div key={review.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <div className="p-6">
              <div className="font-bold text-xl mb-2">{review.reviewerName}</div>
              <div className="flex items-center mb-4">
                <span className="inline-block bg-yellow-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
                  {review.rating} / 5
                </span>
              </div>
              <p className="text-gray-700 text-base mb-4">
                {review.reviewText.length > 100 ? review.reviewText.substring(0, 100) + '...' : review.reviewText}
              </p>
              <Link to={`/review-details/${review.id}`} className="text-gray-700 font-bold hover:text-gray-900">
                Read Full Review
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchReviews;
