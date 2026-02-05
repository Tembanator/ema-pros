import React from "react";
import { ShieldCheck, Award, Users, Smartphone, Star } from "lucide-react";

const TrustStats = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-black uppercase tracking-[0.2em] text-blue-600 mb-2">
            Why Emaswati Trust Us
          </h2>
          <p className="text-3xl font-bold text-slate-900">
            Built for local reliability
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Card - Identity */}
          <div className="md:col-span-2 bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <ShieldCheck size={120} />
            </div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="text-3xl font-black mb-4 leading-tight">
                  100% Verified <br />
                  National IDs
                </h3>
                <p className="text-slate-400 max-w-sm">
                  Every service provider must upload their Eswatini PIN and
                  proof of residence before they can take a single job.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-700 flex items-center justify-center text-[10px] font-bold"
                    >
                      PRO
                    </div>
                  ))}
                </div>
                <span className="text-sm font-medium text-blue-400">
                  Join 500+ Vetted Professionals
                </span>
              </div>
            </div>
          </div>

          {/* Side Card - MoMo */}
          <div className="bg-amber-50 rounded-[2.5rem] p-8 border border-amber-100 flex flex-col justify-between group hover:shadow-xl hover:shadow-amber-100/50 transition-all">
            <div>
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-amber-200">
                <Smartphone className="text-amber-600" size={24} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3 text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-slate-600">
                MoMo Ready
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                No bank card? No problem. Use MTN MoMo or E-mali for all
                transactions with instant confirmation.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-amber-200/50 flex items-center gap-2">
              <span className="text-xs font-black text-amber-700 uppercase tracking-tighter">
                Secure Payments
              </span>
            </div>
          </div>

          {/* Bottom Card 1 - Ratings */}
          <div className="bg-blue-50 rounded-[2.5rem] p-8 border border-blue-100 hover:scale-[1.02] transition-transform">
            <div className="flex items-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  size={16}
                  className="fill-blue-600 text-blue-600"
                />
              ))}
            </div>
            <h4 className="text-4xl font-black text-blue-900 mb-1">4.9/5</h4>
            <p className="text-blue-700/70 font-medium text-sm">
              Customer Satisfaction Rate
            </p>
          </div>

          {/* Bottom Card 2 - Community */}
          <div className="bg-emerald-50 rounded-[2.5rem] p-8 border border-emerald-100 md:col-span-2 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:scale-[1.01] transition-transform">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm">
                <Users className="text-emerald-600" size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900">
                  Community Support
                </h4>
                <p className="text-slate-500 text-sm">
                  Real reviews from people in your neighborhood.
                </p>
              </div>
            </div>
            <div className="bg-emerald-600 text-white px-6 py-3 rounded-2xl font-bold text-sm text-center">
              1,200+ Reviews
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustStats;
