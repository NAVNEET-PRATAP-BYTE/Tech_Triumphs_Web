"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X, Home, Clipboard, Bell, User } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import links from "../data/links.json";

export function Header() {
  const pathname = usePathname() || "";
  const router = useRouter();
  
  const currentView = pathname === "/" ? "home" : pathname.replace("/", "");

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mobileLinks = [
    { id: "home", label: "Home", icon: Home, href: "/" },
    { 
      id: "about",
      label: "About", 
      icon: Clipboard, 
      action: () => {
        router.push("/#pillars-section");
        setTimeout(() => {
          const el = document.getElementById("pillars-section");
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 150);
      } 
    },
    { id: "events", label: "Events", icon: Bell, href: "/events" },
    { id: "members", label: "Members", icon: User, href: "/members" }
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-neutral-800">
      <nav className="flex justify-between items-center h-20 px-6 md:px-12 w-full max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2 group text-left cursor-pointer">
          <div className="font-extrabold text-xl tracking-tight text-white font-sans transition-colors group-hover:text-lime-primary">
            Tech <span className="text-white">Triumphs</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center space-x-10 font-bold text-sm text-neutral-400 font-label">
          <Link href="/" className={`cursor-pointer hover:text-white transition-colors duration-200 pb-1 ${currentView === "home" ? "text-lime-primary border-b-2 border-lime-primary" : ""}`}>
            Home
          </Link>

          <Link href="/events" className={`cursor-pointer hover:text-white transition-colors duration-200 pb-1 ${currentView.startsWith("events") ? "text-lime-primary border-b-2 border-lime-primary" : ""}`}>
            Events
          </Link>

          <Link href="/members" className={`cursor-pointer hover:text-white transition-colors duration-205 pb-1 ${currentView === "members" ? "text-lime-primary border-b-2 border-lime-primary" : ""}`}>
            Members
          </Link>

          <button onClick={() => { router.push("/#pillars-section"); setTimeout(() => { const el = document.getElementById("pillars-section"); if (el) { el.scrollIntoView({ behavior: "smooth", block: "start" }); } }, 150); }} className="cursor-pointer hover:text-white transition-colors duration-200 pb-1 text-neutral-400">
            About
          </button>
        </div>

        <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="hidden lg:flex bg-lime-primary text-club-dark hover:bg-white hover:scale-[1.03] active:scale-[0.98] px-6 py-2 rounded-lg font-extrabold text-sm tracking-wide font-label transition-all duration-200 cursor-pointer shadow-md shadow-lime-primary/15 items-center justify-center h-10">
          Join us
        </a>

        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-zinc-400 hover:text-white p-2 transition-colors cursor-pointer" aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}>
          {isMobileMenuOpen ? <X className="w-6 h-6 animate-fade-in" /> : <Menu className="w-6 h-6 animate-fade-in" />}
        </button>
      </nav>

      <div className={`absolute top-20 left-0 right-0 w-full bg-black border-b border-zinc-900 transition-all duration-300 ease-in-out z-40 select-none overflow-hidden ${isMobileMenuOpen ? "max-h-[450px] opacity-100 visible border-t border-zinc-900/50 shadow-2xl" : "max-h-0 opacity-0 invisible"}`}>
        <div className="px-6 py-6 flex flex-col gap-6 max-w-7xl mx-auto">
          <div className="flex flex-col gap-1">
            {mobileLinks.map((link, idx) => (
              <button key={idx} onClick={() => { if(link.action) { link.action(); } else if(link.href) { router.push(link.href); } setIsMobileMenuOpen(false); }} className="w-full text-left py-3 px-4 rounded-xl hover:bg-zinc-900/50 transition-all duration-150 group">
                <span className="text-lg font-black tracking-wider text-white group-hover:text-lime-primary transition-colors duration-150 font-display uppercase block">
                  {link.label}
                </span>
              </button>
            ))}
          </div>
          <div className="pt-4 border-t border-zinc-900 flex flex-col gap-4">
            <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="w-full bg-lime-primary text-black hover:bg-white active:scale-95 py-3.5 rounded-xl font-extrabold uppercase tracking-wider text-xs transition-all duration-200 shadow-md cursor-pointer text-center block">
              Join Us
            </a>
            <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-600 font-mono text-center font-bold select-none">
              Tech Triumphs • 2026
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
