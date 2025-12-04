import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 py-8 animate-fade-in-up">
      <div className="relative shrink-0">
        <div className="absolute -inset-0.5 bg-gradient-to-br from-cyber-green to-cyber-cyan rounded-full blur opacity-50"></div>
        <img 
          src="https://picsum.photos/200/200" 
          alt="Ahmed Khalid" 
          className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-cyber-black bg-cyber-dark"
        />
        {/* Status Indicator */}
        <div className="absolute bottom-2 right-2 w-4 h-4 bg-cyber-green rounded-full border-2 border-cyber-black animate-pulse shadow-[0_0_10px_#00ff88]"></div>
      </div>
      
      <div className="max-w-xl text-center md:text-left space-y-4">
        <h3 className="font-mono text-2xl text-white font-semibold flex items-center justify-center md:justify-start gap-2">
          <span className="text-cyber-green">{'>'}</span> System Status: <span className="text-cyber-green">Online</span>
        </h3>
        <p className="text-slate-300 leading-relaxed text-lg">
          I am a dedicated cybersecurity professional focused on hardening infrastructure, analyzing emerging threats, and building resilient systems. My mission is to secure digital assets through proactive vulnerability management and robust defense strategies.
        </p>
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {['SecOps', 'Threat Analysis', 'Blue Team', 'PenTesting'].map((tag) => (
            <span key={tag} className="px-3 py-1 text-xs font-mono text-cyber-cyan bg-cyber-cyan/10 border border-cyber-cyan/20 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};