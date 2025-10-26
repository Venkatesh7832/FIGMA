import React from 'react';

const LeftPane = () => {
  return (
    <div className="hidden md:flex md:w-1/2 bg-gray-100 items-center justify-center">
      <div className="text-center text-gray-500">
        <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium mb-2">Left Panel</h3>
        <p className="text-sm">This area is intentionally left empty</p>
        <p className="text-xs mt-2 text-gray-400">Responsive for screens ≥768px</p>
      </div>
    </div>
  );
};

export default LeftPane;
