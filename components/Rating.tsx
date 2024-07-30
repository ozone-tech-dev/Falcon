// components/Rating.js

"use client";

const Rating = ({ value = 0 }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          xmlns="http://www.w3.org/2000/svg"
          className={`w-6 h-6 ${
            value >= star ? 'text-gray-500' : 'text-gray-400'
          }`}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1z" />
        </svg>
      ))}
    </div>
  );
};

export default Rating;
