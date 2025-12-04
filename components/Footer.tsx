import React from 'react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PROFILE_LINKS } from '../constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/50 mt-12 py-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500 font-mono">
      <div className="order-2 md:order-1">
        <p>© {currentYear} Ahmed Khalid. All systems nominal.</p>
      </div>
      
      <div className="flex items-center gap-6 order-1 md:order-2">
        <a 
          href={PROFILE_LINKS.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-cyber-green transition-colors duration-300"
        >
          <GithubIcon className="w-5 h-5" />
          <span>GitHub</span>
        </a>
        <a 
          href={PROFILE_LINKS.linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-cyber-cyan transition-colors duration-300"
        >
          <LinkedinIcon className="w-5 h-5" />
          <span>LinkedIn</span>
        </a>
      </div>
    </footer>
  );
};