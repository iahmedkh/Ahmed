import React from 'react';
import { CardData } from '../constants';
import { NetworkIcon, AppSecIcon, EndpointIcon, CryptoIcon, VulnIcon, SocialIcon } from './Icons';

const ICON_MAP = {
  network: NetworkIcon,
  app: AppSecIcon,
  endpoint: EndpointIcon,
  crypto: CryptoIcon,
  vuln: VulnIcon,
  social: SocialIcon,
};

interface CardProps {
  data: CardData;
}

export const Card: React.FC<CardProps> = ({ data }) => {
  const IconComponent = ICON_MAP[data.iconName];

  return (
    <div className="group relative h-full">
      {/* Glow effect on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyber-green to-cyber-cyan rounded-lg opacity-0 group-hover:opacity-75 transition duration-300 blur-sm"></div>
      
      <div className="relative h-full p-6 bg-slate-900/90 border border-slate-800 rounded-lg shadow-xl backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-1 flex flex-col items-start gap-4">
        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyber-green opacity-50 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyber-cyan opacity-50 group-hover:opacity-100 transition-opacity"></div>

        <div className="p-3 rounded-md bg-slate-800/50 text-cyber-green group-hover:text-cyber-cyan group-hover:bg-slate-800 transition-colors">
          <IconComponent className="w-8 h-8" />
        </div>
        
        <div className="space-y-2">
          <h3 className="font-mono text-lg font-bold text-white group-hover:text-cyber-green transition-colors">
            {data.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
};