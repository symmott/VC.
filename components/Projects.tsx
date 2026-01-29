
import React from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
      <div className="mb-20">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mono block mb-4">
          Work
        </span>
        <h2 className="text-4xl md:text-5xl font-bold">Selected Projects</h2>
        <p className="mt-4 text-gray-500 max-w-lg">
          Clear visual systems designed to simplify complexity and drive meaningful engagement.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-y-16 lg:gap-x-12">
        {PROJECTS.map((project, index) => (
          <div key={project.id} className="col-span-12 lg:col-span-6">
            <ProjectCard project={project} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
