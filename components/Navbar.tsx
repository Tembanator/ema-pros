import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import { Zap, Menu } from "lucide-react"; // Matching your ProDashboard icons

export default async function Navbar() {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-2 border-slate-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LOGO: Matching the Dashboard Brand Style */}
        <Link href={"/"} className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-[0_0_15px_rgba(79,70,229,0.3)] group-hover:scale-110 transition-transform">
            <Zap size={22} className="fill-white" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-[#020617] uppercase italic">
            Ema<span className="text-indigo-600">Pros</span>
          </span>
        </Link>

        {/* NAVIGATION: High Contrast Links */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8 text-sm font-black uppercase tracking-widest text-slate-500">
            <Link href="#" className="hover:text-indigo-600 transition-colors">
              How it works
            </Link>
            <Link
              href="/search"
              className="hover:text-indigo-600 transition-colors"
            >
              Find Pros
            </Link>
          </div>

          {/* DIVIDER */}
          <div className="h-6 w-[2px] bg-slate-200 mx-2" />

          <div className="flex items-center gap-4">
            {isUserAuthenticated ? (
              <div className="flex items-center gap-4">
                <LogoutLink className="text-sm font-black uppercase tracking-widest text-rose-600 hover:text-rose-700 transition-colors">
                  Logout
                </LogoutLink>
                <Link
                  href="/pro"
                  className="bg-[#020617] text-white px-7 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-lg active:scale-95"
                >
                  Pro
                </Link>
              </div>
            ) : (
              <div className="flex items-center gap-6">
                <LoginLink className="text-sm font-black uppercase tracking-widest text-[#020617] hover:text-indigo-600 transition-colors">
                  Sign in
                </LoginLink>
              </div>
            )}
          </div>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button className="md:hidden p-2 text-[#020617]">
          <Menu size={28} strokeWidth={3} />
        </button>
      </div>
    </nav>
  );
}
