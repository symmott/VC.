
import React from 'react';

const TOOLS = [
  { name: 'Photoshop', icon: 'Ps' },
  { name: 'Illustrator', icon: 'Ai' },
  { name: 'Indesign', icon: 'Id' },
  { name: 'Figma', icon: 'Fg' },
  { name: 'Google Sheets', icon: 'Gs' },
];

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
      <div className="grid grid-cols-12 gap-8">
        {/* Section Label */}
        <div className="col-span-12 lg:col-span-3">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mono block mb-4">
            About
          </span>
          <h2 className="text-2xl font-bold">How I Think</h2>
        </div>

        {/* Identity & Mindset */}
        <div className="col-span-12 lg:col-span-6 space-y-12">
          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-semibold leading-tight text-gray-900">
              I start by asking what needs to be understood.<br />
              Then I design how it should be seen.
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              I focus on structuring and visualizing complex information. 
              With a background in fashion design and an interest in systems, 
              I translate data, technology, and product information into clear visuals.
            </p>
          </div>

          <div className="pt-8 border-t border-gray-200">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 mono">
              Core Stack
            </h4>
            <div className="flex flex-wrap gap-4">
              {TOOLS.map((tool) => (
                <div key={tool.name} className="flex items-center space-x-3 bg-white px-4 py-2 border border-gray-100 rounded shadow-sm">
                  <span className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded text-xs font-bold text-gray-500 mono">
                    {tool.icon}
                  </span>
                  <span className="text-sm font-medium text-gray-700">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Right column left empty as requested */}
        <div className="hidden lg:block lg:col-span-3"></div>
      </div>
    </div>
  );
};

export default About;
