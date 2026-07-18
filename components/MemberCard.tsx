"use client";
import React from "react";
import { Link as LinkedinIcon, GitBranch, User } from "lucide-react";
import { TeamMember } from "../data/clubData";
import Image from "next/image";

interface MemberCardProps {
  member: TeamMember;
}

export function MemberCard({ member }: MemberCardProps) {
  return (
    <div 
      className="relative w-full h-[420px] overflow-hidden rounded-[2rem] border border-neutral-800 shadow-2xl group flex flex-col justify-end p-6 select-none bg-neutral-950"
      id={`member-card-${member.id}`}
    >
      <div className="absolute top-5 left-5 z-20">
        <span className="bg-[#DFFF00] text-black text-[10px] font-black uppercase px-4 py-1.5 rounded-full tracking-widest font-sans shadow-lg block">
          {member.role}
        </span>
      </div>

      <div className="absolute inset-0 w-full h-full">
        {member.avatarUrl ? (
          <Image 
            src={member.avatarUrl} 
            alt={member.name} 
            className="w-full h-full object-cover grayscale contrast-[1.15] brightness-[0.9] transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100" 
            fill
          />
        ) : (
          <div className="w-full h-full bg-neutral-900 flex items-center justify-center">
            <User className="w-16 h-16 text-neutral-600" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10" />
      </div>

      <div className="relative z-20 space-y-1 text-left">
        {member.subtitle && (
          <p className="text-[#DFFF00] text-[10px] sm:text-xs font-black uppercase tracking-wider font-sans leading-none mb-1">
            {member.subtitle}
          </p>
        )}
        
        <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight font-display">
          {member.name}
        </h3>
        
        {member.department && (
          <p className="text-neutral-400 text-xs font-sans">
            {member.department}
          </p>
        )}

        {member.skills && (
          <p className="text-neutral-300 text-xs font-mono pt-1 tracking-wide">
            {member.skills}
          </p>
        )}

        <div className="flex gap-2.5 pt-3">
          {member.linkedinUrl && (
            <a 
              href={member.linkedinUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-full bg-neutral-900/80 hover:bg-[#DFFF00] text-neutral-300 hover:text-black transition-all duration-300 flex items-center justify-center border border-neutral-800 shadow-md transform hover:scale-110 active:scale-95"
              aria-label={`${member.name} LinkedIn`}
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          )}
          {member.githubUrl && (
            <a 
              href={member.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-full bg-neutral-900/80 hover:bg-[#DFFF00] text-neutral-300 hover:text-black transition-all duration-300 flex items-center justify-center border border-neutral-800 shadow-md transform hover:scale-110 active:scale-95"
              aria-label={`${member.name} GitHub`}
            >
              <GitBranch className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
