import { syncUser } from "@/Lib/actions/syncUser";
import {
  Search,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  SlidersHorizontal,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // Better for performance

// 1. FORCE DYNAMIC RENDERING (Fixes the build error)
export const dynamic = "force-dynamic";

const SearchDiscoveryPage = async () => {
  // syncUser calls Kinde which needs access to request cookies/headers
  const dbUser = await syncUser();

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
    // ... other pros
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* ... rest of your header code ... */}

      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar ... */}

          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pros.map((pro) => (
                <Link
                  href={`/search/${pro.id}/pro`} // Added leading slash for safety
                  key={pro.id}
                  className="bg-white rounded-[2.5rem] p-6 border border-slate-200 hover:border-indigo-400 hover:shadow-[0_20px_50px_rgba(79,70,229,0.12)] transition-all group"
                >
                  <div className="flex gap-6">
                    <div className="relative shrink-0">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-[2rem] overflow-hidden ring-4 ring-slate-100 group-hover:ring-indigo-100 transition-all">
                        {/* 2. ADD referrerPolicy to handle external image loading during build */}
                        <img
                          src={pro.image}
                          alt={pro.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      {pro.verified && (
                        <div className="absolute -top-1 -right-1 bg-indigo-700 text-white p-1.5 rounded-xl border-4 border-white shadow-lg">
                          <ShieldCheck size={16} />
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-indigo-700 font-bold text-[10px] uppercase tracking-[0.2em] mb-1">
                        {pro.category}
                      </p>
                      <h3 className="text-lg font-bold text-slate-900 truncate">
                        {pro.name}
                      </h3>
                      {/* ... rest of your pro card info ... */}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SearchDiscoveryPage;
