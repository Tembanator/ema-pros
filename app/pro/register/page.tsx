"use client";
import React, { FormEvent, useState } from "react";
import { showToast } from "nextjs-toast-notify";
import {
  Zap,
  User as UserIcon,
  MapPin,
  Smartphone,
  DollarSign,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Briefcase,
  Wrench,
  AlertCircle,
} from "lucide-react";
import { proCategories } from "@/Lib/constants";
import { registerProAction } from "@/Lib/actions/pro";
import { redirect } from "next/navigation";

// --- Types ---
interface LocationData {
  region: "Hhohho" | "Manzini" | "Lubombo" | "Shiselweni";
  town: string;
}

interface ProProfile {
  category: string;
  title: string;
  bio: string;
  skills: string[];
  hourlyRate: string;
  momoAccepted: boolean;
}

interface FormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  location: LocationData;
  proProfile: ProProfile;
}

const ProRegistrationPage: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phoneNumber: "",
    email: "",
    location: { region: "Hhohho", town: "" },
    proProfile: {
      category: "",
      title: "",
      bio: "",
      skills: [],
      hourlyRate: "",
      momoAccepted: true,
    },
  });

  const regions: LocationData["region"][] = [
    "Hhohho",
    "Manzini",
    "Lubombo",
    "Shiselweni",
  ];

  // --- Validation Logic ---
  const validateStep = () => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.fullName.trim())
        newErrors.fullName = "Full name is required";
      if (!/^7[6-9]\d{6}$/.test(formData.phoneNumber)) {
        newErrors.phoneNumber =
          "Enter a valid 8-digit Eswatini MoMo number (7XXXXXXX)";
      }
    }

    if (step === 2) {
      if (!formData.location.town.trim())
        newErrors.town = "Town/Area is required to help clients find you";
    }

    if (step === 3) {
      if (!formData.proProfile.category)
        newErrors.category = "Please select a trade category";
      if (
        !formData.proProfile.hourlyRate ||
        Number(formData.proProfile.hourlyRate) <= 0
      ) {
        newErrors.hourlyRate = "Enter a valid hourly rate";
      }
      if (!formData.proProfile.title.trim())
        newErrors.title = "A professional title is required";
      if (formData.proProfile.bio.length < 20)
        newErrors.bio = "Bio must be at least 20 characters";
      if (formData.proProfile.skills.length === 0)
        newErrors.skills = "List at least one skill";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) setStep(step + 1);
  };

  const handleInputChange = (
    section: "location" | "proProfile" | null,
    field: string,
    value: string,
  ) => {
    // Clear error when user starts typing
    if (errors[field] || errors[field === "town" ? "town" : ""]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }

    if (section) {
      setFormData((prev) => ({
        ...prev,
        [section]: { ...prev[section], [field]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [field]: value }));
    }
  };

  const handleSkillsChange = (value: string) => {
    const skillsArray = value
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s !== "");
    setFormData((prev) => ({
      ...prev,
      proProfile: { ...prev.proProfile, skills: skillsArray },
    }));
    if (skillsArray.length > 0) setErrors((prev) => ({ ...prev, skills: "" }));
  };

  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault();
  //   if (validateStep()) {
  //     console.log("Form Validated & Ready:", formData);
  //   }
  // };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (validateStep()) {
      setIsSubmitting(true);

      // We don't need to pass email/id from the client,
      // the Server Action gets it securely from the Kinde session.
      const result = await registerProAction(formData);

      setIsSubmitting(false);

      if (result.success) {
        // Maybe show a success toast or redirect
        console.log("Profile Saved:", result.data);

        showToast.success("Your Information Has Been Submitted", {
          duration: 4000, // 4 seconds
          position: "top-right",
          transition: "bounceIn",
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
          sound: true,
          progress: true,
        });

        redirect("/pro");
      } else {
        setErrors({ global: result.message });
        showToast.error("Something went wrong. Please try again.", {
          duration: 4000, // 4 seconds
          position: "top-right",
          transition: "bounceIn",
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>',
          sound: true,
          progress: true,
        });
      }
    }
  };

  // Helper to render error message
  const ErrorMsg = ({ name }: { name: string }) =>
    errors[name] ? (
      <p className="text-red-600 text-[10px] font-black uppercase mt-1.5 flex items-center gap-1 animate-in fade-in slide-in-from-top-1">
        <AlertCircle size={10} strokeWidth={3} /> {errors[name]}
      </p>
    ) : null;

  return (
    <div className="min-h-screen bg-[#F1F5F9] flex flex-col items-center py-12 px-4 selection:bg-indigo-100 selection:text-indigo-900 font-sans">
      {/* BRANDING */}
      <div className="flex items-center gap-3 mb-10">
        <div className="w-10 h-10 bg-indigo-700 rounded-xl flex items-center justify-center shadow-xl shadow-indigo-200">
          <Zap size={22} className="text-white fill-white" />
        </div>
        <span className="text-slate-950 font-black text-2xl tracking-tighter italic">
          Ema<span className="text-indigo-700">Pros</span>
        </span>
      </div>

      <div className="w-full max-w-xl bg-white border-2 border-slate-300 rounded-[2.5rem] shadow-2xl shadow-slate-200 overflow-hidden">
        <div className="h-2.5 w-full bg-slate-100 flex">
          <div
            className="bg-indigo-700 transition-all duration-500"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        <div className="p-10 md:p-14">
          <header className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-700 rounded-lg mb-3 border border-indigo-200">
              <span className="text-[10px] font-black uppercase tracking-widest">
                Step {step} of 3
              </span>
            </div>
            <h1 className="text-3xl font-black text-slate-950 tracking-tight leading-tight">
              {step === 1 && "Personal Details"}
              {step === 2 && "Service Area"}
              {step === 3 && "Professional Setup"}
            </h1>
          </header>

          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && (
              <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-600 uppercase tracking-widest ml-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <UserIcon
                      className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${errors.fullName ? "text-red-500" : "text-slate-400"}`}
                      size={18}
                    />
                    <input
                      type="text"
                      className={`w-full bg-white border-2 rounded-2xl py-4 pl-12 pr-4 text-slate-950 outline-none transition-all font-bold shadow-sm ${errors.fullName ? "border-red-500 focus:border-red-600" : "border-slate-200 focus:border-indigo-700"}`}
                      placeholder="Sibusiso Dlamini"
                      value={formData.fullName}
                      onChange={(e) =>
                        handleInputChange(null, "fullName", e.target.value)
                      }
                    />
                  </div>
                  <ErrorMsg name="fullName" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-600 uppercase tracking-widest ml-1">
                    MoMo Phone Number
                  </label>
                  <div className="relative">
                    <Smartphone
                      className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${errors.phoneNumber ? "text-red-500" : "text-slate-400"}`}
                      size={18}
                    />
                    <input
                      type="tel"
                      className={`w-full bg-white border-2 rounded-2xl py-4 pl-12 pr-4 text-slate-950 outline-none transition-all font-bold shadow-sm ${errors.phoneNumber ? "border-red-500 focus:border-red-600" : "border-slate-200 focus:border-indigo-700"}`}
                      placeholder="7XXXXXXX"
                      value={formData.phoneNumber}
                      onChange={(e) =>
                        handleInputChange(null, "phoneNumber", e.target.value)
                      }
                    />
                  </div>
                  <ErrorMsg name="phoneNumber" />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-600 uppercase tracking-widest ml-1">
                    Region
                  </label>
                  <select
                    className="w-full bg-white border-2 border-slate-200 rounded-2xl py-4 px-5 text-slate-950 focus:border-indigo-700 outline-none transition-all appearance-none font-bold shadow-sm"
                    value={formData.location.region}
                    onChange={(e) =>
                      handleInputChange(
                        "location",
                        "region",
                        e.target.value as any,
                      )
                    }
                  >
                    {regions.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-600 uppercase tracking-widest ml-1">
                    Town / Area
                  </label>
                  <div className="relative">
                    <MapPin
                      className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${errors.town ? "text-red-500" : "text-slate-400"}`}
                      size={18}
                    />
                    <input
                      type="text"
                      className={`w-full bg-white border-2 rounded-2xl py-4 pl-12 pr-4 text-slate-950 outline-none transition-all font-bold shadow-sm ${errors.town ? "border-red-500 focus:border-red-600" : "border-slate-200 focus:border-indigo-700"}`}
                      placeholder="e.g. Mbabane, Eveni"
                      value={formData.location.town}
                      onChange={(e) =>
                        handleInputChange("location", "town", e.target.value)
                      }
                    />
                  </div>
                  <ErrorMsg name="town" />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-600 uppercase tracking-widest ml-1">
                      Category
                    </label>
                    <select
                      className={`w-full bg-white border-2 rounded-2xl py-4 px-4 text-sm focus:border-indigo-700 outline-none transition-all font-bold text-slate-950 ${errors.category ? "border-red-500" : "border-slate-200"}`}
                      value={formData.proProfile.category}
                      onChange={(e) =>
                        handleInputChange(
                          "proProfile",
                          "category",
                          e.target.value,
                        )
                      }
                    >
                      <option value="">Trade</option>
                      {proCategories.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.label}
                        </option>
                      ))}
                    </select>
                    <ErrorMsg name="category" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-600 uppercase tracking-widest ml-1">
                      Rate (E/hr)
                    </label>
                    <div className="relative">
                      <DollarSign
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        size={16}
                      />
                      <input
                        type="number"
                        className={`w-full bg-white border-2 rounded-2xl py-4 pl-10 pr-4 text-sm focus:border-indigo-700 outline-none transition-all font-bold text-slate-950 ${errors.hourlyRate ? "border-red-500" : "border-slate-200"}`}
                        placeholder="250"
                        value={formData.proProfile.hourlyRate}
                        onChange={(e) =>
                          handleInputChange(
                            "proProfile",
                            "hourlyRate",
                            e.target.value,
                          )
                        }
                      />
                    </div>
                    <ErrorMsg name="hourlyRate" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-600 uppercase tracking-widest ml-1 flex justify-between">
                    Skills{" "}
                    <span className="text-[10px] text-indigo-600 normal-case italic">
                      Separate with commas
                    </span>
                  </label>
                  <div className="relative">
                    <Wrench
                      className={`absolute left-4 top-5 transition-colors ${errors.skills ? "text-red-500" : "text-slate-400"}`}
                      size={18}
                    />
                    <textarea
                      rows={2}
                      className={`w-full bg-white border-2 rounded-2xl py-4 pl-12 pr-4 text-sm outline-none transition-all font-bold text-slate-950 resize-none ${errors.skills ? "border-red-500 focus:border-red-600" : "border-slate-200 focus:border-indigo-700"}`}
                      placeholder="e.g. Pipe welding, Leak detection"
                      onChange={(e) => handleSkillsChange(e.target.value)}
                    />
                  </div>
                  <ErrorMsg name="skills" />
                  {formData.proProfile.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {formData.proProfile.skills.map((s, i) => (
                        <span
                          key={i}
                          className="bg-slate-950 text-white text-[10px] font-black px-2.5 py-1 rounded-lg"
                        >
                          {" "}
                          {s}{" "}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-600 uppercase tracking-widest ml-1">
                    Professional Title
                  </label>
                  <input
                    type="text"
                    className={`w-full bg-white border-2 rounded-2xl py-4 px-5 text-sm focus:border-indigo-700 outline-none transition-all font-bold text-slate-950 ${errors.title ? "border-red-500" : "border-slate-200"}`}
                    placeholder="e.g. Licensed Electrician"
                    value={formData.proProfile.title}
                    onChange={(e) =>
                      handleInputChange("proProfile", "title", e.target.value)
                    }
                  />
                  <ErrorMsg name="title" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-600 uppercase tracking-widest ml-1">
                    Bio
                  </label>
                  <textarea
                    rows={3}
                    className={`w-full bg-white border-2 rounded-2xl py-4 px-5 text-sm focus:border-indigo-700 outline-none transition-all font-bold text-slate-950 resize-none ${errors.bio ? "border-red-500" : "border-slate-200"}`}
                    placeholder="Minimum 20 characters..."
                    value={formData.proProfile.bio}
                    onChange={(e) =>
                      handleInputChange("proProfile", "bio", e.target.value)
                    }
                  />
                  <ErrorMsg name="bio" />
                </div>
              </div>
            )}

            <div className="flex gap-4 pt-8">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="p-4 bg-white border-2 border-slate-200 rounded-2xl text-slate-400 hover:text-slate-950 transition-all"
                >
                  <ChevronLeft size={24} strokeWidth={3} />
                </button>
              )}
              <button
                type={step === 3 ? "submit" : "button"}
                onClick={step < 3 ? handleNext : undefined}
                className="flex-1 bg-slate-950 text-white font-black text-sm uppercase tracking-widest py-4.5 rounded-2xl flex items-center justify-center gap-3 hover:bg-indigo-700 transition-all active:scale-95 shadow-xl shadow-slate-200"
              >
                {step === 3 ? "Complete Profile" : "Next Step"}
                <ChevronRight size={20} strokeWidth={3} />
              </button>
            </div>
          </form>
        </div>
      </div>
      <footer className="mt-12 flex items-center gap-10 text-slate-400 font-bold">
        <div className="flex items-center gap-2">
          <CheckCircle2 size={18} className="text-emerald-500" />
          <span className="text-[10px] uppercase tracking-widest">
            MoMo Secure
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Briefcase size={18} className="text-indigo-600" />
          <span className="text-[10px] uppercase tracking-widest">
            Trade Verified
          </span>
        </div>
      </footer>
    </div>
  );
};

export default ProRegistrationPage;
