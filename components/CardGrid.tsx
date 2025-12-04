import React from 'react';
import { CYBER_CARDS } from '../constants';
import { Card } from './Card';

export const CardGrid: React.FC = () => {
  return (
    <section className="space-y-8">
      <div className="flex items-center gap-4 mb-8">
        <div className="h-px flex-1 bg-slate-800"></div>
        <h2 className="font-mono text-2xl text-cyber-cyan uppercase tracking-widest text-center">
          Security Protocols
        </h2>
        <div className="h-px flex-1 bg-slate-800"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {CYBER_CARDS.map((card) => (
          <Card key={card.id} data={card} />
        ))}
      </div>
    </section>
  );
};