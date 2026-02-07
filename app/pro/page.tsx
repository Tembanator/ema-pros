"use client";
import {
  TrendingUp,
  Star,
  Wallet,
  Clock,
  CheckCircle2,
  MessageCircle,
  Calendar,
  Zap,
  Bell,
  LayoutDashboard,
  Briefcase,
  ArrowUpRight,
  Settings,
  MapPin,
  Search,
  MoreHorizontal,
} from "lucide-react";

const ProDashboard = () => {
  const activeJobs = [
    {
      id: "EP-9921",
      client: "Gugu Nkosi",
      service: "Geyser Valve Repair",
      location: "Mbabane, Sec 4",
      amount: "E650.00",
      timeLeft: "45 mins remaining",
    },
  ];

  const recentLeads = [
    { name: "Musa D.", service: "Pipe Leak", time: "2m ago", price: "E400" },
    {
      name: "Sarah M.",
      service: "Kitchen Sink",
      time: "15m ago",
      price: "E350",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F1F5F9] flex font-sans selection:bg-indigo-100 selection:text-indigo-700 text-slate-600">
      {/* --- SIDEBAR: Clean White with Subtle Border --- */}
      <aside className="hidden lg:flex w-64 bg-white flex-col p-6 sticky top-0 h-screen border-r border-slate-200">
        <div className="flex items-center gap-2.5 mb-10 px-2">
          <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-100">
            <Zap size={18} className="text-white fill-white" />
          </div>
          <span className="text-slate-900 font-bold text-xl tracking-tight">
            EmaPros
          </span>
        </div>

        <nav className="space-y-1 flex-1">
          {[
            { icon: LayoutDashboard, label: "Overview", active: true },
            { icon: Briefcase, label: "My Jobs", active: false },
            { icon: MessageCircle, label: "Messages", active: false, badge: 3 },
            { icon: Calendar, label: "Schedule", active: false },
            { icon: Wallet, label: "Payouts", active: false },
          ].map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                item.active
                  ? "bg-slate-900 text-white shadow-md shadow-slate-200"
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <div className="flex items-center gap-3 text-sm font-medium">
                <item.icon size={18} strokeWidth={item.active ? 2.5 : 2} />
                {item.label}
              </div>
              {item.badge && (
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${item.active ? "bg-indigo-500 text-white" : "bg-indigo-100 text-indigo-700"}`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="mt-auto p-4 bg-slate-50 rounded-2xl border border-slate-200">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 bg-emerald-500 rounded-full" />
            <span className="text-[11px] font-bold text-slate-700 uppercase tracking-tight">
              System Online
            </span>
          </div>
          <p className="text-[10px] text-slate-400 font-medium">
            Verified Professional
          </p>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 p-8 lg:p-12 overflow-y-auto">
        <header className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
              Welcome, Sibusiso
            </h1>
            <p className="text-sm font-medium text-slate-500 mt-1">
              You have{" "}
              <span className="text-indigo-600 font-bold">3 new leads</span>{" "}
              today.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative group hidden md:block">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                size={16}
              />
              <input
                type="text"
                placeholder="Search jobs..."
                className="bg-white border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none w-56 transition-all shadow-sm"
              />
            </div>
            <button className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-500 hover:text-indigo-600 hover:border-indigo-500 transition-all shadow-sm relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 border-2 border-white rounded-full"></span>
            </button>
            <div className="h-10 w-[1px] bg-slate-200 mx-1" />
            <img
              src="https://images.unsplash.com/photo-1540560085022-713f6f566956?auto=format&fit=crop&w=100&h=100"
              className="w-10 h-10 rounded-xl object-cover border border-slate-200 shadow-sm"
              alt="Profile"
            />
          </div>
        </header>

        {/* --- STATS: White Cards on Slate Background --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            {
              label: "Earnings",
              value: "E12,450",
              color: "text-emerald-600",
              bg: "bg-emerald-50",
              icon: Wallet,
            },
            {
              label: "Active Jobs",
              value: "02",
              color: "text-indigo-600",
              bg: "bg-indigo-50",
              icon: Clock,
            },
            {
              label: "Rating",
              value: "4.9",
              color: "text-amber-600",
              bg: "bg-amber-50",
              icon: Star,
            },
            {
              label: "Success",
              value: "98%",
              color: "text-blue-600",
              bg: "bg-blue-50",
              icon: TrendingUp,
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-slate-300 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`${stat.bg} ${stat.color} p-2.5 rounded-xl transition-transform group-hover:scale-110`}
                >
                  <stat.icon size={20} strokeWidth={2.5} />
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-slate-300 group-hover:text-indigo-500"
                />
              </div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                {stat.label}
              </p>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                {stat.value}
              </h3>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* MAIN SECTION */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
              <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest">
                  Active Assignment
                </h2>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                  <span className="text-[10px] font-bold text-emerald-600 uppercase">
                    On Site
                  </span>
                </div>
              </div>

              {activeJobs.map((job) => (
                <div
                  key={job.id}
                  className="p-8 flex flex-col md:flex-row items-center justify-between gap-8"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-indigo-600">
                      <MapPin size={24} strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-slate-900 mb-0.5">
                        {job.client}
                      </h4>
                      <p className="text-xs font-medium text-slate-500">
                        {job.service} •{" "}
                        <span className="text-indigo-600 font-bold">
                          {job.id}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-10">
                    <div className="text-center md:text-right">
                      <p className="text-2xl font-bold text-slate-900">
                        {job.amount}
                      </p>
                      <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-tighter">
                        {job.timeLeft}
                      </p>
                    </div>
                    <button className="bg-slate-900 text-white px-6 py-3 rounded-xl text-xs font-bold hover:bg-indigo-600 transition-all shadow-lg shadow-slate-200">
                      Console
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* LEADS PANEL */}
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest">
                  Incoming Leads
                </h2>
                <Zap size={14} className="text-amber-500 fill-amber-500" />
              </div>
              <div className="space-y-5">
                {recentLeads.map((lead, i) => (
                  <div
                    key={i}
                    className="group p-4 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all cursor-pointer"
                  >
                    <div className="flex justify-between items-start mb-1">
                      <p className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {lead.name}
                      </p>
                      <span className="text-[10px] font-medium text-slate-400">
                        {lead.time}
                      </span>
                    </div>
                    <p className="text-xs font-medium text-slate-500 mb-4">
                      {lead.service} •{" "}
                      <span className="text-slate-900 font-bold">
                        {lead.price}
                      </span>
                    </p>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-white border border-slate-200 text-slate-900 py-2 rounded-lg text-[10px] font-bold uppercase hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all shadow-sm">
                        Accept
                      </button>
                      <button className="px-2.5 text-slate-300 hover:text-rose-500 transition-colors">
                        <XCircle size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const XCircle = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="m15 9-6 6" />
    <path d="m9 9 6 6" />
  </svg>
);

export default ProDashboard;
