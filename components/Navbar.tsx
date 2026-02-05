import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-200">
          E
        </div>
        <span className="text-2xl font-black tracking-tighter italic text-blue-950">
          EMA<span className="text-blue-600">PROS</span>
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
        <a href="#" className="hover:text-blue-600 transition">
          How it works
        </a>
        <a href="#" className="hover:text-blue-600 transition">
          Find Pros
        </a>
        <LoginLink>Sign in</LoginLink>
        <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full hover:bg-blue-600 transition shadow-md">
          Register as Pro
        </button>
      </div>
    </nav>
  );
}
