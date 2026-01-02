"use client";
import React, { useState, useMemo } from 'react';
import { 
  Search, MapPin, Scissors, Calendar, Clock, XCircle, CheckCircle2, 
  User, MessageSquare, ArrowRight, Star, Heart, CreditCard 
} from 'lucide-react';

// --- 1. INTERFACES ---
interface ServiceProvider {
  id: number;
  name: string;
  type: string;
  loc: string;
  rate: number;
  price: number;
  cat: string;
  img: string;
}

interface UserProfile {
  name: string;
}

interface Booking {
  id: number;
  name: string;
  price: number;
  time: string;
  date: string;
}

// --- 2. MOCK DATA ---
const CATEGORIES = [
  { id: 'haircut', name: 'Haircut', icon: <Scissors size={20}/> },
  { id: 'massage', name: 'Massage', icon: <Clock size={20}/> },
  { id: 'nails', name: 'Nail Bar', icon: <Heart size={20}/> },
  { id: 'braids', name: 'Braiding', icon: <Scissors size={20}/> },
  { id: 'barber', name: 'Grooming', icon: <Scissors size={20}/> },
  { id: 'spa', name: 'Spa Rituals', icon: <Clock size={20}/> }
];

const PROVIDERS: ServiceProvider[] = [
  { id: 1, name: "The Executive Shave", type: "Barber Shop", loc: "Westlands", rate: 4.9, price: 1500, cat: "barber", img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=400" },
  { id: 2, name: "Serene Spa", type: "Massage Parlour", loc: "Kilimani", rate: 4.7, price: 5000, cat: "massage", img: "https://images.unsplash.com/photo-1544161515-4ae6ce6fe858?auto=format&fit=crop&q=80&w=400" },
  { id: 3, name: "Glow Nails", type: "Nail Bar", loc: "Lavington", rate: 4.8, price: 2500, cat: "nails", img: "https://images.unsplash.com/photo-1604654894610-df490651e56c?auto=format&fit=crop&q=80&w=400" },
  { id: 4, name: "Braids by Amina", type: "Salon", loc: "Nairobi West", rate: 4.9, price: 3500, cat: "braids", img: "https://images.unsplash.com/photo-1646244456950-928d97560862?auto=format&fit=crop&q=80&w=400" },
  { id: 5, name: "Modern Cuts", type: "Barber Shop", loc: "CBD", rate: 4.5, price: 1200, cat: "haircut", img: "https://images.unsplash.com/photo-1599351431247-f5091e38e1b6?auto=format&fit=crop&q=80&w=400" },
  { id: 6, name: "Zen Spa", type: "Spa Rituals", loc: "Muthaiga", rate: 5.0, price: 8500, cat: "spa", img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=400" },
  { id: 7, name: "Urban Barber", type: "Barber Shop", loc: "Westlands", rate: 4.8, price: 1800, cat: "barber", img: "https://images.unsplash.com/photo-1512690196162-fa58d2c69945?auto=format&fit=crop&q=80&w=400" },
  { id: 8, name: "Elite Nails", type: "Nail Bar", loc: "Karen", rate: 4.9, price: 3000, cat: "nails", img: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=400" }
];

export default function CompleteCustomerPortal() {
  // --- 3. STATE ---
  const [user, setUser] = useState<UserProfile | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCat, setActiveCat] = useState("all");
  const [selectedProvider, setSelectedProvider] = useState<ServiceProvider | null>(null);
  const [showAuth, setShowAuth] = useState(false);
  const [bookings, setBookings] = useState<Booking[]>([]);

  // --- 4. LOGIC ---
  const filteredProviders = useMemo(() => {
    return PROVIDERS.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCat = activeCat === "all" || p.cat === activeCat;
      return matchesSearch && matchesCat;
    });
  }, [searchTerm, activeCat]);

  const handleBookingConfirm = () => {
    if (!selectedProvider) return;
    const newBooking: Booking = {
      id: Date.now(),
      name: selectedProvider.name,
      price: selectedProvider.price,
      time: "2:00 PM",
      date: "Tomorrow",
    };
    setBookings([newBooking, ...bookings]);
    setSelectedProvider(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-black tracking-tighter">KIPINDI<span className="text-amber-500">.</span></h1>
          <div className="flex items-center gap-4">
            {user ? (
              <span className="bg-black text-white px-4 py-2 rounded-full text-xs font-bold uppercase">{user.name}</span>
            ) : (
              <button onClick={() => setShowAuth(true)} className="text-sm font-bold uppercase">Sign In</button>
            )}
            <div className="relative p-2 bg-slate-100 rounded-full">
              <Calendar size={20} />
              {bookings.length > 0 && <span className="absolute -top-1 -right-1 bg-amber-500 text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">{bookings.length}</span>}
            </div>
          </div>
        </div>
      </nav>

      {/* SEARCH SECTION */}
      <section className="bg-black py-20 px-6 text-white text-center">
        <h2 className="text-5xl font-black mb-8">Choose your service<span className="text-amber-500">.</span></h2>
        <div className="max-w-2xl mx-auto bg-white/10 p-2 rounded-2xl flex border border-white/20">
          <Search className="ml-4 my-auto text-white/40" />
          <input 
            className="bg-transparent w-full p-4 outline-none font-bold"
            placeholder="Search salon or barber..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </section>

      {/* CATEGORIES */}
      <div className="max-w-7xl mx-auto px-6 -mt-8 flex gap-4 overflow-x-auto pb-4 no-scrollbar">
        <button 
          onClick={() => setActiveCat('all')}
          className={`px-8 py-4 rounded-xl font-bold shadow-lg whitespace-nowrap ${activeCat === 'all' ? 'bg-amber-500 text-black' : 'bg-white'}`}
        >All</button>
        {CATEGORIES.map(c => (
          <button 
            key={c.id}
            onClick={() => setActiveCat(c.id)}
            className={`flex items-center gap-2 px-8 py-4 rounded-xl font-bold shadow-lg whitespace-nowrap ${activeCat === c.id ? 'bg-amber-500 text-black' : 'bg-white text-slate-400'}`}
          >{c.icon} {c.name}</button>
        ))}
      </div>

      {/* PROVIDER GRID */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProviders.map(p => (
          <div key={p.id} className="bg-white rounded-3xl overflow-hidden border hover:shadow-xl transition-all group">
            <div className="h-48 overflow-hidden">
              <img src={p.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
            </div>
            <div className="p-6">
              <p className="text-amber-600 text-[10px] font-black uppercase mb-1">{p.type}</p>
              <h3 className="font-black text-xl mb-1">{p.name}</h3>
              <p className="text-slate-400 text-xs mb-4 flex items-center gap-1"><MapPin size={12}/> {p.loc}</p>
              <div className="flex justify-between items-center border-t pt-4">
                <span className="font-black">KSH {p.price}</span>
                <button onClick={() => setSelectedProvider(p)} className="p-3 bg-black text-white rounded-xl hover:bg-amber-500 transition-colors"><ArrowRight size={18}/></button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ACTIVE BOOKINGS */}
      {bookings.length > 0 && (
        <section className="max-w-4xl mx-auto px-6 mt-12">
          <div className="bg-slate-900 text-white p-10 rounded-[2.5rem]">
            <h2 className="text-2xl font-black mb-6 italic">Active Bookings</h2>
            {bookings.map(b => (
              <div key={b.id} className="flex justify-between items-center p-4 border-b border-white/10">
                <div>
                  <p className="font-bold">{b.name}</p>
                  <p className="text-xs text-white/40 uppercase">{b.date} @ {b.time}</p>
                </div>
                <button onClick={() => setBookings(bookings.filter(x => x.id !== b.id))} className="text-rose-500"><XCircle/></button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* AUTH MODAL */}
      {showAuth && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
          <div className="bg-white w-full max-w-md rounded-[2.5rem] p-10">
            <h2 className="text-3xl font-black mb-6">Your Profile</h2>
            <input id="userName" placeholder="Full Name" className="w-full p-4 bg-slate-100 rounded-2xl mb-4 outline-none font-bold" />
            <input placeholder="WhatsApp Number" className="w-full p-4 bg-slate-100 rounded-2xl mb-6 outline-none font-bold" />
            <button onClick={() => {
              const nameInput = document.getElementById('userName') as HTMLInputElement;
              if (nameInput.value) { setUser({ name: nameInput.value }); setShowAuth(false); }
            }} className="w-full bg-black text-white py-4 rounded-2xl font-black uppercase">Start Booking</button>
          </div>
        </div>
      )}

      {/* BOOKING MODAL */}
      {selectedProvider && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
          <div className="bg-white w-full max-w-lg rounded-[3rem] p-10">
            <h2 className="text-3xl font-black mb-2 uppercase">{selectedProvider.name}</h2>
            <p className="text-slate-400 mb-8 font-bold tracking-widest uppercase text-xs">Confirm your session</p>
            <div className="bg-slate-50 p-6 rounded-2xl mb-8 flex justify-between items-center">
              <span className="font-bold text-slate-500">Service Fee</span>
              <span className="text-2xl font-black">KSH {selectedProvider.price}</span>
            </div>
            <div className="flex items-center gap-4 p-4 border-2 border-amber-500 bg-amber-50 rounded-2xl mb-8">
              <CreditCard className="text-amber-600"/>
              <span className="font-bold">Pay at Salon after service</span>
              <CheckCircle2 className="ml-auto text-amber-600"/>
            </div>
            <div className="flex gap-4">
              <button onClick={() => setSelectedProvider(null)} className="flex-1 font-bold text-slate-400">Cancel</button>
              <button onClick={handleBookingConfirm} className="flex-1 bg-black text-white py-5 rounded-2xl font-black uppercase shadow-xl hover:bg-amber-500 hover:text-black transition-all">Confirm</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}