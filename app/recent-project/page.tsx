"use client";
import React from "react";
import {
  ArrowLeft,
  Filter,
  Download,
  Search,
  CheckCircle2,
  Star,
  MapPin,
  Calendar,
  Clock,
  ChevronRight,
  Receipt,
  Zap,
} from "lucide-react";

const RecentActivityPage = () => {
  const activities = [
    {
      id: "EP-8210",
      proName: "Thabo Gamedze",
      service: "Brake Pad Replacement",
      date: "28 Jan 2026",
      time: "02:45 PM",
      amount: "E1,200.00",
      status: "Completed",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=150&h=150",
    },
    {
      id: "EP-7742",
      proName: "Zanele Maseko",
      service: "Full House Deep Clean",
      date: "22 Jan 2026",
      time: "09:00 AM",
      amount: "E450.00",
      status: "Completed",
      rating: null, // User hasn't rated yet
      image:
        "https://images.unsplash.com/photo-1581579438747-1dc8c17bbce4?auto=format&fit=crop&w=150&h=150",
    },
    {
      id: "EP-7109",
      proName: "Sibusiso Dlamini",
      service: "Emergency Pipe Leak",
      date: "15 Jan 2026",
      time: "11:20 PM",
      amount: "E850.00",
      status: "Completed",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1540560085022-713f6f566956?auto=format&fit=crop&w=150&h=150",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFF] pb-12">
      {/* --- PREMIUM HEADER --- */}
      <header className="bg-white border-b border-slate-100 px-6 py-6 sticky top-0 z-30">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-slate-50 rounded-xl transition text-slate-400">
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-xl font-black text-[#1A1C2E]">
              Recent Activity
            </h1>
          </div>
          <div className="flex gap-2">
            <button className="p-2.5 bg-slate-50 text-slate-500 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition">
              <Search size={20} />
            </button>
            <button className="p-2.5 bg-slate-50 text-slate-500 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition">
              <Filter size={20} />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* --- SUMMARY STATS CARDS --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          <div className="bg-indigo-600 p-6 rounded-[2rem] text-white shadow-xl shadow-indigo-200">
            <p className="text-[10px] font-black uppercase tracking-widest opacity-70 mb-1">
              Total Spent
            </p>
            <h2 className="text-2xl font-black">E2,500</h2>
          </div>
          <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
              Jobs Done
            </p>
            <h2 className="text-2xl font-black text-[#1A1C2E]">12</h2>
          </div>
          <div className="hidden md:block bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
              Avg. Rating
            </p>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-black text-[#1A1C2E]">4.9</h2>
              <Star className="text-amber-500 fill-amber-500" size={18} />
            </div>
          </div>
        </div>

        {/* --- ACTIVITY TIMELINE --- */}
        <div className="space-y-8 relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-100 hidden md:block" />

          {activities.map((item) => (
            <div key={item.id} className="relative group md:pl-16">
              {/* Timeline Dot */}
              <div className="absolute left-[21px] top-8 w-2 h-2 rounded-full bg-indigo-600 border-4 border-white ring-1 ring-indigo-100 hidden md:block" />

              <div className="bg-white rounded-[2.5rem] border border-slate-100 p-6 hover:shadow-2xl hover:shadow-indigo-900/5 hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  {/* Left Side: Pro Info */}
                  <div className="flex items-center gap-5">
                    <img
                      src={item.image}
                      className="w-14 h-14 rounded-2xl object-cover"
                      alt={item.proName}
                    />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-black text-[#1A1C2E]">
                          {item.proName}
                        </h3>
                        <CheckCircle2 size={16} className="text-emerald-500" />
                      </div>
                      <p className="text-sm font-bold text-slate-500">
                        {item.service}
                      </p>
                    </div>
                  </div>

                  {/* Middle: Details */}
                  <div className="flex flex-wrap gap-4 md:gap-8">
                    <div className="space-y-1">
                      <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
                        Date & Time
                      </p>
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                        <Calendar size={14} className="text-indigo-500" />{" "}
                        {item.date}
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
                        Payment
                      </p>
                      <div className="flex items-center gap-2 text-xs font-black text-[#1A1C2E]">
                        <Zap
                          size={14}
                          className="text-amber-500 fill-amber-500"
                        />{" "}
                        {item.amount}
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Actions */}
                  <div className="flex items-center gap-3">
                    {item.rating ? (
                      <div className="flex items-center gap-1 bg-amber-50 px-3 py-1.5 rounded-full">
                        <Star
                          className="text-amber-500 fill-amber-500"
                          size={12}
                        />
                        <span className="text-xs font-black text-amber-700">
                          {item.rating}.0
                        </span>
                      </div>
                    ) : (
                      <button className="text-xs font-black text-indigo-600 border border-indigo-100 bg-indigo-50 px-4 py-1.5 rounded-full hover:bg-indigo-600 hover:text-white transition">
                        Rate Service
                      </button>
                    )}
                    <button className="p-3 bg-slate-50 text-slate-400 rounded-2xl hover:bg-indigo-50 hover:text-indigo-600 transition">
                      <Receipt size={18} />
                    </button>
                    <ChevronRight
                      size={20}
                      className="text-slate-300 group-hover:text-indigo-600 transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- BOTTOM ACTION --- */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#1A1C2E] text-white rounded-[2rem] font-black text-sm shadow-xl shadow-slate-200 hover:bg-indigo-600 transition-all">
            <Download size={18} />
            Download Annual Statement
          </button>
        </div>
      </main>
    </div>
  );
};

export default RecentActivityPage;
