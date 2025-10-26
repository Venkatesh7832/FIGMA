import React, { useState } from 'react';

const TabsWidget = () => {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About Me' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'recommended', label: 'Recommended' }
  ];

  const tabContent = {
    about: {
      title: 'About Me',
      content: (
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">JD</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">Full Stack Developer</p>
              <p className="text-sm text-gray-500">San Francisco, CA</p>
            </div>
          </div>
          <div className="border-t pt-4">
            <p className="text-gray-700 leading-relaxed">
              Passionate full-stack developer with 5+ years of experience building scalable web applications. 
              I love working with modern technologies and creating user-friendly interfaces that make a difference.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">React</span>
            <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">Node.js</span>
            <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">MongoDB</span>
            <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">TypeScript</span>
          </div>
        </div>
      )
    },
    experiences: {
      title: 'Work Experience',
      content: (
        <div className="space-y-4">
          <div className="border-l-4 border-primary-500 pl-4">
            <h4 className="font-semibold text-gray-800">Senior Full Stack Developer</h4>
            <p className="text-sm text-gray-600">TechCorp Inc. • 2021 - Present</p>
            <p className="text-gray-700 mt-2">
              Led development of multiple web applications serving 100k+ users. 
              Implemented microservices architecture and improved system performance by 40%.
            </p>
          </div>
          <div className="border-l-4 border-gray-300 pl-4">
            <h4 className="font-semibold text-gray-800">Full Stack Developer</h4>
            <p className="text-sm text-gray-600">StartupXYZ • 2019 - 2021</p>
            <p className="text-gray-700 mt-2">
              Built and maintained web applications using React, Node.js, and PostgreSQL. 
              Collaborated with cross-functional teams to deliver features on time.
            </p>
          </div>
          <div className="border-l-4 border-gray-300 pl-4">
            <h4 className="font-semibold text-gray-800">Frontend Developer</h4>
            <p className="text-sm text-gray-600">WebAgency • 2018 - 2019</p>
            <p className="text-gray-700 mt-2">
              Developed responsive web interfaces and improved user experience across multiple client projects.
            </p>
          </div>
        </div>
      )
    },
    recommended: {
      title: 'Recommendations',
      content: (
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-gray-600 font-medium text-sm">SM</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800">Sarah Miller</h4>
                <p className="text-sm text-gray-600">Engineering Manager at TechCorp</p>
                <p className="text-gray-700 mt-2 text-sm">
                  "John is an exceptional developer who consistently delivers high-quality code. 
                  His problem-solving skills and attention to detail make him a valuable team member."
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-gray-600 font-medium text-sm">MJ</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800">Mike Johnson</h4>
                <p className="text-sm text-gray-600">CTO at StartupXYZ</p>
                <p className="text-gray-700 mt-2 text-sm">
                  "Working with John was a pleasure. He's reliable, skilled, and always willing to help teammates. 
                  I'd definitely recommend him for any development role."
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  };

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 font-medium text-sm transition-colors duration-200 ${
              activeTab === tab.id
                ? 'text-primary-600 border-b-2 border-primary-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="animate-fade-in">
        {tabContent[activeTab]?.content}
      </div>
    </div>
  );
};

export default TabsWidget;
