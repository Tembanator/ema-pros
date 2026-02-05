"use client";
import React, { useState } from "react";
import {
  ShieldCheck,
  Lock,
  Zap,
  ChevronLeft,
  Info,
  CheckCircle2,
  CreditCard,
  Smartphone,
  ArrowRight,
  HelpCircle,
} from "lucide-react";

const EscrowCheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("momo");

  return (
    <div className="min-h-screen bg-[#FDFDFF] pb-20">
      {/* --- MINIMAL HEADER --- */}
      <nav className="bg-white border-b border-slate-100 px-6 py-5 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button className="flex items-center gap-2 text-slate-500 font-bold text-sm hover:text-indigo-600 transition">
            <ChevronLeft size={20} /> Back to Chat
          </button>
          <div className="flex items-center gap-2">
            <Lock size={16} className="text-emerald-500" />
            <span className="text-xs font-black text-slate-900 uppercase tracking-widest">
              Secure Escrow
            </span>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* LEFT: PAYMENT FLOW (3 COLUMNS) */}
          <div className="lg:col-span-3 space-y-8">
            <section>
              <h2 className="text-2xl font-black text-[#1A1C2E] mb-6">
                Payment Method
              </h2>
              <div className="space-y-4">
                {/* MoMo Option */}
                <button
                  onClick={() => setPaymentMethod("momo")}
                  className={`w-full p-6 rounded-[2rem] border-2 transition-all flex items-center justify-between group ${
                    paymentMethod === "momo"
                      ? "border-indigo-600 bg-indigo-50/30 shadow-xl shadow-indigo-100"
                      : "border-slate-100 bg-white hover:border-indigo-200"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                        paymentMethod === "momo"
                          ? "bg-indigo-600 text-white"
                          : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      <Smartphone size={24} />
                    </div>
                    <div className="text-left">
                      <p className="font-black text-[#1A1C2E]">
                        MTN MoMo / E-mali
                      </p>
                      <p className="text-xs font-medium text-slate-500">
                        Pay using your mobile wallet
                      </p>
                    </div>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      paymentMethod === "momo"
                        ? "border-indigo-600"
                        : "border-slate-200"
                    }`}
                  >
                    {paymentMethod === "momo" && (
                      <div className="w-3 h-3 bg-indigo-600 rounded-full" />
                    )}
                  </div>
                </button>

                {/* Card Option */}
                <button
                  onClick={() => setPaymentMethod("card")}
                  className={`w-full p-6 rounded-[2rem] border-2 transition-all flex items-center justify-between group ${
                    paymentMethod === "card"
                      ? "border-indigo-600 bg-indigo-50/30 shadow-xl shadow-indigo-100"
                      : "border-slate-100 bg-white hover:border-indigo-200"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                        paymentMethod === "card"
                          ? "bg-indigo-600 text-white"
                          : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      <CreditCard size={24} />
                    </div>
                    <div className="text-left">
                      <p className="font-black text-[#1A1C2E]">
                        Credit / Debit Card
                      </p>
                      <p className="text-xs font-medium text-slate-500">
                        Visa, Mastercard
                      </p>
                    </div>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      paymentMethod === "card"
                        ? "border-indigo-600"
                        : "border-slate-200"
                    }`}
                  >
                    {paymentMethod === "card" && (
                      <div className="w-3 h-3 bg-indigo-600 rounded-full" />
                    )}
                  </div>
                </button>
              </div>
            </section>

            {/* THE "HOW IT WORKS" POP-OUT */}
            <section className="bg-[#1A1C2E] rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl">
              <Zap className="absolute -right-4 -top-4 w-32 h-32 text-white/5 rotate-12" />
              <div className="relative z-10">
                <h3 className="flex items-center gap-2 text-indigo-400 font-black text-xs uppercase tracking-[0.2em] mb-6">
                  <ShieldCheck size={16} /> The Escrow Guarantee
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center shrink-0 font-black text-xs">
                      1
                    </div>
                    <p className="text-sm text-slate-300 font-medium">
                      You pay now, but the money is{" "}
                      <span className="text-white font-bold">
                        locked in our vault
                      </span>
                      .
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center shrink-0 font-black text-xs">
                      2
                    </div>
                    <p className="text-sm text-slate-300 font-medium">
                      The Professional starts the work knowing the{" "}
                      <span className="text-white font-bold">
                        funds are secured
                      </span>
                      .
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center shrink-0 font-black text-xs">
                      3
                    </div>
                    <p className="text-sm text-slate-300 font-medium">
                      You release the payment{" "}
                      <span className="text-emerald-400 font-bold text-lg italic underline">
                        ONLY
                      </span>{" "}
                      after you are happy with the job.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT: ORDER SUMMARY (2 COLUMNS) */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-[2.5rem] border border-slate-100 p-8 sticky top-28 shadow-[0_20px_50px_rgba(79,70,229,0.06)]">
              <h3 className="text-lg font-black text-[#1A1C2E] mb-6">
                Order Summary
              </h3>

              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-50">
                <img
                  src="https://images.unsplash.com/photo-1540560085022-713f6f566956?auto=format&fit=crop&w=80&h=80"
                  className="w-14 h-14 rounded-2xl object-cover"
                  alt="Pro"
                />
                <div>
                  <p className="text-sm font-black text-[#1A1C2E]">
                    Sibusiso Dlamini
                  </p>
                  <p className="text-xs font-bold text-indigo-600">
                    Geyser Valve Repair
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500 font-medium">
                    Service Quote
                  </span>
                  <span className="text-[#1A1C2E] font-bold">E650.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500 font-medium flex items-center gap-1">
                    Protection Fee{" "}
                    <HelpCircle size={14} className="text-slate-300" />
                  </span>
                  <span className="text-[#1A1C2E] font-bold">E35.00</span>
                </div>
                <div className="pt-4 border-t border-slate-50 flex justify-between items-end">
                  <span className="text-[#1A1C2E] font-black uppercase text-xs tracking-widest">
                    Total to Secure
                  </span>
                  <span className="text-3xl font-black text-indigo-600">
                    E685.00
                  </span>
                </div>
              </div>

              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-5 rounded-[1.5rem] font-black text-sm flex items-center justify-center gap-3 transition-all shadow-xl shadow-indigo-200 group">
                Confirm & Secure Funds
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <div className="mt-6 flex items-center justify-center gap-2">
                <ShieldCheck size={14} className="text-emerald-500" />
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                  Encrypted & Secure Payment
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EscrowCheckoutPage;
