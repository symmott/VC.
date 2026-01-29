
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-40 flex flex-col items-center justify-center text-center">
      <div className="space-y-6">
        <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 mono block">
          Get in touch
        </span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 leading-none">
          Open to collaboration
        </h2>
        <div className="pt-8">
            <a 
              href="mailto:azsx0221@naver.com" 
              className="group inline-flex flex-col items-center space-y-2"
            >
              <span className="text-lg md:text-xl font-medium text-gray-500 group-hover:text-blue-600 transition-colors underline decoration-gray-200 underline-offset-8">
                Email: azsx0221@naver.com
              </span>
              <span className="text-[10px] text-gray-300 mono opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                Send a message
              </span>
            </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
