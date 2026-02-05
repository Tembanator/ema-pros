"use client";
import React from "react";
import {
  Clock,
  CheckCircle2,
  Wallet,
  Zap,
  Calendar,
  MapPin,
  ChevronRight,
  ShieldCheck,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";

const PopOutDashboard = () => {
  const activeJobs = [
    {
      id: "EP-9921",
      proName: "Sibusiso Dlamini",
      service: "Geyser Valve Replacement",
      price: "E650.00",
      date: "Today, 2:00 PM",
      image:
        "https://images.unsplash.com/photo-1540560085022-713f6f566956?auto=format&fit=crop&w=150&h=150",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F7FF] pb-24 font-sans">
      {/* --- HERO HEADER --- */}
      <header className="bg-[#1A1C2E] pt-12 pb-24 px-6 rounded-b-[4rem] shadow-2xl">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h1 className="text-4xl font-black text-white tracking-tight mb-2">
              My Bookings
            </h1>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 py-1 px-3 bg-indigo-500/20 rounded-full border border-indigo-500/30 text-indigo-300 text-[10px] font-black uppercase tracking-widest">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />{" "}
                2 Active Projects
              </span>
            </div>
          </div>

          {/* POP-OUT BALANCE CARD */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-[#252841] border border-white/10 p-6 rounded-[2.5rem] flex items-center gap-5 shadow-2xl">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-inner">
                <Wallet size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black text-indigo-300 uppercase tracking-widest mb-1">
                  Escrow Balance
                </p>
                <p className="text-3xl font-black text-white">E650.00</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- MAIN CONTENT: SHIFTED UP --- */}
      <main className="max-w-5xl mx-auto px-6 -mt-12">
        <div className="space-y-8">
          {/* SECTION: ACTIVE JOBS (THE POP-OUT CARDS) */}
          <div className="space-y-4">
            <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-6">
              Current Priority
            </h2>

            {activeJobs.map((job) => (
              <div key={job.id} className="relative group">
                {/* The "Glow" behind the card */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-[3rem] blur opacity-0 group-hover:opacity-10 transition duration-500"></div>

                <div className="relative bg-white rounded-[3rem] p-4 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white hover:border-indigo-100 transition-all duration-300 hover:-translate-y-2">
                  <div className="flex flex-col md:flex-row md:items-center gap-8">
                    {/* Pro Image with Status Pulse */}
                    <div className="relative shrink-0 self-center md:self-auto">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-[2.5rem] overflow-hidden ring-4 ring-slate-50">
                        <img
                          src={job.image}
                          className="w-full h-full object-cover"
                          alt={job.proName}
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-2 rounded-2xl border-4 border-white shadow-lg animate-bounce">
                        <Zap size={18} className="fill-white" />
                      </div>
                    </div>

                    {/* Job Info */}
                    <div className="flex-1 space-y-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="bg-indigo-50 text-indigo-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-100">
                          In Progress
                        </span>
                        <span className="flex items-center gap-1.5 text-slate-400 text-xs font-bold">
                          <MapPin size={14} /> {job.id}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-2xl font-black text-[#1A1C2E] leading-tight mb-1">
                          {job.service}
                        </h3>
                        <p className="text-slate-500 font-medium flex items-center gap-2">
                          with{" "}
                          <span className="text-[#1A1C2E] font-bold">
                            {job.proName}
                          </span>
                          <ShieldCheck size={16} className="text-blue-500" />
                        </p>
                      </div>

                      <div className="flex items-center gap-6 pt-2">
                        <div className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase">
                          <Calendar size={14} className="text-indigo-500" />{" "}
                          {job.date}
                        </div>
                        <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase">
                          <CheckCircle2 size={14} /> MoMo Secured
                        </div>
                      </div>
                    </div>

                    {/* Action Side */}
                    <div className="flex flex-col items-center md:items-end gap-4 min-w-[180px]">
                      <div className="text-center md:text-right">
                        <p className="text-3xl font-black text-[#1A1C2E]">
                          {job.price}
                        </p>
                        <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
                          Fixed Quote
                        </p>
                      </div>
                      <div className="flex gap-2 w-full">
                        <button className="flex-1 bg-[#1A1C2E] text-white p-4 rounded-2xl font-black text-xs hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-2">
                          Chat <MessageSquare size={16} />
                        </button>
                        <button className="bg-white border border-slate-200 text-slate-900 p-4 rounded-2xl hover:bg-slate-50 transition shadow-sm">
                          <ArrowUpRight size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* SECONDARY SECTION: RECENT ACTIVITY */}
          <div className="bg-white/50 backdrop-blur-sm rounded-[3rem] p-8 border border-white/50">
            <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6">
              Recent History
            </h2>
            <div className="space-y-4">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 bg-white/40 rounded-2xl hover:bg-white transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-500 transition-colors">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-black text-[#1A1C2E]">
                        Home Cleaning Service
                      </p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">
                        24 Jan • E450.00
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    size={18}
                    className="text-slate-300 group-hover:text-indigo-600 transition-transform group-hover:translate-x-1"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PopOutDashboard;
