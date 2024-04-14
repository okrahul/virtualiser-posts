import React from "react";
import { MediaCarousel } from ".././components/MediaCarousel";

export const Card = ({ profileImage, name, postedDate, text, imageUrls }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-5">
      <div className="flex items-center p-4">
        <img
          className="w-12 h-12 rounded-full mr-4"
          src={profileImage}
          alt="Profile"
        />
        <div>
          <p className="text-gray-800 font-semibold text-left">{name}</p>
          <p className="text-gray-600 text-sm text-left">{postedDate}</p>
        </div>
      </div>
      <div className="px-4 py-2">
        <p className="text-gray-700 text-left">{text}</p>
      </div>
      <MediaCarousel mediaArray={imageUrls} />
    </div>
  );
};
