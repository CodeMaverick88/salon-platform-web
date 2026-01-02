// sections/Hero.tsx
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-emerald-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-emerald-100 shadow-sm animate-bounce">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Now Live in Your City</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              Premium Grooming, <br />
              <span className="text-emerald-600">Simplified.</span>
            </h1>
            
            <p className="text-lg text-slate-600 max-w-lg mx-auto lg:mx-0">
              Discover top-rated barbers and salons near you. Book your next appointment in seconds and skip the wait.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-emerald-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-600 flex items-center justify-center gap-2 transition-all shadow-xl shadow-emerald-200">
                Book an Appointment <ArrowRight size={20} />
              </button>
              <button className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
                For Businesses
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 text-slate-500 text-sm">
              <div className="flex items-center gap-1"><CheckCircle size={16} className="text-emerald-500" /> Trusted Salons</div>
              <div className="flex items-center gap-1"><CheckCircle size={16} className="text-emerald-500" /> Instant Booking</div>
            </div>
          </div>

          {/* Right Visual Element */}
          <div className="flex-1 relative w-full max-w-xl lg:max-w-none">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              {/* Replace with a high-quality barber image */}
              <img 
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800" 
                alt="Barber Shop" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative Orange Accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-400 rounded-full blur-3xl opacity-30 -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;