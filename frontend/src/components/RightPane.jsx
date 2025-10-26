import React, { useState } from 'react';
import TabsWidget from './TabsWidget';
import GalleryWidget from './GalleryWidget';

const RightPane = () => {
  return (
    <div className="w-full md:w-1/2 p-6 space-y-6">
      {/* Tabs Widget */}
      <div className="card p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Profile Information</h2>
        <TabsWidget />
      </div>
      
      {/* Gallery Widget */}
      <div className="card p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Image Gallery</h2>
        <GalleryWidget />
      </div>
    </div>
  );
};

export default RightPane;
