import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageCard from './ImageCard';
import AddImageButton from './AddImageButton';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const GalleryWidget = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [uploading, setUploading] = useState(false);

  // Fetch images from backend
  const fetchImages = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}/api/images`);
      setImages(response.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching images:', err);
      setError('Failed to load images. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Upload new image
  const handleImageUpload = async (file) => {
    try {
      setUploading(true);
      const formData = new FormData();
      formData.append('image', file);

      const response = await axios.post(`${API_BASE_URL}/api/images`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Add the new image to the beginning of the array
      setImages(prevImages => [response.data, ...prevImages]);
      setError(null);
    } catch (err) {
      console.error('Error uploading image:', err);
      setError('Failed to upload image. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="w-full">
      {/* Upload Button */}
      <div className="mb-6">
        <AddImageButton 
          onImageUpload={handleImageUpload} 
          uploading={uploading}
        />
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
          <span className="ml-2 text-gray-600">Loading images...</span>
        </div>
      )}

      {/* Images Grid */}
      {!loading && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.length === 0 ? (
            <div className="col-span-full text-center py-8 text-gray-500">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-lg font-medium mb-2">No images yet</p>
              <p className="text-sm">Upload your first image to get started!</p>
            </div>
          ) : (
            images.map((image) => (
              <ImageCard key={image._id} image={image} />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default GalleryWidget;
