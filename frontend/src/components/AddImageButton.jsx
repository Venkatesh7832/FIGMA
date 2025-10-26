import React, { useRef, useState } from 'react';

const AddImageButton = ({ onImageUpload, uploading }) => {
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file.');
        return;
      }

      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB.');
        return;
      }

      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target.result);
      };
      reader.readAsDataURL(file);

      // Upload the file
      onImageUpload(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileInputChange = (event) => {
    handleFileSelect(event);
    // Reset the input so the same file can be selected again
    event.target.value = '';
  };

  return (
    <div className="space-y-4">
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileInputChange}
        className="hidden"
      />

      {/* Upload Button */}
      <button
        onClick={handleButtonClick}
        disabled={uploading}
        className="w-full btn-primary flex items-center justify-center space-x-2 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {uploading ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            <span>Uploading...</span>
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span>Add Image</span>
          </>
        )}
      </button>

      {/* Preview */}
      {preview && (
        <div className="animate-slide-up">
          <div className="bg-gray-50 p-4 rounded-lg border-2 border-dashed border-gray-300">
            <p className="text-sm text-gray-600 mb-3">Preview:</p>
            <div className="relative">
              <img
                src={preview}
                alt="Preview"
                className="w-full h-32 object-cover rounded-lg"
              />
              <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                ✓ Uploaded
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddImageButton;
