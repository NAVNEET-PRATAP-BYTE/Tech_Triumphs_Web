"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { UpcomingEvent } from "../data/clubData";
import { useRouter } from "next/navigation";

interface EventCardProps {
  event: UpcomingEvent;
}

export function EventCard({ event }: EventCardProps) {
  const router = useRouter();

  return (
    <div 
      className="bg-white border border-neutral-100 rounded-2xl p-6 flex flex-col md:flex-row gap-6 hover:shadow-[0_12px_24px_rgba(0,0,0,0.03)] hover:border-lime-primary transition-all duration-300 group items-center justify-between"
      id={`event-card-${event.id}`}
    >
      <div className="flex flex-col sm:flex-row items-center gap-6 w-full md:w-auto">
        <div className="flex flex-col items-center justify-center border-b sm:border-b-0 sm:border-r border-neutral-100 pb-4 sm:pb-0 pr-0 sm:pr-8 text-center min-w-[90px] shrink-0">
          <span className="text-xs text-neutral-400 uppercase tracking-widest mb-1 font-label">
            {event.month}
          </span>
          <span className="text-4xl font-extrabold text-club-dark leading-none font-display">
            {event.day}
          </span>
          <span className="text-xs text-neutral-400 mt-1 font-label">
            {event.year}
          </span>
        </div>

        <div className="flex-grow text-center sm:text-left">
          <h3 className="text-2xl font-extrabold text-club-dark mb-2 font-display group-hover:text-lime-primary transition-colors duration-200">
            {event.title}
          </h3>
          <p className="text-neutral-500 text-sm mb-4 leading-relaxed max-w-xl">
            {event.description}
          </p>
          
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {event.tags.map((tag) => (
              <span 
                key={tag} 
                className="bg-neutral-50 text-neutral-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-neutral-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <button 
        onClick={() => router.push(`/register?eventId=${event.id}`)}
        className="bg-lime-primary text-club-dark group-hover:bg-club-dark group-hover:text-white flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-bold text-sm min-w-[150px] transition-all duration-300 cursor-pointer shadow-sm w-full md:w-auto self-stretch md:self-center"
        aria-label={`Register for ${event.title}`}
      >
        <span>Register Now</span>
        <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
      </button>
    </div>
  );
}
