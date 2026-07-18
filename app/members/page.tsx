"use client";
import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { MemberCard } from "@/components/MemberCard";
import { TEAM_MEMBERS } from "@/data/clubData";
import { useRouter } from "next/navigation";

export default function TeamPage() {
  const router = useRouter();

  const faculty = TEAM_MEMBERS.find(m => m.role === "FACULTY");
  const president = TEAM_MEMBERS.find(m => m.role === "PRESIDENT");
  const vicePresidents = TEAM_MEMBERS.filter(m => m.role === "VICE PRESIDENT");
  const coreMembers = TEAM_MEMBERS.filter(m => m.role === "CORE MEMBER");

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 min-h-screen pt-32 relative z-10">
      
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-24">
        <div>
          <span className="text-lime-primary bg-neutral-900 border border-neutral-800 px-3.5 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full mb-6 inline-block font-label animate-pulse">
            Our Core Team
          </span>
          <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight text-white font-display uppercase select-none">
            Meet The<br />
            Minds Behind<br />
            <span className="text-lime-primary hero-glow">Tech Triumphs.</span>
          </h1>
        </div>
        <div className="pt-8 md:pt-24 max-w-sm">
          <p className="text-neutral-400 text-lg mb-8 leading-relaxed font-sans">
            We're a team of passionate students working together with faculty guidance to inspire, execute, and build a cohesive tech ecosystem.
          </p>
          
          <button 
            onClick={() => router.push("/events")}
            className="group flex flex-row items-center gap-3 border border-neutral-700 text-white font-bold py-3.5 px-8 rounded-xl hover:bg-white hover:text-club-dark hover:border-white transition-all duration-300 cursor-pointer font-label text-sm"
          >
            <span>Explore Events</span>
            <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      <section className="space-y-28 mb-28">
        
        <div className="space-y-8">
          <div className="border-b border-neutral-900 pb-4">
            <h2 className="text-xs font-bold text-neutral-400 tracking-[0.25em] uppercase font-label">
              TIER 1 • Advisory & Executive
            </h2>
            <p className="text-xs text-neutral-500 mt-1 font-mono">
              Faculty mentorship paired with student leadership
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
            {faculty && (
              <div className="w-full">
                <MemberCard member={faculty} />
              </div>
            )}
            {president && (
              <div className="w-full">
                <MemberCard member={president} />
              </div>
            )}
          </div>
        </div>

        <div className="space-y-8">
          <div className="border-b border-neutral-900 pb-4">
            <h2 className="text-xs font-bold text-neutral-400 tracking-[0.25em] uppercase font-label">
              TIER 2 • Vice Presidents
            </h2>
            <p className="text-xs text-neutral-500 mt-1 font-mono">
              Leading developer initiatives and organizational operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
            {vicePresidents.map(vp => (
              <div key={vp.id} className="w-full">
                <MemberCard member={vp} />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="border-b border-neutral-900 pb-4">
            <h2 className="text-xs font-bold text-neutral-400 tracking-[0.25em] uppercase font-label">
              TIER 3 • CORES & LEADS
            </h2>
            <p className="text-xs text-neutral-500 mt-1 font-mono">
              Full-time coordinators leading design, development, and AI divisions
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {coreMembers.map(core => (
              <div key={core.id} className="w-full">
                <MemberCard member={core} />
              </div>
            ))}
          </div>
        </div>

      </section>

      <section className="w-full bg-[#111111] border border-neutral-800 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden mb-8 shadow-2xl">
        <div className="max-w-xl relative z-10 space-y-6">
          <span className="text-lime-primary font-bold tracking-widest uppercase text-xs font-label">
            Join the Core Team
          </span>
          <h2 className="text-white text-4.5xl md:text-5.5xl font-extrabold leading-tight font-display uppercase">
            Want to build the<br />future with us?
          </h2>
          <p className="text-neutral-400 text-base md:text-lg leading-relaxed font-sans">
            We're always looking for passionate writers, developers, artists, and problem solvers to help direct club initiatives.
          </p>
          
          <button 
            onClick={() => router.push("/events")}
            className="bg-lime-primary text-club-dark hover:bg-white hover:scale-105 active:scale-95 transition-all font-bold py-4 px-10 rounded-xl flex items-center gap-2.5 text-base cursor-pointer shadow-md shadow-lime-primary/10"
          >
            <span>Apply to Core recruitment</span>
            <ArrowRight className="w-5 h-5 -rotate-45" />
          </button>
        </div>

        <div className="absolute top-8 right-8 md:top-16 md:right-16 text-lime-primary/70 animate-pulse">
          <Sparkles className="w-12 h-12 md:w-16 md:h-16 text-lime-primary" />
        </div>

        <div className="absolute -bottom-24 -right-24 opacity-20 pointer-events-none">
          <div className="w-64 h-64 border-2 border-lime-primary rounded-full" />
          <div className="w-80 h-80 border-2 border-lime-primary rounded-full absolute -top-8 -left-8" />
          <div className="w-96 h-96 border-2 border-lime-primary rounded-full absolute -top-16 -left-16" />
        </div>
      </section>

    </div>
  );
}
