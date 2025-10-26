import React from 'react';
import LeftPane from './components/LeftPane';
import RightPane from './components/RightPane';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left Pane - Empty on mobile, visible on desktop */}
        <LeftPane />
        
        {/* Right Pane - Contains widgets */}
        <RightPane />
      </div>
    </div>
  );
}

export default App;
