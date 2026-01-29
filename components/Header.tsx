
import React from 'react';
import { PROJECTS } from '../constants.tsx';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects', hasDropdown: true },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div 
          className="text-lg font-bold tracking-tighter cursor-pointer"
          onClick={() => scrollTo('home')}
        >
          VC.
        </div>
        
        <ul className="flex space-x-8 h-full items-center">
          {navItems.map((item) => (
            <li key={item.id} className={`h-full flex items-center relative group ${item.hasDropdown ? 'cursor-pointer' : ''}`}>
              <button
                onClick={() => scrollTo(item.id)}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  activeSection === item.id ? 'text-blue-600' : 'text-gray-500'
                }`}
              >
                {item.label}
              </button>

              {/* Dropdown for Projects */}
              {item.hasDropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                  <div className="bg-white border border-gray-100 shadow-xl rounded-sm py-2 min-w-[240px]">
                    {PROJECTS.map((project) => (
                      <button
                        key={project.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          scrollTo(`project-${project.id}`);
                        }}
                        className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0 group/item"
                      >
                        <div className="text-[10px] mono text-gray-400 uppercase tracking-widest mb-0.5 group-hover/item:text-blue-400">
                          Project {project.id}
                        </div>
                        <div className="text-sm font-semibold text-gray-800 line-clamp-1">
                          {project.title}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
