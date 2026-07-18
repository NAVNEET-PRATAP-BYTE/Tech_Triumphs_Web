"use client";

import React, { useState, Suspense } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, MessageSquare, Award, Trophy, Calendar, Clock, MapPin, Ticket } from "lucide-react";
import { UPCOMING_EVENTS } from "@/data/clubData";
import links from "@/data/links.json";
import { useRouter, useSearchParams } from "next/navigation";

function RegisterContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedEventId = searchParams.get("eventId");

  const defaultEvent = UPCOMING_EVENTS[0];
  const selectedEvent = UPCOMING_EVENTS.find(e => e.id === selectedEventId) || defaultEvent;

  const [formData, setFormData] = useState({
    fullName: "",
    rollNumber: "",
    admissionId: "",
    branch: "",
    section: "",
    year: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketNumber, setTicketNumber] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) tempErrors.fullName = "Full Name is required";
    if (!formData.rollNumber.trim()) tempErrors.rollNumber = "Roll Number is required";
    if (!formData.admissionId.trim()) tempErrors.admissionId = "Admission ID is required";
    if (!formData.branch) tempErrors.branch = "Please select/identify your college branch";
    if (!formData.section) tempErrors.section = "Section is required";
    if (!formData.year) tempErrors.year = "Please identify your academic year";
    
    if (!formData.email) {
      tempErrors.email = "Email ID is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid Email ID";
    }

    if (!formData.phone) {
      tempErrors.phone = "Phone Number is required";
    } else if (formData.phone.length < 10) {
      tempErrors.phone = "Phone Number must contain at least 10 digits";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const genPass = `TI-${selectedEvent.id.substring(6, 10).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setTicketNumber(genPass);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen relative z-10" id="register-root">

      {/* Dark Hero Header */}
      
      <div className="bg-white px-6 md:px-12 py-12">

      {isSubmitted ? (
        <div className="max-w-xl mx-auto bg-white border border-neutral-200 rounded-3xl p-8 sm:p-12 shadow-2xl text-center space-y-8 animate-fade-in my-8">
          <div className="w-20 h-20 bg-lime-primary/10 rounded-full flex items-center justify-center mx-auto text-lime-primary border border-lime-primary/35">
            <CheckCircle2 className="w-12 h-12 text-club-dark" />
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl font-black font-display text-club-dark uppercase">
              Registration Successful!
            </h2>
            <p className="text-neutral-500 text-sm font-sans">
              Your pass has been generated and validated. Present this digital ticket at the entrance lobby.
            </p>
          </div>

          <div className="bg-club-dark text-white rounded-2xl p-6 relative overflow-hidden border border-neutral-800 text-left space-y-6">
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#FAFAFA] rounded-full" />
            <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#FAFAFA] rounded-full" />

            <div className="flex justify-between items-start border-b border-neutral-800 pb-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#DFFF00] font-label font-bold">
                  Tech Triumphs Pass
                </span>
                <h3 className="font-extrabold text-lg font-display uppercase truncate max-w-xs block">
                  {selectedEvent.title}
                </h3>
              </div>
              <Ticket className="w-6 h-6 text-lime-primary" />
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <div className="text-neutral-500 uppercase tracking-wider font-semibold">Attendee</div>
                <div className="font-semibold text-white mt-0.5 truncate">{formData.fullName}</div>
              </div>
              <div>
                <div className="text-neutral-500 uppercase tracking-wider font-semibold">Ticket ID</div>
                <div className="font-mono text-lime-primary font-bold mt-0.5">{ticketNumber}</div>
              </div>
              <div>
                <div className="text-neutral-500 uppercase tracking-wider font-semibold">Roll Number</div>
                <div className="font-semibold text-white mt-0.5 uppercase">{formData.rollNumber}</div>
              </div>
              <div>
                <div className="text-neutral-500 uppercase tracking-wider font-semibold">Branch / Sec</div>
                <div className="font-semibold text-white mt-0.5 truncate uppercase">
                  {formData.branch} {formData.section}
                </div>
              </div>
            </div>

            <div className="border-t border-neutral-800 pt-4 flex justify-between items-center text-xs">
              <div className="flex items-center gap-1.5 text-neutral-400">
                <Calendar className="w-4 h-4 text-lime-primary shrink-0" />
                <span>{selectedEvent.dateFormatted}</span>
              </div>
              <div className="flex items-center gap-1.5 text-neutral-400">
                <Clock className="w-4 h-4 text-lime-primary shrink-0" />
                <span>{selectedEvent.timeFormatted}</span>
              </div>
            </div>
          </div>

          <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-5 flex items-center justify-between gap-4 text-left">
            <div className="space-y-1">
              <h4 className="font-bold text-sm text-club-dark">Join WhatsApp Forum</h4>
              <p className="text-xs text-neutral-500">Stay informed about task assignments and venue shifts.</p>
            </div>
            <a 
              href={links.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-club-dark hover:bg-neutral-800 text-white font-bold p-3 rounded-lg text-xs flex items-center gap-1 whitespace-nowrap"
            >
              <span>Join Now</span>
              <ArrowRight className="w-3.5 h-3.5 -rotate-45" />
            </a>
          </div>

          <button 
            onClick={() => router.push("/events")}
            className="w-full bg-club-dark hover:bg-neutral-800 text-white font-bold py-4 rounded-xl text-sm tracking-wide font-label transition-all cursor-pointer"
          >
            Go Back to Events Grid
          </button>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-[0.01em] uppercase font-display">
                <span className="bg-club-dark text-white px-6 py-2 rounded-2xl inline-block transform rotate-3 mb-1 shadow-lg">
                  Event
                </span><br />
                <span className="bg-[#DFFF00] text-black px-8 py-3 sm:px-10 sm:py-4 rounded-[2rem] inline-block mt-1  leading-none transform -rotate-3 shadow-2xl relative z-10">
                  Registration.
                </span>
              </h1>
              <p className="text-neutral-500 text-sm mt-8">Fill in your details to register for the event.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 pt-4">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-club-dark mb-2 font-label" htmlFor="fullName">
                    Full Name *
                  </label>
                  <input 
                    className="w-full bg-white border border-neutral-200 focus:border-club-dark focus:ring-1 focus:ring-club-dark rounded-xl px-4 py-3.5 text-sm outline-none transition-all text-club-dark" 
                    id="fullName" 
                    name="fullName" 
                    type="text" 
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  {errors.fullName && <p className="text-red-600 text-xs mt-1.5 font-bold">{errors.fullName}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-club-dark mb-2 font-label" htmlFor="rollNumber">
                    Roll Number *
                  </label>
                  <input 
                    className="w-full bg-white border border-neutral-200 focus:border-club-dark focus:ring-1 focus:ring-club-dark rounded-xl px-4 py-3.5 text-sm outline-none transition-all text-club-dark" 
                    id="rollNumber" 
                    name="rollNumber" 
                    type="text" 
                    placeholder="Enter your roll number"
                    value={formData.rollNumber}
                    onChange={handleChange}
                  />
                  {errors.rollNumber && <p className="text-red-600 text-xs mt-1.5 font-bold">{errors.rollNumber}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-club-dark mb-2 font-label" htmlFor="admissionId">
                    Admission ID *
                  </label>
                  <input 
                    className="w-full bg-white border border-neutral-200 focus:border-club-dark focus:ring-1 focus:ring-club-dark rounded-xl px-4 py-3.5 text-sm outline-none transition-all text-club-dark" 
                    id="admissionId" 
                    name="admissionId" 
                    type="text" 
                    placeholder="Enter your admission ID"
                    value={formData.admissionId}
                    onChange={handleChange}
                  />
                  {errors.admissionId && <p className="text-red-600 text-xs mt-1.5 font-bold">{errors.admissionId}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-club-dark mb-2 font-label" htmlFor="branch">
                    Branch *
                  </label>
                  <select 
                    className="w-full bg-white border border-neutral-200 focus:border-club-dark focus:ring-1 focus:ring-club-dark rounded-xl px-4 py-3.5 text-sm outline-none transition-all text-club-dark cursor-pointer" 
                    id="branch" 
                    name="branch" 
                    value={formData.branch}
                    onChange={handleChange}
                  >
                    <option value="">Select your branch</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Information Technology">Information Technology</option>
                    <option value="Electrical Engineering">Electrical Engineering</option>
                    <option value="Mechanical Engineering">Mechanical Engineering</option>
                  </select>
                  {errors.branch && <p className="text-red-600 text-xs mt-1.5 font-bold">{errors.branch}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-club-dark mb-2 font-label" htmlFor="section">
                    Section *
                  </label>
                  <select 
                    className="w-full bg-white border border-neutral-200 focus:border-club-dark focus:ring-1 focus:ring-club-dark rounded-xl px-4 py-3.5 text-sm outline-none transition-all text-club-dark cursor-pointer" 
                    id="section" 
                    name="section" 
                    value={formData.section}
                    onChange={handleChange}
                  >
                    <option value="">Select your section</option>
                    <option value="A">Section A</option>
                    <option value="B">Section B</option>
                    <option value="C">Section C</option>
                    <option value="D">Section D</option>
                  </select>
                  {errors.section && <p className="text-red-600 text-xs mt-1.5 font-bold">{errors.section}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-club-dark mb-2 font-label" htmlFor="year">
                    Year *
                  </label>
                  <select 
                    className="w-full bg-white border border-neutral-200 focus:border-club-dark focus:ring-1 focus:ring-club-dark rounded-xl px-4 py-3.5 text-sm outline-none transition-all text-club-dark cursor-pointer" 
                    id="year" 
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                  >
                    <option value="">Select your year</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                  </select>
                  {errors.year && <p className="text-red-600 text-xs mt-1.5 font-bold">{errors.year}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-club-dark mb-2 font-label" htmlFor="email">
                    Email ID *
                  </label>
                  <input 
                    className="w-full bg-white border border-neutral-200 focus:border-club-dark focus:ring-1 focus:ring-club-dark rounded-xl px-4 py-3.5 text-sm outline-none transition-all text-club-dark" 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="Enter your email ID"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="text-red-600 text-xs mt-1.5 font-bold">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-club-dark mb-2 font-label" htmlFor="phone">
                    Phone Number *
                  </label>
                  <input 
                    className="w-full bg-white border border-neutral-200 focus:border-club-dark focus:ring-1 focus:ring-club-dark rounded-xl px-4 py-3.5 text-sm outline-none transition-all text-club-dark" 
                    id="phone" 
                    name="phone" 
                    type="tel" 
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <p className="text-red-600 text-xs mt-1.5 font-bold">{errors.phone}</p>}
                </div>
              </div>

              <div className="bg-neutral-100 border border-neutral-200 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white text-xl flex-shrink-0 shadow-sm border border-emerald-300">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-club-dark text-sm leading-tight">Join WhatsApp Community</h4>
                    <p className="text-xs text-neutral-500 mt-0.5">Stay updated with event announcements and important updates.</p>
                  </div>
                </div>
                <a 
                  href={links.whatsapp} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white border border-neutral-200 px-4 py-2.5 rounded-lg text-xs font-bold text-club-dark flex items-center gap-1.5 hover:bg-neutral-50 transition-colors whitespace-nowrap shadow-sm font-label"
                >
                  <span>Join Group</span>
                  <ArrowRight className="w-3.5 h-3.5 -rotate-45" />
                </a>
              </div>

              <div className="pt-4">
                <button 
                  type="submit"
                  className="bg-club-dark hover:bg-neutral-800 text-white font-extrabold px-8 py-4 rounded-xl w-full sm:w-auto flex items-center justify-center gap-2.5 transition-all duration-200 text-sm tracking-wide font-label cursor-pointer shadow-lg"
                >
                  <span>Register for Event</span>
                  <ArrowRight className="w-4.5 h-4.5 -rotate-45" />
                </button>
              </div>

            </form>
          </div>

          <div className="lg:col-span-5 relative lg:sticky lg:top-24">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-neutral-200 shadow-xl space-y-6">
              
              <span className="inline-block bg-[#FDF9C4] text-[#8C7A00] text-[10px] font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider font-label shadow-sm">
                {selectedEvent.category}
              </span>

              <div className="space-y-1">
                <h2 className="text-3xl font-extrabold text-club-dark font-display">
                  {selectedEvent.title}
                </h2>
                <p className="text-neutral-500 font-medium text-sm font-label uppercase tracking-wide">
                  {selectedEvent.category.toLowerCase()} forum
                </p>
              </div>

              <div className="rounded-xl overflow-hidden relative bg-club-dark h-48 w-full flex items-center px-6 text-white bg-gradient-to-tr from-club-dark to-neutral-900 border border-neutral-800 shadow-inner">
                <div className="space-y-1 relative z-10 leading-tight">
                  <div className="font-black text-2xl uppercase font-display leading-[0.95]">
                    {selectedEvent.title.split(" ").map((w, index) => (
                      <span key={w + index} className="block">
                        {w === "2026" ? <span className="text-[#DFFF00]">{w}</span> : w}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lime-primary via-club-dark to-club-dark" />
                <div className="absolute top-2 right-2 w-8 h-8 rounded-full border border-lime-primary/30" />
                <div className="absolute bottom-4 right-8 w-16 h-16 rounded-full border-2 border-lime-primary/20" />
              </div>

              <div className="space-y-4 border-y border-neutral-100 py-5 text-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-neutral-500">
                    <Calendar className="w-5 h-5 text-neutral-400 shrink-0" />
                    <span className="font-semibold font-label">Date</span>
                  </div>
                  <span className="text-club-dark font-bold font-sans">{selectedEvent.dateFormatted}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-neutral-500">
                    <Clock className="w-5 h-5 text-neutral-400 shrink-0" />
                    <span className="font-semibold font-label">Time</span>
                  </div>
                  <span className="text-club-dark font-bold font-sans">{selectedEvent.timeFormatted}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-neutral-500">
                    <MapPin className="w-5 h-5 text-neutral-400 shrink-0" />
                    <span className="font-semibold font-label">Venue</span>
                  </div>
                  <span className="text-club-dark font-bold font-sans truncate pr-2">{selectedEvent.venue}</span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-extrabold text-club-dark text-sm uppercase tracking-wide font-label">
                  About Event
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed font-sans mt-1">
                  Connect with peer mentors, build high-stakes components, and learn standard engineering processes. Open invitation to all club trainees.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-1">
                <div className="bg-neutral-50 border border-neutral-200 p-4 rounded-xl flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-club-dark shrink-0">
                    <Trophy className="w-4 h-4 text-club-dark" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-club-dark font-label">Winners</h4>
                    <p className="text-[10px] text-neutral-400 mt-0.5">Certificate</p>
                  </div>
                </div>
                
                <div className="bg-neutral-50 border border-neutral-200 p-4 rounded-xl flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-club-dark shrink-0">
                    <Award className="w-4 h-4 text-club-dark" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-club-dark font-label">Certificate</h4>
                    <p className="text-[10px] text-neutral-400 mt-0.5">For All Trainees</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      )}

      </div>{/* end bg-white wrapper */}
    </div>
  );
}

export default function RegisterPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-32 text-center text-white">Loading Registration...</div>}>
      <RegisterContent />
    </Suspense>
  );
}
