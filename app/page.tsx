"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { User, Store, ShieldCheck, ChevronRight } from 'lucide-react';

// --- 1. DEFINE PROPS INTERFACE (Fixes the "any" error) ---
interface PortalCardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
  onClick: () => void;
  colorClass: string;
  glowClass: string;
  btnClass: string;
}

export default function Gateway() {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden font-sans bg-black">
      {/* Local Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-[10s] hover:scale-110"
        style={{ backgroundImage: `url('/Hair-Salon-Design-ImpeccaBuild-8-1024x683.jpg')` }} 
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl px-6 py-12">
        
        {/* Brand Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top duration-1000">
          <h1 className="text-7xl md:text-9xl font-bold text-white tracking-[0.1em] mb-4">
            KIPINDI
          </h1>
          <p className="text-white/50 text-lg md:text-xl font-light tracking-[0.4em] uppercase">
            Book your <span className="text-white">Kipindi</span>
          </p>
        </div>

        {/* Three Option Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PortalCard 
            title="Customer" 
            desc="Book the finest grooming talent."
            icon={<User size={32} />}
            colorClass="border-amber-500/40 text-amber-500"
            glowClass="bg-amber-500/20"
            btnClass="group-hover:bg-amber-500 group-hover:shadow-amber-500/50"
            onClick={() => handleNavigation('/customer')}
          />

          <PortalCard 
            title="Salon / Barber" 
            desc="Scale your business with ease."
            icon={<Store size={32} />}
            colorClass="border-slate-200/40 text-slate-100"
            glowClass="bg-slate-200/20"
            btnClass="group-hover:bg-white group-hover:shadow-white/50"
            onClick={() => handleNavigation('/salon')}
          />

          <PortalCard 
            title="Admin" 
            desc="Secure platform oversight."
            icon={<ShieldCheck size={32} />}
            colorClass="border-slate-700 text-slate-400"
            glowClass="bg-slate-800/40"
            btnClass="group-hover:bg-slate-700 group-hover:shadow-slate-700/50"
            onClick={() => handleNavigation('/admin')}
          />
        </div>
      </div>
    </div>
  );
}

/* --- The Glass Card Component (Now with explicit types) --- */
function PortalCard({ title, desc, icon, onClick, colorClass, glowClass, btnClass }: PortalCardProps) {
  return (
    <div 
      onClick={onClick}
      className={`group relative cursor-pointer transition-all duration-700 ease-out hover:-translate-y-4`}
    >
      <div className={`relative h-full bg-white/5 backdrop-blur-2xl border ${colorClass} rounded-[2.5rem] p-10 flex flex-col items-center text-center shadow-2xl overflow-hidden`}>
        
        <div className={`absolute -top-24 -left-24 w-48 h-48 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-all duration-700 ${glowClass}`}></div>

        <div className={`mb-8 p-6 rounded-full bg-white/5 border border-white/10 ${colorClass} transition-all duration-500 group-hover:scale-110`}>
          {icon}
        </div>

        <h2 className="text-2xl font-bold text-white mb-4 tracking-tight uppercase">{title}</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-10 font-medium">
          {desc}
        </p>

        <button className={`mt-auto w-full py-4 rounded-full border border-white/20 bg-white/5 text-white font-bold tracking-widest text-xs uppercase flex items-center justify-center gap-2 transition-all duration-500 shadow-xl ${btnClass} group-hover:text-black`}>
          Enter Portal <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}