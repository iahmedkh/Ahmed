import React from 'react';
import { ShieldLogo } from './Icons';

export const Header: React.FC = () => {
  return (
    <header className="flex flex-col items-center justify-center pt-8 pb-4 text-center space-y-4">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyber-green to-cyber-cyan rounded-full blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
        <div className="relative p-3 bg-cyber-black rounded-full border border-slate-800">
          <ShieldLogo className="w-10 h-10 text-cyber-green" />
        </div>
      </div>
      
      <div className="space-y-2">
        <h1 className="font-mono text-3xl md:text-5xl font-bold tracking-tight text-white uppercase glow-text">
          Ahmed Khalid
        </h1>
        <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-cyber-cyan to-transparent"></div>
        <h2 className="font-mono text-lg md:text-xl text-cyber-cyan tracking-wider">
          Cyber Security Engineer
        </h2>
        <p className="text-slate-400 text-sm md:text-base max-w-md mx-auto">
          Digital protection & threat analysis
        </p>
      </div>
    </header>
  );
};