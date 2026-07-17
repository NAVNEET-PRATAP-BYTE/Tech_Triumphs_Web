"use client";
import React from "react";
import * as Icons from "lucide-react";
import { PastEvent } from "../data/clubData";
import Image from "next/image";

interface PastEventCardProps {
  event: PastEvent;
}

export function PastEventCard({ event }: PastEventCardProps) {
  // Safe execution of named icons from lucide-react
  const LucideIcon = (Icons as any)[event.icon] || Icons.Calendar;

  return (
    <div 
      className="bg-[#111111] p-6 rounded-2xl border border-neutral-800 hover:border-lime-primary transition-all duration-300 group opacity-100 translate-y-0 relative"
      id={`past-event-${event.id}`}
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <p className="font-label text-xs text-lime-primary font-bold tracking-widest uppercase mb-1">
            {event.date}
          </p>
          <h3 className="text-2xl font-extrabold text-white mb-2 font-display">
            {event.title}
          </h3>
          <p className="text-neutral-400 text-sm leading-relaxed mb-4">
            {event.description}
          </p>
          <span className="inline-block bg-neutral-900 text-neutral-300 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-neutral-800">
            {event.categoryBadge}
          </span>
        </div>
        
        <div className="relative w-full md:w-64 shrink-0 h-44 rounded-xl overflow-hidden shadow-sm border border-neutral-800">
          <Image 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
            src={event.image} 
            alt={event.title}
            fill
          />
          <div className="absolute top-4 right-4 bg-lime-primary text-club-dark p-2 rounded-lg shadow-md">
            <LucideIcon className="w-5 h-5 text-club-dark" />
          </div>
        </div>
      </div>
    </div>
  );
}
