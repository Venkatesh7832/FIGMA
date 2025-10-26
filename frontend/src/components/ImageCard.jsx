import React from 'react';

const ImageCard = ({ image }) => {
  const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
  const imageUrl = image.url.startsWith('http') ? image.url : `${API_BASE_URL}${image.url}`;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-soft hover:shadow-medium transition-shadow duration-200">
      <div className="aspect-square relative overflow-hidden">
        <img
          src={imageUrl}
          alt="Uploaded content"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button className="bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium transition-all duration-200">
              View
            </button>
          </div>
        </div>
      </div>
      <div className="p-3">
        <p className="text-xs text-gray-500">
          Uploaded {formatDate(image.uploadedAt)}
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
