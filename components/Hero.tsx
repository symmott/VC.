
import React from 'react';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen flex flex-col justify-center items-center px-6 text-center">
      <div className="max-w-4xl animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4 text-gray-900">
          Visualizing clarity.
        </h1>
        <p className="text-sm md:text-base text-gray-500 uppercase tracking-widest font-medium mb-10 mono">
          Visual Designer · Data & Product Visualization
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button 
            onClick={() => scrollTo('projects')}
            className="px-8 py-3 bg-gray-900 text-white text-sm font-medium rounded-sm hover:bg-gray-800 transition-all w-full sm:w-auto"
          >
            View Projects
          </button>
          <button 
            onClick={() => scrollTo('about')}
            className="px-8 py-3 border border-gray-200 text-gray-600 text-sm font-medium rounded-sm hover:border-gray-900 hover:text-gray-900 transition-all w-full sm:w-auto"
          >
            How I Think
          </button>
        </div>
      </div>
      
      {/* Signature line at the very bottom */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <span className="text-xs font-medium text-black tracking-tight mono">
          — Soyeon Kim
        </span>
      </div>
    </div>
  );
};

export default Hero;
