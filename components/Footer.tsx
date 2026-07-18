"use client";

import React from "react";
import { Heart, ArrowUpRight, Terminal, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import links from "../data/links.json";

export function Footer() {
  const router = useRouter();

  return (
    <footer className="bg-[#111111] text-white pt-16 pb-8 border-t border-neutral-800 relative z-20" id="site-footer">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group text-left cursor-pointer">
              <div className="w-8 h-8 bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center text-lime-primary group-hover:scale-105 transition-transform">
                <Terminal className="w-5 h-5 text-lime-primary" />
              </div>
              <div className="font-extrabold text-2xl leading-none tracking-tighter uppercase">
                TECH<br />
                <span className="text-lime-primary">TRIUMPHS</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              A student-driven tech community dedicated to learning, building and creating impact.
            </p>
            <p className="text-lime-primary font-extrabold text-sm uppercase tracking-wider">
              Learn. Build. Triumph.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-xs tracking-widest uppercase mb-6 text-neutral-300">
              Navigation
            </h4>
            <ul className="space-y-3.5 text-sm text-gray-400 font-label">
              <li>
                <Link href="/" className="hover:text-lime-primary transition-colors cursor-pointer text-left">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-lime-primary transition-colors cursor-pointer text-left">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/members" className="hover:text-lime-primary transition-colors cursor-pointer text-left">
                  Members
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => {
                    router.push("/#pillars-section");
                    setTimeout(() => {
                      const el = document.getElementById("pillars-section");
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }, 150);
                  }} 
                  className="hover:text-lime-primary transition-colors cursor-pointer text-left"
                >
                  About
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs tracking-widest uppercase mb-6 text-neutral-300">
              Connect
            </h4>
            <ul className="space-y-4 text-sm text-gray-400 font-label">
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="flex items-center gap-3 hover:text-lime-primary transition-colors cursor-not-allowed opacity-50" title="Instagram coming soon">
                  {/* Instagram SVG */}
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f09433" />
                        <stop offset="25%" stopColor="#e6683c" />
                        <stop offset="50%" stopColor="#dc2743" />
                        <stop offset="75%" stopColor="#cc2366" />
                        <stop offset="100%" stopColor="#bc1888" />
                      </linearGradient>
                    </defs>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="url(#ig-grad)" strokeWidth="1.8" fill="none" />
                    <circle cx="12" cy="12" r="4.5" stroke="url(#ig-grad)" strokeWidth="1.8" fill="none" />
                    <circle cx="17.5" cy="6.5" r="1" fill="#cc2366" />
                  </svg>
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-lime-primary transition-colors">
                  {/* LinkedIn SVG */}
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0A66C2" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-lime-primary transition-colors">
                  {/* WhatsApp SVG */}
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                  <span>WhatsApp Group</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-xs tracking-widest uppercase text-neutral-300">
              Stay in the Loop
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Join our WhatsApp community focused on high-quality technical updates and workshops.
            </p>
            <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-between border border-lime-primary/50 hover:border-lime-primary px-5 py-3 rounded-xl text-white font-bold group hover:bg-lime-primary/10 transition-all w-full max-w-[260px]">
              <span className="flex items-center gap-2.5 text-sm">
                <MessageCircle className="w-5 h-5 text-lime-primary" />
                <span>Join WhatsApp Group</span>
              </span>
              <ArrowUpRight className="w-4 h-4 ml-2 text-lime-primary" />
            </a>
          </div>

        </div>

        <hr className="border-neutral-800 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© 2026 Tech Triumphs. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-2 text-center md:text-left justify-center md:justify-start">
            <span>Building the next generation of tech leaders.</span>
            <span className="hidden md:inline text-neutral-800 mx-1">|</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-3.5 h-3.5 text-lime-primary fill-lime-primary mx-0.5" /> by Tech Triumphs
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
