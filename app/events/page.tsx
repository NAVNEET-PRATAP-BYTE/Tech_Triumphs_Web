"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
import { ArrowRight, HelpCircle, Users } from "lucide-react";
import { UPCOMING_EVENTS, PAST_EVENTS } from "@/data/clubData";
import { EventCard } from "@/components/EventCard";
import { PastEventCard } from "@/components/PastEventCard";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronRight } from "lucide-react";

function EventsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") === "archive" ? "archive" : "upcoming";
  
  const [activeTab, setActiveTab] = useState<"upcoming" | "archive">(initialTab);
  const [activeFilter, setActiveFilter] = useState<string>("All Events");
  
  const archiveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialTab === "archive") {
      setTimeout(() => {
        archiveRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
  }, [initialTab]);

  const filteredUpcoming = UPCOMING_EVENTS.filter((e) => {
    if (activeFilter === "All Events") return true;
    if (activeFilter === "Workshops") return e.category === "WORKSHOP" || e.category === "DESIGN";
    if (activeFilter === "Competitions") return e.category === "COMPETITION";
    if (activeFilter === "Hackathons") return e.category === "HACKATHON";
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 min-h-screen pt-24 relative z-10">
      
      <div className="flex items-center justify-center gap-4 mb-16 bg-neutral-900/60 p-1.5 rounded-full border border-neutral-800 max-w-sm mx-auto">
        <button 
          onClick={() => {
            setActiveTab("upcoming");
            router.push("/events?tab=upcoming", { scroll: false });
          }}
          className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider rounded-full transition-all cursor-pointer font-label ${
            activeTab === "upcoming" 
              ? "bg-lime-primary text-club-dark font-black" 
              : "text-neutral-400 hover:text-white"
          }`}
        >
          Upcoming Events
        </button>
        <button 
          onClick={() => {
            setActiveTab("archive");
            router.push("/events?tab=archive", { scroll: false });
          }}
          className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider rounded-full transition-all cursor-pointer font-label ${
            activeTab === "archive" 
              ? "bg-lime-primary text-club-dark font-black" 
              : "text-neutral-400 hover:text-white"
          }`}
        >
          Past Archive
        </button>
      </div>

      {activeTab === "upcoming" ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start animate-fade-in">
          <aside className="lg:col-span-4 lg:sticky lg:top-32 space-y-8">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase mb-4 block text-lime-primary font-label">
                Upcoming Schedule
              </span>
              <h1 className="text-5xl font-black leading-tight text-white font-display uppercase tracking-tight">
                Explore. Learn.<br />
                Compete. <span className="bg-lime-primary text-club-dark px-3 inline-block shadow-sm">Win.</span>
              </h1>
              <p className="mt-6 text-neutral-400 text-base leading-relaxed max-w-xs font-sans">
                Join our upcoming events to test your stamina, collaborate on team products, and earn prizes.
              </p>
            </div>

            <div className="flex flex-col gap-2.5 max-w-xs" id="dynamic-category-chips">
              {["All Events", "Workshops", "Competitions", "Hackathons"].map((filter) => (
                <button 
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`w-full text-left px-5 py-3 rounded-xl text-sm font-bold tracking-wide transition-all cursor-pointer font-label ${
                    activeFilter === filter 
                      ? "bg-lime-primary text-club-dark font-extrabold shadow-sm scale-[1.01]" 
                      : "bg-[#111] hover:bg-[#161616] text-neutral-300 border border-neutral-800"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{filter}</span>
                    {activeFilter === filter && <ChevronRight className="w-4 h-4 text-club-dark" />}
                  </div>
                </button>
              ))}
            </div>
          </aside>

          <section className="lg:col-span-8 space-y-5">
            {filteredUpcoming.length > 0 ? (
              filteredUpcoming.map((event) => (
                <EventCard 
                  key={event.id} 
                  event={event} 
                />
              ))
            ) : (
                <div className="bg-[#111111] p-12 rounded-2xl border border-neutral-800 text-center text-neutral-500">
                <HelpCircle className="w-12 h-12 text-neutral-700 mx-auto mb-4" />
                <p className="font-semibold text-lg">No events found matching your filter category.</p>
                <button 
                  onClick={() => setActiveFilter("All Events")} 
                  className="text-lime-primary hover:underline text-sm font-semibold mt-2 cursor-pointer"
                >
                  Show all events
                </button>
              </div>
            )}
          </section>
        </div>
      ) : (
        <div ref={archiveRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start animate-fade-in">
          <div className="lg:col-span-4 lg:sticky lg:top-32 flex flex-col">
            <p className="font-bold text-xs text-lime-primary uppercase mb-3 tracking-widest font-label">
              Archive directory
            </p>
            <h1 className="text-5xl font-black text-white leading-none font-display uppercase tracking-tight mb-6">
              Our Journey <br />
              <span className="text-lime-primary bg-neutral-900 border border-neutral-800 px-4 py-1.5 rounded-xl text-3xl md:text-4xl shadow-lg mt-3 inline-block uppercase select-none font-sans italic tracking-wide">
                So Far.
              </span>
            </h1>
            <p className="font-sans text-neutral-400 text-sm leading-relaxed max-w-sm mb-8">
              From high-stakes hackathons to intensive technical bootcamps, we create immersive experiences that foster lifelong connections and empower student developers.
            </p>
            
            <button 
              onClick={() => {
                setActiveTab("upcoming");
                router.push("/events?tab=upcoming", { scroll: false });
              }}
              className="group inline-flex items-center gap-2 border-2 border-neutral-700 hover:border-lime-primary hover:text-lime-primary text-white font-bold py-3.5 px-6 rounded-xl transition-all font-label text-sm self-start cursor-pointer"
            >
              <span>Explore Upcoming Events</span>
              <ArrowRight className="w-4 h-4 cursor-pointer" />
            </button>
          </div>

          <div className="lg:col-span-8 flex gap-8">
            <div className="hidden md:flex flex-col items-center relative shrink-0">
              <div className="w-0.5 h-full bg-neutral-800 absolute" />
              <div className="flex flex-col gap-60 pt-8">
                <div className="w-4.5 h-4.5 bg-lime-primary border-4 border-[#0A0A0A] rounded-full relative z-10 shadow-[0_0_10px_#DFFF00]" />
                <div className="w-4.5 h-4.5 bg-lime-primary border-4 border-[#0A0A0A] rounded-full relative z-10 shadow-[0_0_10px_#DFFF00]" />
                <div className="w-4.5 h-4.5 bg-lime-primary border-4 border-[#0A0A0A] rounded-full relative z-10 shadow-[0_0_10px_#DFFF00]" />
              </div>
            </div>

            <div className="flex flex-col gap-8 w-full">
              {PAST_EVENTS.map((pastEv) => (
                <PastEventCard key={pastEv.id} event={pastEv} />
              ))}
            </div>
          </div>
        </div>
      )}

      <footer className="mt-28 py-2 relative z-30">
        <div className="bg-lime-primary text-club-dark rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-6">
            <div className="hidden sm:block p-4.5 bg-club-dark rounded-2xl text-lime-primary">
              <Users className="w-10 h-10 text-lime-primary" />
            </div>
            <div>
              <h4 className="text-xl md:text-2xl font-extrabold font-display">Want to collaborate or sponsor our event?</h4>
              <p className="font-semibold text-club-dark/80 text-sm font-sans mt-1">Let's build the future together.</p>
            </div>
          </div>
          <button 
            onClick={() => router.push("/#pillars-section")}
            className="bg-club-dark text-white hover:bg-neutral-900 hover:scale-105 active:scale-95 transition-all px-8 py-3.5 rounded-xl font-bold flex items-center gap-2.5 cursor-pointer shadow-lg tracking-wide text-sm font-label"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4 cursor-pointer" />
          </button>
        </div>
      </footer>
    </div>
  );
}

export default function EventsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-24 text-center">Loading Events...</div>}>
      <EventsContent />
    </Suspense>
  );
}
