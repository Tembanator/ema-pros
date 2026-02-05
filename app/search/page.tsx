"use client";
import Navbar from "@/components/Navbar";
import {
  Search,
  MapPin,
  Star,
  ShieldCheck,
  CheckCircle2,
  SlidersHorizontal,
  ChevronRight,
} from "lucide-react";

const SearchDiscoveryPage = () => {
  const pros = [
    {
      id: 1,
      name: "Sibusiso Dlamini",
      category: "Master Plumber",
      location: "Mbabane",
      rating: 4.9,
      reviews: 124,
      verified: true,
      price: "From E350",
      image:
        "https://images.unsplash.com/photo-1540560085022-713f6f566956?auto=format&fit=crop&w=200&h=200",
    },
    {
      id: 2,
      name: "Nomsa Simelane",
      category: "Maths & Physics Tutor",
      location: "Manzini",
      rating: 5.0,
      reviews: 89,
      verified: true,
      price: "E150/hr",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200",
    },
    {
      id: 3,
      name: "Zanele Maseko",
      category: "Professional Cleaner",
      location: "Ezulwini",
      rating: 4.7,
      reviews: 45,
      verified: false,
      price: "From E200",
      image:
        "https://images.unsplash.com/photo-1581579438747-1dc8c17bbce4?auto=format&fit=crop&w=200&h=200",
    },
    {
      id: 4,
      name: "Thabo Gamedze",
      category: "Auto Mechanic",
      location: "Matsapha",
      rating: 4.8,
      reviews: 210,
      verified: true,
      price: "Quote Required",
      image:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=200&h=200",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-[#FDFDFF]">
        <Navbar />
        {/* Top Search Header */}
        <div className="bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-30 px-6 py-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center">
            <div className="relative w-full md:w-1/2 group">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400 group-focus-within:text-indigo-600 transition-colors"
                size={18}
              />
              <input
                type="text"
                placeholder="Search services in Eswatini..."
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:bg-white focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all text-slate-700 placeholder:text-slate-400"
              />
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-2xl font-bold text-sm text-slate-700 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all">
                <MapPin size={18} className="text-indigo-600" />
                Location
              </button>
              <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-[#1A1C2E] text-white rounded-2xl font-bold text-sm hover:bg-[#2D3154] transition-all shadow-lg shadow-indigo-900/10">
                <SlidersHorizontal size={18} />
                Filters
              </button>
            </div>
          </div>
        </div>

        <main className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Sidebar Filters (Desktop) */}
            <aside className="hidden lg:block w-64 space-y-10">
              <div>
                <h3 className="font-bold text-[#1A1C2E] mb-5 text-sm uppercase tracking-widest">
                  Regions
                </h3>
                <div className="space-y-3">
                  {[
                    "All Eswatini",
                    "Hhohho",
                    "Manzini",
                    "Lubombo",
                    "Shiselweni",
                  ].map((region, i) => (
                    <label
                      key={region}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="radio"
                        name="region"
                        defaultChecked={i === 0}
                        className="w-4 h-4 border-slate-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="text-slate-500 group-hover:text-indigo-600 font-medium transition">
                        {region}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-slate-100">
                <h3 className="font-bold text-[#1A1C2E] mb-5 text-sm uppercase tracking-widest">
                  Trust Level
                </h3>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input
                      type="checkbox"
                      className="peer w-5 h-5 rounded-lg border-slate-300 text-indigo-600 focus:ring-indigo-500 transition-all"
                    />
                  </div>
                  <span className="text-slate-500 group-hover:text-indigo-600 font-medium transition">
                    Verified Pros Only
                  </span>
                </label>
              </div>
            </aside>

            {/* Results Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-[#1A1C2E]">
                  {pros.length}{" "}
                  <span className="text-slate-400 font-medium italic">
                    results
                  </span>
                </h2>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">
                    Sort:
                  </span>
                  <select className="bg-transparent text-sm font-bold text-indigo-600 outline-none cursor-pointer">
                    <option>Recommended</option>
                    <option>Price: Low to High</option>
                    <option>Ratings</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pros.map((pro) => (
                  <div
                    key={pro.id}
                    className="bg-white rounded-[2.5rem] p-6 border border-slate-100 hover:border-indigo-100 hover:shadow-[0_20px_50px_rgba(79,70,229,0.06)] transition-all group cursor-pointer relative"
                  >
                    <div className="flex gap-6">
                      {/* Image Container */}
                      <div className="relative shrink-0">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-[2rem] overflow-hidden ring-4 ring-slate-50 group-hover:ring-indigo-50 transition-all">
                          <img
                            src={pro.image}
                            alt={pro.name}
                            className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                          />
                        </div>
                        {pro.verified && (
                          <div className="absolute -top-1 -right-1 bg-indigo-600 text-white p-1.5 rounded-xl border-4 border-white shadow-lg">
                            <ShieldCheck size={16} />
                          </div>
                        )}
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start gap-2 mb-2">
                          <div className="truncate">
                            <p className="text-indigo-600 font-bold text-[10px] uppercase tracking-[0.2em] mb-1">
                              {pro.category}
                            </p>
                            <h3 className="text-lg font-bold text-[#1A1C2E] truncate">
                              {pro.name}
                            </h3>
                          </div>
                          <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg shrink-0">
                            <Star
                              className="text-amber-500 fill-amber-500"
                              size={12}
                            />
                            <span className="text-xs font-black text-amber-700">
                              {pro.rating}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-slate-400 text-xs font-medium mb-4">
                          <span className="flex items-center gap-1">
                            <MapPin size={14} className="text-slate-300" />{" "}
                            {pro.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <CheckCircle2
                              size={14}
                              className="text-emerald-500"
                            />{" "}
                            {pro.reviews} Jobs
                          </span>
                        </div>

                        <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                          <div>
                            <p className="text-[10px] font-bold text-slate-300 uppercase">
                              Starts from
                            </p>
                            <span className="text-[#1A1C2E] font-black text-lg uppercase tracking-tighter">
                              {pro.price}
                            </span>
                          </div>
                          <button className="bg-slate-50 text-indigo-600 p-3 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                            <ChevronRight size={20} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default SearchDiscoveryPage;
