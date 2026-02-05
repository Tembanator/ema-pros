import React from "react";
import { UserPlus, MessageSquare, ShieldCheck, Wallet } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      title: "Find a Pro",
      desc: "Search by category or location. Browse real portfolios and read verified reviews from other Swatis.",
      icon: <UserPlus className="text-blue-600" size={28} />,
      color: "bg-blue-50",
      dotColor: "bg-blue-600",
    },
    {
      title: "Chat & Quote",
      desc: "Message pros directly. Discuss your job details and get a transparent price—no hidden costs.",
      icon: <MessageSquare className="text-purple-600" size={28} />,
      color: "bg-purple-50",
      dotColor: "bg-purple-600",
    },
    {
      title: "Secure with MoMo",
      desc: "Pay the job total into our secure holding account via MTN MoMo or E-mali. We keep your money safe.",
      icon: <Wallet className="text-amber-600" size={28} />,
      color: "bg-amber-50",
      dotColor: "bg-amber-600",
    },
    {
      title: "Release & Rate",
      desc: "Once the job is done to your satisfaction, we release the funds to the pro. Rate them to help others!",
      icon: <ShieldCheck className="text-green-600" size={28} />,
      color: "bg-green-50",
      dotColor: "bg-green-600",
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-4">
          <div className="max-w-xl">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">
              The Process
            </h2>
            <p className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Safety first, <br />
              excellence second.
            </p>
          </div>
          <p className="text-slate-500 text-lg md:max-w-xs">
            We’ve built a secure system to ensure you never lose money to
            unreliable contractors again.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="group">
                {/* Icon Circle */}
                <div
                  className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:-translate-y-2 duration-300 shadow-sm`}
                >
                  {step.icon}
                </div>

                {/* Step Number & Line */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-3 h-3 rounded-full ${step.dotColor}`} />
                  <span className="text-xs font-black text-slate-400 uppercase tracking-widest">
                    Step 0{index + 1}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badge (Bottom) */}
        <div className="mt-20 p-8 rounded-[2rem] bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
              <ShieldCheck className="text-blue-400" />
            </div>
            <div>
              <h4 className="font-bold text-lg text-white">
                The EmaPros Guarantee
              </h4>
              <p className="text-slate-400 text-sm">
                Funds are held in escrow until you approve the work.
              </p>
            </div>
          </div>
          <button className="whitespace-nowrap bg-blue-600 hover:bg-blue-500 px-8 py-3 rounded-xl font-bold transition-all">
            Learn about Safety
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
