"use client";
import React, { useState } from 'react';
import { Menu, X, ShieldCheck, Store, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-slate-100">
      {/* Top Thin Bar for Salon/Admin - Shows "Pro" status */}
      <div className="bg-slate-900 text-white text-[10px] py-1 px-4 flex justify-between uppercase tracking-widest font-bold">
        <span>Salon Booking Platform</span>
        <div className="flex gap-4">
          <a href="/admin" className="hover:text-amber-400 flex items-center gap-1"><ShieldCheck size={10}/> Admin Portal</a>
          <a href="/onboard" className="hover:text-amber-400 flex items-center gap-1"><Store size={10}/> List Your Salon</a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
          <span className="text-2xl font-black text-slate-900">GLOW<span className="text-amber-500">STYLE</span></span>
        </div>

        {/* Center: Main Client Links */}
        <div className="hidden md:flex items-center gap-8 font-semibold text-slate-600">
          <a href="#" className="hover:text-slate-900 transition-colors">Find Services</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Top Barbers</a>
          <a href="#" className="hover:text-slate-900 transition-colors">How it Works</a>
        </div>

        {/* Right: Identity Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-slate-900 font-bold px-4 py-2 hover:bg-slate-50 rounded-lg">Login</button>
          <button className="bg-slate-900 text-white px-6 py-3 rounded-full font-bold hover:bg-slate-800 transition-all shadow-xl active:scale-95">
            Book Appointment
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white h-screen p-6 space-y-6 animate-in slide-in-from-right">
          <div className="space-y-4 flex flex-col">
            <span className="text-xs font-bold text-slate-400 uppercase">For Customers</span>
            <a href="#" className="text-xl font-bold">Find a Barber</a>
            <a href="#" className="text-xl font-bold">Trending Styles</a>
          </div>
          <hr />
          <div className="space-y-4 flex flex-col text-amber-600">
            <span className="text-xs font-bold text-slate-400 uppercase">For Businesses</span>
            <a href="#" className="text-xl font-bold">Salon Dashboard</a>
            <a href="#" className="text-xl font-bold">Manage Schedule</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;