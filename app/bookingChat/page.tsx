"use client";
import React, { useState } from "react";
import {
  Send,
  Image as ImageIcon,
  Plus,
  ChevronLeft,
  Info,
  MoreVertical,
  ShieldCheck,
  Zap,
  X,
  Paperclip,
  CheckCircle2,
} from "lucide-react";

const ChatBookingPage = () => {
  const [message, setMessage] = useState("");
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  const messages = [
    {
      id: 1,
      sender: "pro",
      text: "Sawubona! I saw your request for the geyser repair in Mbabane. Could you send a photo of the leaking valve?",
      time: "10:05 AM",
    },
    {
      id: 2,
      sender: "user",
      text: "Sure, here it is. It started leaking this morning.",
      time: "10:07 AM",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400",
    },
    {
      id: 3,
      sender: "pro",
      text: "I see the issue. I'll need to replace the pressure valve. I can head over by 2:00 PM today.",
      time: "10:10 AM",
    },
    {
      id: 4,
      sender: "pro",
      type: "quote",
      title: "Geyser Valve Replacement",
      price: "E650.00",
      description: "Includes new pressure valve + 1 hour labor.",
      time: "10:11 AM",
    },
  ];

  return (
    <div className="flex flex-col h-screen bg-[#FDFDFF]">
      {/* --- CHAT HEADER --- */}
      <header className="bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-4">
          <button className="p-2 -ml-2 hover:bg-slate-50 rounded-full transition">
            <ChevronLeft size={24} className="text-slate-600" />
          </button>
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1540560085022-713f6f566956?auto=format&fit=crop&w=100&h=100"
                className="w-10 h-10 rounded-full object-cover"
                alt="Sibusiso"
              />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
            </div>
            <div>
              <h1 className="text-sm font-black text-[#1A1C2E]">
                Sibusiso Dlamini
              </h1>
              <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest flex items-center gap-1">
                <ShieldCheck size={12} /> Verified Pro
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 text-slate-400 hover:text-indigo-600">
            <Info size={20} />
          </button>
          <button className="p-2 text-slate-400 hover:text-indigo-600">
            <MoreVertical size={20} />
          </button>
        </div>
      </header>

      {/* --- CHAT AREA --- */}
      <main className="flex-1 overflow-y-auto p-6 space-y-6 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] ${msg.type === "quote" ? "w-full max-w-sm" : ""}`}
            >
              {/* Message Bubble */}
              {msg.text && (
                <div
                  className={`p-4 rounded-[2rem] text-sm font-medium shadow-sm mb-1 ${
                    msg.sender === "user"
                      ? "bg-indigo-600 text-white rounded-tr-none"
                      : "bg-white text-slate-700 border border-slate-100 rounded-tl-none"
                  }`}
                >
                  {msg.text}
                </div>
              )}

              {/* Image Attachment */}
              {msg.image && (
                <img
                  src={msg.image}
                  className="rounded-3xl border-4 border-white shadow-md mb-1 max-w-xs"
                  alt="Attached"
                />
              )}

              {/* Interactive Quote Card */}
              {msg.type === "quote" && (
                <div className="bg-white border-2 border-indigo-600 rounded-[2.5rem] overflow-hidden shadow-xl shadow-indigo-100">
                  <div className="bg-indigo-600 p-4 text-white flex justify-between items-center">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                      Official Quote
                    </span>
                    <Zap size={16} className="fill-white" />
                  </div>
                  <div className="p-6">
                    <h4 className="font-black text-xl text-[#1A1C2E] mb-1">
                      {msg.title}
                    </h4>
                    <p className="text-slate-500 text-xs mb-4">
                      {msg.description}
                    </p>
                    <div className="flex items-baseline gap-2 mb-6">
                      <span className="text-3xl font-black text-indigo-600">
                        {msg.price}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">
                        Total Incl. Fees
                      </span>
                    </div>
                    <button className="w-full bg-[#1A1C2E] text-white py-4 rounded-2xl font-black text-sm hover:bg-indigo-600 transition-all flex items-center justify-center gap-2">
                      Accept & Pay with MoMo
                    </button>
                  </div>
                </div>
              )}

              <p
                className={`text-[10px] font-bold text-slate-400 px-2 ${msg.sender === "user" ? "text-right" : "text-left"}`}
              >
                {msg.time}
              </p>
            </div>
          </div>
        ))}
      </main>

      {/* --- INPUT AREA --- */}
      <footer className="bg-white p-4 border-t border-slate-100">
        <div className="max-w-5xl mx-auto">
          {/* Trust Tip */}
          <div className="flex items-center gap-2 mb-3 px-2">
            <CheckCircle2 size={14} className="text-emerald-500" />
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
              EmaPros Protection: Always pay through the app to keep your money
              safe.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-slate-50 p-2 rounded-[2rem] border border-slate-100 focus-within:border-indigo-200 focus-within:bg-white transition-all">
            <button className="p-3 text-slate-400 hover:text-indigo-600 transition">
              <Plus size={20} />
            </button>
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-transparent outline-none text-sm font-medium text-slate-700 py-2"
            />
            <button className="p-3 text-slate-400 hover:text-indigo-600 transition">
              <ImageIcon size={20} />
            </button>
            <button className="bg-indigo-600 p-3 rounded-full text-white shadow-lg shadow-indigo-200 hover:scale-110 transition-transform">
              <Send size={20} className="fill-white" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ChatBookingPage;
