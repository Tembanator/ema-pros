import { Search, MapPin, Hammer, Zap, BookOpen, Truck } from "lucide-react";

export default function Hero() {
  const categories = [
    {
      name: "Repairs",
      icon: <Hammer size={18} />,
      color: "bg-orange-100 text-orange-600",
    },
    {
      name: "Electrical",
      icon: <Zap size={18} />,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      name: "Tutoring",
      icon: <BookOpen size={18} />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      name: "Delivery",
      icon: <Truck size={18} />,
      color: "bg-green-100 text-green-600",
    },
  ];

  return (
    <section className="relative pt-12 pb-20 px-6 overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-50" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          Trusted by 500+ Swazi Artisans
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
          Book the best help in <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Eswatini.
          </span>
        </h1>

        {/* Search Box */}
        <div className="bg-white p-2 md:p-3 rounded-2xl md:rounded-full shadow-2xl border border-slate-100 flex flex-col md:flex-row items-center gap-2 max-w-3xl mx-auto mb-10">
          <div className="flex items-center gap-3 px-4 w-full border-b md:border-b-0 md:border-r border-slate-100 py-2 md:py-0">
            <Search className="text-slate-400" size={20} />
            <input
              type="text"
              placeholder="What do you need help with?"
              className="bg-transparent w-full outline-none text-slate-700 font-medium"
            />
          </div>
          <div className="flex items-center gap-3 px-4 w-full py-2 md:py-0">
            <MapPin className="text-slate-400" size={20} />
            <select className="bg-transparent w-full outline-none text-slate-700 font-medium appearance-none cursor-pointer">
              <option>All Eswatini</option>
              <option>Mbabane</option>
              <option>Manzini</option>
              <option>Matsapha</option>
              <option>Ezulwini</option>
            </select>
          </div>
          <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl md:rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-200">
            Search
          </button>
        </div>

        {/* Quick Category Chips */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all font-semibold text-sm"
            >
              <span className={`p-1 rounded-md ${cat.color}`}>{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
