import React from 'react';
import { Header } from './components/Header';
import { About } from './components/About';
import { CardGrid } from './components/CardGrid';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-cyber-black text-slate-300 overflow-x-hidden relative selection:bg-cyber-green selection:text-cyber-black">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 z-0 bg-cyber-grid bg-[size:30px_30px] opacity-20 pointer-events-none" />
      
      {/* Ambient Glow */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyber-green/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyber-cyan/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-16">
        <Header />
        
        <main className="flex flex-col gap-24">
          <About />
          <CardGrid />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;