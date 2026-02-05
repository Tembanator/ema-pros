import React from "react";
import { ArrowRight, Briefcase, Search, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="px-6 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl">
          {/* Abstract background glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -mr-40 -mt-40" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[120px] -ml-40 -mb-40" />

          <div className="relative z-10 grid lg:grid-cols-2">
            {/* Left Side: For Customers */}
            <div className="p-8 md:p-16 border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
                <Search size={14} /> Need a service?
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Get things done, <br />
                <span className="text-blue-400">the right way.</span>
              </h2>
              <p className="text-slate-400 text-lg mb-10 max-w-sm">
                Stop gambling with random numbers. Book vetted professionals and
                pay safely with MoMo.
              </p>
              <button className="group flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-2xl font-black hover:bg-blue-50 transition-all transform hover:scale-105">
                Find a Pro Now
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right Side: For Professionals */}
            <div className="p-8 md:p-16 bg-white/[0.02]">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6">
                <Briefcase size={14} /> Are you a Pro?
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Grow your business <br />
                <span className="text-amber-500">beyond your street.</span>
              </h2>
              <p className="text-slate-400 text-lg mb-10 max-w-sm">
                List your skills and get connected to clients in Mbabane,
                Manzini, and Ezulwini today.
              </p>
              <button className="group flex items-center gap-3 bg-amber-500 text-slate-900 px-8 py-4 rounded-2xl font-black hover:bg-amber-400 transition-all transform hover:scale-105 shadow-lg shadow-amber-500/20">
                Register as a Pro
                <Sparkles size={18} className="animate-pulse" />
              </button>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-800"
                    />
                  ))}
                </div>
                <p className="text-slate-500 text-sm">
                  Join 120+ pros this week
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Kingdom Trust Footer */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 text-slate-400 text-sm font-medium uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" /> Vetted in
            Eswatini
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500" /> MoMo Integrated
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-amber-500" /> 24/7 Local
            Support
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
