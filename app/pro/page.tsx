"use client";
import React, { useState } from "react";
import {
  ShieldCheck,
  Star,
  MapPin,
  CheckCircle2,
  MessageCircle,
  Phone,
  ArrowLeft,
  Image as ImageIcon,
  Clock,
  Award,
  Share2,
  Heart,
  Zap,
} from "lucide-react";

const ProProfilePage = () => {
  const [activeTab, setActiveTab] = useState("gallery");

  const pro = {
    name: "Sibusiso Dlamini",
    title: "Master Plumber & Pipe Specialist",
    location: "Mbabane, Hhohho",
    rating: 4.9,
    reviewsCount: 124,
    verified: true,
    momoNumber: "76****89",
    joinedDate: "Member since 2023",
    bio: "Certified plumber with over 10 years of experience in residential and commercial repairs. Specialized in geyser installations, leak detection, and emergency repairs across the Hhohho region.",
    skills: [
      "Geyser Repair",
      "Pipe Fitting",
      "Emergency Plumbing",
      "Solar Heating",
    ],
    pricing: [
      { service: "Call-out Fee (Inspection)", price: "E200" },
      { service: "Standard Pipe Repair", price: "E450" },
      { service: "Geyser Installation", price: "E1,200" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=600",
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=600",
      "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=600",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600",
    ],
  };

  return (
    <div className="min-h-screen bg-[#FDFDFF] pb-20">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition font-bold text-sm">
            <ArrowLeft size={18} /> Back to Search
          </button>
          <div className="flex gap-3">
            <button className="p-2.5 rounded-xl border border-slate-100 hover:bg-slate-50 transition text-slate-400">
              <Share2 size={18} />
            </button>
            <button className="p-2.5 rounded-xl border border-slate-100 hover:bg-slate-50 transition text-slate-400">
              <Heart size={18} />
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column: Pro Info & Gallery */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1540560085022-713f6f566956?auto=format&fit=crop&w=300&h=300"
                  className="w-28 h-28 md:w-32 md:h-32 rounded-[2.5rem] object-cover ring-4 ring-indigo-50"
                  alt={pro.name}
                />
                <div className="absolute -bottom-2 -right-2 bg-indigo-600 text-white p-2 rounded-2xl border-4 border-[#FDFDFF]">
                  <ShieldCheck size={20} />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-black text-[#1A1C2E] tracking-tight">
                    {pro.name}
                  </h1>
                </div>
                <p className="text-indigo-600 font-bold mb-3">{pro.title}</p>
                <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={16} /> {pro.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={16} /> {pro.joinedDate}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={16} className="text-emerald-500" /> 124
                    Jobs Done
                  </span>
                </div>
              </div>
            </div>

            {/* Tabs Navigation */}
            <div className="flex border-b border-slate-100 gap-8">
              {["Gallery", "About", "Reviews"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  className={`pb-4 text-sm font-black uppercase tracking-widest transition-all relative ${activeTab === tab.toLowerCase() ? "text-indigo-600" : "text-slate-400"}`}
                >
                  {tab}
                  {activeTab === tab.toLowerCase() && (
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-indigo-600 rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Content Switcher */}
            <div className="pt-4">
              {activeTab === "gallery" && (
                <div className="grid grid-cols-2 gap-4">
                  {pro.gallery.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      className="rounded-3xl h-48 md:h-64 w-full object-cover hover:opacity-90 transition cursor-pointer"
                      alt="Work sample"
                    />
                  ))}
                  <div className="bg-slate-50 rounded-3xl h-48 md:h-64 flex flex-col items-center justify-center text-slate-400 border-2 border-dashed border-slate-200">
                    <ImageIcon size={32} className="mb-2 opacity-20" />
                    <span className="font-bold text-xs uppercase tracking-tighter">
                      View All 12 Photos
                    </span>
                  </div>
                </div>
              )}

              {activeTab === "about" && (
                <div className="space-y-6 max-w-xl text-slate-600 leading-relaxed">
                  <p>{pro.bio}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {pro.skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center gap-2 bg-indigo-50/50 p-3 rounded-xl border border-indigo-100/50"
                      >
                        <Award size={16} className="text-indigo-600" />
                        <span className="text-sm font-bold text-indigo-900">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-2xl shadow-indigo-900/5 sticky top-28">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                    Service starting at
                  </p>
                  <span className="text-3xl font-black text-[#1A1C2E]">
                    E350
                  </span>
                </div>
                <div className="bg-amber-50 px-3 py-2 rounded-2xl flex flex-col items-center">
                  <div className="flex items-center gap-1">
                    <Star className="text-amber-500 fill-amber-500" size={14} />
                    <span className="text-sm font-black text-amber-700">
                      4.9
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-amber-600 uppercase">
                    Top Pro
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {pro.pricing.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center text-sm"
                  >
                    <span className="text-slate-500 font-medium">
                      {item.service}
                    </span>
                    <span className="text-[#1A1C2E] font-bold">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-3 transition-all shadow-lg shadow-indigo-200">
                  <Zap size={18} className="fill-white" />
                  Book via MoMo
                </button>
                <button className="w-full bg-[#1A1C2E] hover:bg-[#2D3154] text-white py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-3 transition-all shadow-lg shadow-slate-200">
                  <MessageCircle size={18} />
                  Chat with Sibusiso
                </button>
                <button className="w-full flex items-center justify-center gap-2 py-4 text-slate-400 font-bold text-xs uppercase tracking-widest hover:text-indigo-600 transition">
                  <Phone size={14} /> Call Professional
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-50">
                <div className="flex items-center gap-3 text-[11px] font-bold text-emerald-600 bg-emerald-50 p-3 rounded-xl">
                  <CheckCircle2 size={16} />
                  <span>Money held securely until job is done</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProProfilePage;
