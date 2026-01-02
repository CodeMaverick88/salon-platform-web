// app/customer/layout.tsx
import React from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, User, Menu } from 'lucide-react';

export default function CustomerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      {/* CUSTOMER NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          
          {/* Logo Section */}
          <div className="flex items-center gap-10">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-black">
              KIPINDI<span className="text-amber-500 text-sm ml-1 font-light tracking-widest uppercase">Customer</span>
            </Link>
            
            {/* Main Links with Underline Hover */}
            <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600 uppercase tracking-wider">
              <a href="#" className="relative group transition-colors hover:text-black">
                Find Barbers
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full"></span>
              </a>
              <a href="#" className="relative group transition-colors hover:text-black">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full"></span>
              </a>
              <a href="#" className="relative group transition-colors hover:text-black">
                Deals
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full"></span>
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            {/* Minor Button (Ghost Style) */}
            <button className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-bold border border-slate-200 rounded-xl hover:bg-slate-50 transition-all">
              <ShoppingBag size={18} />
              My Bookings
            </button>
            
            {/* Major Button (Solid Black/Yellow) */}
            <button className="bg-black text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-slate-200 hover:bg-amber-500 hover:text-black transition-all active:scale-95 flex items-center gap-2">
              <User size={18} />
              Sign In
            </button>

            {/* Mobile Menu */}
            <button className="md:hidden p-2 text-slate-600">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Page Content */}
      <main className="pt-20">
        {children}
      </main>
    </div>
  );
}