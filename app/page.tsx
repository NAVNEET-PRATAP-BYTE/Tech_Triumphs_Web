"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight, Users, CalendarCheck, UserCheck, Network, Cpu, Star } from "lucide-react";
import links from "@/data/links.json";
import { UPCOMING_EVENTS } from "@/data/clubData";

interface JourneyPillar {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  cardBgClass: string;
  textHeaderClass: string;
  textPClass: string;
  barClass: string;
  imgBlendStyles: string;
}

const JOURNEY_PILLARS: JourneyPillar[] = [
  {
    id: "pillar-learn",
    number: "01",
    title: "LEARN",
    description: "Workshops, sessions & resources to level up.",
    image: "/pic1.png",
    cardBgClass: "bg-[#DFFF00] hover:shadow-[0_20px_40px_rgba(223, 255, 0, 0.18)]",
    textHeaderClass: "text-black",
    textPClass: "text-black/85",
    barClass: "bg-black",
    imgBlendStyles: "mix-blend-multiply opacity-80 group-hover:opacity-100",
  },
  {
    id: "pillar-build",
    number: "02",
    title: "BUILD",
    description: "Hackathons, projects & real-world problem solving.",
    image: "/pic2.png",
    cardBgClass: "bg-zinc-100 border border-neutral-200/60 hover:shadow-[0_20px_40px_rgba(0, 0, 0, 0.03)]",
    textHeaderClass: "text-black",
    textPClass: "text-zinc-500",
    barClass: "bg-black",
    imgBlendStyles: "mix-blend-multiply opacity-80 group-hover:opacity-100",
  },
  {
    id: "pillar-triumph",
    number: "03",
    title: "TRIUMPH",
    description: "Win competitions, get recognized, make impact.",
    image: "/pic3.png",
    cardBgClass: "bg-zinc-950 border border-neutral-900 hover:shadow-[0_20px_40px_rgba(0, 0, 0, 0.25)] hover:border-lime-primary",
    textHeaderClass: "text-white",
    textPClass: "text-neutral-400",
    barClass: "bg-[#DFFF00]",
    imgBlendStyles: "invert brightness-[1.1] opacity-75 group-hover:opacity-100 mix-blend-screen",
  },
  {
    id: "pillar-support",
    number: "04",
    title: "SUPPORT",
    description: "Mentorship, networking & community growth.",
    image: "/pic4.png",
    cardBgClass: "bg-zinc-100 border border-neutral-200/60 hover:shadow-[0_20px_40px_rgba(0, 0, 0, 0.03)]",
    textHeaderClass: "text-black",
    textPClass: "text-zinc-500",
    barClass: "bg-black",
    imgBlendStyles: "mix-blend-multiply opacity-80 group-hover:opacity-100",
  },
];

export default function HomePage() {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState({
    days: 5, hours: 14, minutes: 32, seconds: 48,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        else if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        else if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        else if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        else return { days: 5, hours: 14, minutes: 32, seconds: 48 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const sectionRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const section = sectionRef.current;
    if (!section) return;
    const rect = section.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    section.style.setProperty("--mouse-x", `${x}px`);
    section.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleMouseLeave = () => {
    const section = sectionRef.current;
    if (!section) return;
    section.style.setProperty("--mouse-x", `-999px`);
    section.style.setProperty("--mouse-y", `-999px`);
  };

  return (
    <div className="w-full relative">
      <section 
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative overflow-hidden min-h-screen flex flex-col justify-center items-center text-center px-6 pt-16 pb-48 select-none group bg-[#111111]"
      >
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1.5px,transparent_1.5px)] [background-size:22px_22px] opacity-100" />
          <div 
            className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.85)_1.5px,transparent_1.5px)] [background-size:22px_22px] transition-opacity duration-300"
            style={{
              maskImage: 'radial-gradient(circle 180px at var(--mouse-x, -999px) var(--mouse-y, -999px), white 0%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(circle 180px at var(--mouse-x, -999px) var(--mouse-y, -999px), white 0%, transparent 100%)'
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#111111_85%)]" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-6xl mx-auto">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10.5rem] font-black leading-[0.85] tracking-widest uppercase font-display flex flex-col text-center">
            <span className="text-lime-primary drop-shadow-[0_0_40px_rgba(223,255,0,0.45)] flex items-center justify-center gap-1 sm:gap-2">
              <svg 
                viewBox="3500 1250 1230 1310" 
                fill="currentColor" 
                className="w-[1.2em] h-[1.2em] text-[#DFFF00] z-30 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fillRule="evenodd" d="M 3917.089844 1729.246094 C 3973.121094 1728.265625 4024.421875 1719.574219 4071.449219 1693.828125 C 4113.699219 1670.699219 4143.691406 1636.378906 4158.359375 1590.179688 C 4172.378906 1546.03125 4148.820312 1511.269531 4102.679688 1506.089844 C 4082.820312 1503.871094 4063.679688 1507.121094 4045.121094 1514.121094 C 4011.441406 1526.820312 3983.019531 1547.269531 3958.289062 1573.148438 C 3918.980469 1614.289062 3894.128906 1662.839844 3883.210938 1718.675781 C 3881.878906 1725.511719 3883.691406 1727.941406 3890.449219 1728.058594 C 3900.339844 1728.234375 3910.230469 1728.921875 3917.089844 1729.246094 M 4527.78125 2359.550781 C 4528.058594 2356.160156 4525.511719 2354.089844 4523.949219 2351.675781 C 4502.039062 2317.816406 4484.550781 2281.789062 4470.898438 2243.882812 C 4464.648438 2226.539062 4460.789062 2208.75 4462.21875 2190.125 C 4462.648438 2184.503906 4463.660156 2179.027344 4465.871094 2173.839844 C 4472.570312 2158.046875 4487.941406 2154.179688 4501.261719 2164.941406 C 4507.660156 2170.117188 4512.359375 2176.792969 4516.960938 2183.492188 C 4532.949219 2206.753906 4547.191406 2231.089844 4561.078125 2255.636719 C 4595.980469 2317.289062 4637.730469 2374.171875 4681.789062 2429.449219 C 4685.929688 2434.628906 4690.589844 2439.285156 4695.808594 2443.386719 C 4700.808594 2447.324219 4705.410156 2451.695312 4709.210938 2456.835938 C 4723.480469 2476.175781 4720.050781 2501.140625 4700.949219 2515.738281 C 4688.46875 2525.285156 4673.789062 2529.34375 4658.621094 2531.71875 C 4636.730469 2535.148438 4614.609375 2535.984375 4592.539062 2536.714844 C 4541.160156 2538.425781 4490.359375 2545.328125 4439.441406 2551.792969 C 4394.089844 2557.554688 4348.300781 2558.734375 4302.558594 2558.835938 C 4295.199219 2558.847656 4287.800781 2558.316406 4280.730469 2555.984375 C 4270.609375 2552.648438 4263.441406 2546.21875 4261.328125 2535.453125 C 4259.171875 2524.414062 4263.351562 2515.535156 4271.871094 2508.542969 C 4278.46875 2503.128906 4286.269531 2499.902344 4294.21875 2497.277344 C 4362.851562 2474.695312 4431.78125 2453.464844 4504.960938 2452.019531 C 4506.929688 2451.980469 4509.050781 2452.289062 4510.859375 2450.785156 C 4511.179688 2448.246094 4508.898438 2448.164062 4507.5 2447.648438 C 4418.960938 2415.375 4338.160156 2367.535156 4256.308594 2321.988281 C 4184.609375 2282.085938 4114.441406 2239.46875 4047.601562 2191.722656 C 3987.070312 2148.507812 3932.539062 2098.871094 3889.589844 2037.636719 C 3845.691406 1975.066406 3816.238281 1906.628906 3807.851562 1830.003906 C 3806.460938 1817.371094 3805.5 1804.695312 3805.761719 1791.984375 C 3805.851562 1787.246094 3804.25 1784.632812 3799.640625 1782.9375 C 3710.648438 1750.285156 3645.269531 1689.839844 3596.949219 1609.679688 C 3556.820312 1543.101562 3530.300781 1471.691406 3522.769531 1393.878906 C 3519.660156 1361.679688 3519.03125 1329.460938 3526.46875 1297.621094 C 3528.949219 1286.988281 3532.929688 1282.128906 3539.011719 1282.71875 C 3548.308594 1283.640625 3549.320312 1291.378906 3550.730469 1298.328125 C 3560.53125 1346.609375 3569.320312 1395.160156 3584.71875 1442.070312 C 3608.308594 1513.921875 3643.019531 1579.488281 3696.421875 1633.96875 C 3727.570312 1665.761719 3764.191406 1689.691406 3805.238281 1706.863281 C 3813.890625 1710.484375 3813.898438 1710.402344 3816 1701.21875 C 3838.929688 1600.769531 3895.089844 1523.46875 3981.191406 1468.199219 C 4021.539062 1442.289062 4066.53125 1430.851562 4114.960938 1435.601562 C 4209.578125 1444.871094 4265.269531 1528.53125 4235.640625 1618.941406 C 4214.800781 1682.519531 4172.269531 1729.195312 4114.359375 1761.046875 C 4044.820312 1799.296875 3969.410156 1810.617188 3890.921875 1804.003906 C 3878.78125 1802.980469 3878.558594 1802.765625 3880.5 1815.105469 C 3891.5 1884.925781 3921.359375 1946.085938 3966.5 1999.984375 C 4010.308594 2052.269531 4063.191406 2094.144531 4119.660156 2131.703125 C 4212.449219 2193.40625 4309.410156 2247.800781 4409.320312 2297.09375 C 4447.808594 2316.082031 4486.128906 2335.457031 4522.839844 2357.824219 C 4524.269531 2358.703125 4525.621094 2360.074219 4527.78125 2359.550781" />
              </svg>
              LEARN
            </span>
            <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.1)] inline-flex items-center justify-center">
              BU
              <span className="relative inline-flex items-center">
                ILD
                <svg 
                  viewBox="2610 1610 780 950" 
                  className="absolute -top-[10%] -right-[25%] w-[0.9em] h-[0.9em] text-[#DFFF00] z-30 pointer-events-none"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M 2807.730469 2358.839844 C 2808.351562 2363.316406 2810.71875 2365.425781 2812.410156 2367.890625 C 2831 2394.914062 2852.898438 2419.40625 2871.910156 2446.113281 C 2883.410156 2462.292969 2893.699219 2479.210938 2902.339844 2497.089844 C 2907.230469 2507.210938 2911.089844 2517.675781 2910.480469 2529.234375 C 2909.648438 2545.183594 2899.039062 2554.898438 2883.03125 2554.359375 C 2873.269531 2554.035156 2864.839844 2549.976562 2856.839844 2544.882812 C 2839.539062 2533.871094 2825.589844 2519.113281 2811.320312 2504.601562 C 2755.828125 2448.15625 2712.261719 2382.363281 2665.328125 2319.214844 C 2653.21875 2302.910156 2640.539062 2287.007812 2629.601562 2269.84375 C 2609.359375 2238.109375 2619.609375 2207.035156 2655.171875 2194.347656 C 2680.761719 2185.214844 2707.691406 2182.28125 2734.558594 2180.738281 C 2781.710938 2178.019531 2829.011719 2176.824219 2876.199219 2178.191406 C 2910.699219 2179.1875 2944.949219 2184.617188 2979.109375 2189.691406 C 2986.898438 2190.855469 2994.480469 2193.109375 3001.75 2196.257812 C 3007.148438 2198.601562 3012.148438 2201.5625 3016.371094 2205.746094 C 3031.199219 2220.484375 3026.28125 2241.640625 3006.320312 2247.8125 C 2993.628906 2251.730469 2980.390625 2253.019531 2967.238281 2253.972656 C 2926.898438 2256.90625 2887.75 2268.453125 2847.300781 2270.542969 C 2846.429688 2270.59375 2845.558594 2271.121094 2843.910156 2271.703125 C 2845.328125 2272.769531 2845.980469 2273.546875 2846.789062 2273.835938 C 2886.230469 2288.101562 2923.289062 2308.207031 2963.109375 2321.453125 C 3029.71875 2343.617188 3097.941406 2355.824219 3168.398438 2351.105469 C 3194.660156 2349.351562 3219.988281 2342.773438 3244.28125 2332.414062 C 3276.429688 2318.710938 3295.789062 2294.996094 3302.441406 2260.488281 C 3309.050781 2226.285156 3305.300781 2192.753906 3297.890625 2159.253906 C 3286.480469 2107.691406 3265.230469 2060 3240.71875 2013.59375 C 3196.609375 1930.058594 3145.011719 1851.355469 3088.519531 1775.71875 C 3061.171875 1739.082031 3034.378906 1701.988281 3015.238281 1660.101562 C 3011.96875 1652.941406 3008.460938 1645.820312 3007.460938 1637.898438 C 3006.71875 1632.019531 3006.269531 1625.789062 3012.261719 1622.171875 C 3018.230469 1618.570312 3023.558594 1621.601562 3028.328125 1625.28125 C 3042.230469 1635.988281 3055.039062 1647.941406 3067.769531 1660.011719 C 3182.308594 1768.789062 3269.5 1897.246094 3338.628906 2038.414062 C 3365.980469 2094.265625 3383.109375 2153.453125 3387.929688 2215.8125 C 3390.128906 2244.136719 3388.5 2272.136719 3381.128906 2299.699219 C 3365.761719 2357.082031 3327.460938 2394.054688 3275.128906 2418.125 C 3234.539062 2436.789062 3191.371094 2444.261719 3146.960938 2444.535156 C 3078.769531 2444.96875 3012.621094 2431.582031 2947.378906 2413.203125 C 2900.609375 2400.011719 2855.039062 2383.445312 2812.019531 2360.484375 C 2810.960938 2359.914062 2809.75 2359.601562 2807.730469 2358.839844" />
                </svg>
              </span>
            </span>
            <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.1)] inline-flex items-center justify-center">
              <span className="relative inline-flex items-center">
                TRI
                <svg 
                  viewBox="2110 160 1180 350" 
                  className="absolute -bottom-[20%] left-[-5%] w-[1.1em] h-[0.35em] text-[#DFFF00] z-30 pointer-events-none"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M 3128.359375 353.558594 C 3122.769531 354.609375 3118.890625 357.488281 3114.789062 359.691406 C 3020.609375 410.46875 2922.058594 449.75 2817.410156 472.949219 C 2656.46875 508.621094 2500.160156 492.289062 2348.839844 428.628906 C 2287.941406 403 2233.820312 365.75 2186.738281 319.300781 C 2152.761719 285.769531 2128.078125 246.050781 2117.390625 198.769531 C 2115.378906 189.871094 2113.988281 180.75 2116.28125 171.601562 C 2117.421875 167 2119.269531 162.75 2124.46875 161.589844 C 2129.820312 160.398438 2132.921875 163.78125 2135.71875 167.671875 C 2144.460938 179.839844 2153.828125 191.589844 2161.960938 204.148438 C 2200.578125 263.75 2253.730469 306.679688 2315.890625 339.429688 C 2395.519531 381.390625 2480.761719 403.171875 2570.019531 411.371094 C 2686.308594 422.058594 2798.25 402.800781 2907.71875 364.628906 C 2963.949219 345.019531 3019 322.871094 3070.839844 293.320312 C 3073.480469 291.808594 3076.019531 290.128906 3078.558594 288.460938 C 3078.871094 288.261719 3078.859375 287.578125 3079.039062 286.96875 C 3076.269531 285.058594 3073.179688 286.148438 3070.300781 286.199219 C 3017.960938 287.199219 2965.660156 287.300781 2913.621094 280.351562 C 2899.96875 278.53125 2886.679688 275.230469 2873.96875 269.828125 C 2868.101562 267.339844 2862.539062 264.28125 2857.949219 259.75 C 2847.960938 249.859375 2850.519531 238.839844 2864.058594 235.121094 C 2885.941406 229.128906 2908.339844 226.019531 2930.988281 225.21875 C 2976.671875 223.609375 3022.378906 222.460938 3068.058594 220.800781 C 3123.75 218.769531 3178.898438 211.910156 3233.589844 201.261719 C 3236.320312 200.730469 3239.089844 200.210938 3241.859375 199.929688 C 3266.96875 197.371094 3285.140625 216.671875 3281.140625 241.621094 C 3279.789062 250.019531 3276.230469 257.609375 3272.359375 265.058594 C 3264.609375 279.960938 3255.679688 294.148438 3246.421875 308.109375 C 3226.488281 338.171875 3206.441406 368.148438 3186.300781 398.070312 C 3175.621094 413.898438 3163.429688 428.519531 3149.480469 441.621094 C 3139.429688 451.039062 3131.101562 461.941406 3122.480469 472.609375 C 3117.058594 479.328125 3111.640625 486.070312 3105.929688 492.539062 C 3099.289062 500.058594 3091.640625 502.230469 3084.25 499.21875 C 3076.878906 496.210938 3072.160156 488.191406 3072.460938 478.71875 C 3072.730469 470.179688 3075.179688 462.050781 3079.320312 454.75 C 3097.25 423.140625 3106.820312 387.429688 3127.339844 357.121094 C 3127.828125 356.390625 3127.859375 355.359375 3128.359375 353.558594" />
                </svg>
              </span>
              UMPH
            </span>
          </h1>
        </div>

        <div 
          onClick={() => router.push("/events")}
          className="absolute right-[5%] sm:right-[15%] bottom-16 sm:bottom-20 md:bottom-24 z-30 pointer-events-auto cursor-pointer group/badge"
        >
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center">
            <div className="absolute w-[62%] h-[62%] bg-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover/badge:scale-[1.06] z-10">
              <div className="transition-transform duration-300 ease-out transform group-hover/badge:rotate-45 flex items-center justify-center origin-center">
                <svg className="w-8 h-8 sm:w-11 sm:h-11 text-[#0a0a0a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
            </div>
            <svg className="w-full h-full rotating-badge relative z-20 pointer-events-none" viewBox="0 0 100 100">
              <path id="badge-path" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
              <text className="font-bold text-[6px] uppercase tracking-[0.2em] fill-lime-primary font-label">
                <textPath href="#badge-path">LEARN • BUILD • TRIUMPH • LEVEL UP YOUR SKILLS •</textPath>
              </text>
            </svg>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden block leading-[0] z-20 pointer-events-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] sm:h-[100px] lg:h-[130px] scale-x-[1.02] translate-y-[1px]">
            <path d="M0,40 C200,105 450,115 650,75 C850,35 1050,45 1200,75 L1200,120 L0,120 Z" className="fill-white" />
          </svg>
        </div>
      </section>

      <section className="bg-white pt-24 pb-12 relative z-30 border-b border-neutral-200/50 overflow-hidden">
        <div className="px-6 md:px-12 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-10">
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="font-extrabold text-xs tracking-[0.25em] text-[#869910] uppercase font-label">
                LEARN • BUILD • TRIUMPH
              </span>
              <h3 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-sans font-black leading-[0.8] tracking-tighter uppercase select-none">
                <span className="text-[#1a1c24] block">TECH</span>
                <span className="text-[#1a1c24] block">TRIUMPHS</span>
              </h3>
              <p className="text-[#4f566b] font-sans text-base sm:text-lg max-w-lg leading-relaxed mt-4">
                A student-driven tech community building skills, products and leaders for the future. Join us to transform your ideas into reality.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <a
                  href={links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#DFFF00] text-black hover:bg-neutral-900 hover:text-[#DFFF00] hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 px-8 py-4 rounded-xl font-extrabold text-sm font-label flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#DFFF00]/10 select-none text-center"
                >
                  <span>Join Community</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button 
                  onClick={() => router.push("/events")}
                  className="border border-[#232733] text-[#232733] hover:bg-neutral-900 hover:text-[#DFFF00] hover:border-neutral-900 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 px-8 py-4 rounded-xl font-extrabold text-sm font-label flex items-center justify-center gap-2 cursor-pointer select-none"
                >
                  <span>Explore Events</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end relative z-10 w-full mt-8 lg:mt-0">
              <div className="w-full max-w-[380px] bg-[#1c1d24] p-8 rounded-[2rem] border border-neutral-800 shadow-2xl text-left">
                <span className="font-extrabold text-[10px] text-[#DFFF00] uppercase tracking-[0.25em] font-label block mb-2">Upcoming Event</span>
                <h4 className="font-extrabold text-white text-2xl sm:text-3xl mb-4 tracking-tight font-display leading-tight">{UPCOMING_EVENTS[0]?.title || "Upcoming Event"}</h4>
                <div className="grid grid-cols-4 gap-4 text-left mb-6 select-none font-sans">
                  <div><div className="text-5xl font-black text-white tracking-tight leading-none">{String(timeLeft.days).padStart(2, "0")}</div><div className="text-[9px] text-neutral-400 font-bold uppercase tracking-widest mt-1">DAYS</div></div>
                  <div><div className="text-5xl font-black text-[#DFFF00] tracking-tight leading-none">{String(timeLeft.hours).padStart(2, "0")}</div><div className="text-[9px] text-neutral-400 font-bold uppercase tracking-widest mt-1">HOURS</div></div>
                  <div><div className="text-5xl font-black text-white tracking-tight leading-none">{String(timeLeft.minutes).padStart(2, "0")}</div><div className="text-[9px] text-neutral-400 font-bold uppercase tracking-widest mt-1">MINS</div></div>
                  <div><div className="text-5xl font-black text-white tracking-tight leading-none">{String(timeLeft.seconds).padStart(2, "0")}</div><div className="text-[9px] text-neutral-400 font-bold uppercase tracking-widest mt-1">SECS</div></div>
                </div>
                <button onClick={() => router.push("/register")} className="w-full bg-[#292a34] hover:bg-[#DFFF00] hover:text-black py-4 px-5 rounded-2xl flex justify-between items-center text-white text-xs font-black font-label">
                  <span>Register Now</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 mt-16 pb-4">
            <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.015)] border border-transparent flex flex-col items-center text-center group transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#DFFF00] text-zinc-950 flex items-center justify-center mb-4 group-hover:bg-[#111111] group-hover:text-[#DFFF00] transition-all duration-300 shadow-sm"><Users className="w-7 h-7 text-current transition-colors duration-300" /></div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#111111] mb-0.5 font-display tracking-tight leading-none">600+</div>
              <div className="text-[10px] sm:text-xs font-bold text-neutral-400 uppercase tracking-widest font-label mt-1">Event Participants</div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.015)] border border-transparent flex flex-col items-center text-center group transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#DFFF00] text-zinc-950 flex items-center justify-center mb-4 group-hover:bg-[#111111] group-hover:text-[#DFFF00] transition-all duration-300 shadow-sm"><CalendarCheck className="w-7 h-7 text-current transition-colors duration-300" /></div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#111111] mb-0.5 font-display tracking-tight leading-none">20+</div>
              <div className="text-[10px] sm:text-xs font-bold text-neutral-400 uppercase tracking-widest font-label mt-1">Events Organized</div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.015)] border border-transparent flex flex-col items-center text-center group transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#DFFF00] text-zinc-950 flex items-center justify-center mb-4 group-hover:bg-[#111111] group-hover:text-[#DFFF00] transition-all duration-300 shadow-sm"><UserCheck className="w-7 h-7 text-current transition-colors duration-300" /></div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#111111] mb-0.5 font-display tracking-tight leading-none">100+</div>
              <div className="text-[10px] sm:text-xs font-bold text-neutral-400 uppercase tracking-widest font-label mt-1">Active Members</div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.015)] border border-transparent flex flex-col items-center text-center group transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#DFFF00] text-zinc-950 flex items-center justify-center mb-4 group-hover:bg-[#111111] group-hover:text-[#DFFF00] transition-all duration-300 shadow-sm"><Network className="w-7 h-7 text-current transition-colors duration-300" /></div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#111111] mb-0.5 font-display tracking-tight leading-none">55+</div>
              <div className="text-[10px] sm:text-xs font-bold text-neutral-400 uppercase tracking-widest font-label mt-1">Community Followers</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pt-24 pb-24 relative z-30 border-b border-neutral-100 overflow-hidden" id="pillars-section">
        <div className="px-6 md:px-12 max-w-7xl mx-auto w-full relative">
          {/* TECH TRIUMPHS Watermark */}
          <span className="absolute left-[5%] md:left-0 lg:-left-[120px] -top-16 md:-top-12 text-[12vw] sm:text-[14vw] font-black text-neutral-100/90 tracking-tighter uppercase select-none pointer-events-none -z-10 leading-none font-display flex flex-col lg:flex-row md:gap-0 lg:gap-4 text-center md:text-left">
            <span className="block">TECH</span>
            <span className="block">TRIUMPHS</span>
          </span>
          <div className="mb-14 text-center md:text-left relative z-10">
            <h2 className="text-4xl sm:text-5xl font-black text-club-dark font-display leading-tight tracking-tight mt-1">Four Pillars. One Mission.</h2>
            <p className="text-neutral-500 font-sans text-base max-w-xl mt-3">We stand together on collective principles to inspire creativity, cultivate skills, and foster peer-learning networks.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {JOURNEY_PILLARS.map((pillar) => (
              <div key={pillar.id} className={`${pillar.cardBgClass} p-10 rounded-[2rem] min-h-[460px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden`}>
                <div className="relative z-10">
                  <h3 className="font-extrabold text-3xl mb-4 uppercase font-display tracking-tight"><span className={pillar.textHeaderClass}>{pillar.title}</span></h3>
                  <p className={`${pillar.textPClass} font-sans text-base`}>{pillar.description}</p>
                </div>

                {pillar.image && (
                  <Image 
                    src={pillar.image} 
                    alt={pillar.title}
                    width={1000}
                    height={1000}
                    className="absolute right-[-28px] bottom-[16px] w-60 h-60 object-contain transition-transform duration-500 ease-out -translate-y-4 group-hover:scale-110 group-hover:-translate-y-6 group-hover:-translate-x-2"
                    style={{
                      mixBlendMode: pillar.title === "TRIUMPH" ? "screen" : "multiply",
                      filter: pillar.title === "TRIUMPH" ? "invert(1) brightness(1.1)" : "none"
                    }}
                  />
                )}
                
                <div className="mt-auto relative z-10">
                  <div className={`text-7xl font-black leading-none tracking-tighter ${pillar.textHeaderClass}`}>{pillar.number}</div>
                  <div className={`h-1.5 w-16 mt-4 transition-all duration-300 group-hover:w-24 ${pillar.barClass}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Section - Full Timeline */}
      <section className="bg-white py-12 md:py-16 relative z-30">
        <div className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto w-full">
          <div className="bg-[#0b0c10] rounded-[2.5rem] md:rounded-[3rem] py-16 md:py-20 px-6 sm:px-10 md:px-16 border border-zinc-900 shadow-2xl relative overflow-hidden text-white">
            <div className="absolute right-0 top-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-lime-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column */}
              <div className="lg:col-span-5 flex flex-col justify-center text-left space-y-6">
                <div>
                  <span className="text-xs font-bold tracking-[0.2em] text-[#DFFF00] bg-zinc-900 border border-zinc-800 px-3.5 py-1.5 rounded uppercase inline-block mb-3 font-mono shadow-sm">PAST EVENTS</span>
                  <h2 className="text-5xl sm:text-6xl font-black text-white font-display leading-[1.05] tracking-tight">Our Journey</h2>
                  <div className="inline-block bg-zinc-900 text-[#DFFF00] border border-zinc-800 font-black italic text-4xl sm:text-5xl px-7 py-3 rounded-[1.25rem] transform -rotate-1 mt-2.5 shadow-md">So Far.</div>
                </div>
                <p className="text-zinc-400 font-sans text-base leading-relaxed">From high-stakes hackathons to intensive technical workshops, we create immersive experiences that foster lifelong connections and empower the next generation of tech leaders.</p>
                <button
                  onClick={() => router.push("/events?tab=archive")}
                  className="group border border-zinc-800 hover:border-zinc-500 bg-zinc-900/80 hover:bg-zinc-900 px-8 py-4 rounded-xl font-extrabold text-sm text-zinc-100 transition-all shadow-sm hover:-translate-y-0.5 duration-300 w-fit flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore More Events</span>
                  <ArrowRight className="w-4 h-4 -rotate-45 group-hover:translate-x-0.5 transition-transform duration-300" />
                </button>
              </div>

              {/* Timeline Divider */}
              <div className="lg:col-span-1 justify-center relative hidden lg:flex h-full min-h-[500px]">
                <div className="absolute top-4 bottom-4 w-[2px] bg-zinc-800/60" />
                <div className="absolute top-[22%] -translate-y-1/2 w-5 h-5 rounded-full border-[3px] border-[#DFFF00] bg-zinc-950 flex items-center justify-center shadow-[0_0_12px_rgba(223,255,0,0.3)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#DFFF00]" />
                </div>
                <div className="absolute top-[72%] -translate-y-1/2 w-5 h-5 rounded-full border-[3px] border-[#DFFF00] bg-zinc-950 flex items-center justify-center shadow-[0_0_12px_rgba(223,255,0,0.3)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#DFFF00]" />
                </div>
              </div>

              {/* Right Column: Two Event Cards */}
              <div className="lg:col-span-6 flex flex-col gap-6 w-full">
                {/* Card 1 */}
                <div className="bg-zinc-950/50 rounded-3xl p-6 md:p-8 border border-zinc-900 flex flex-col sm:flex-row gap-6 items-center hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-zinc-800 hover:-translate-y-1.5 transition-all duration-300 group relative">
                  <div className="flex-1 flex flex-col justify-between text-left">
                    <div>
                      <span className="text-xs font-semibold text-zinc-500 font-mono tracking-wider block mb-2">MAY 18, 2025</span>
                      <h4 className="text-3xl font-black text-white leading-[1.05] mb-3 tracking-tight">Prompt<br/>Battle<br/>2025</h4>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed mt-1">A prompt engineering competition that challenged creativity and AI thinking.</p>
                  </div>
                  <div className="relative w-full sm:w-[220px] aspect-[4/3] rounded-2xl overflow-hidden shadow-sm shrink-0 border border-zinc-900 bg-zinc-900">
                    <Image src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=600" alt="Prompt Battle 2025" fill className="object-cover grayscale opacity-90 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-[0.1]" />
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-[#DFFF00] text-zinc-950 flex items-center justify-center shadow-md">
                      <Cpu className="w-4 h-4 text-black" />
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-zinc-950/50 rounded-3xl p-6 md:p-8 border border-zinc-900 flex flex-col sm:flex-row gap-6 items-center hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-zinc-800 hover:-translate-y-1.5 transition-all duration-300 group relative">
                  <div className="flex-1 flex flex-col justify-between text-left">
                    <div>
                      <span className="text-xs font-semibold text-zinc-500 font-mono tracking-wider block mb-2">APR 12, 2025</span>
                      <h4 className="text-3xl font-black text-white leading-[1.05] mb-3 tracking-tight">Techस्पर्धा<br/>2025</h4>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed mt-1">Our flagship tech fest with 6+ technical events and 600+ participants.</p>
                  </div>
                  <div className="relative w-full sm:w-[220px] aspect-[4/3] rounded-2xl overflow-hidden shadow-sm shrink-0 border border-zinc-900 bg-zinc-900">
                    <Image src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=600" alt="Techspardha 2025" fill className="object-cover grayscale opacity-90 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-[0.1]" />
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-[#DFFF00] text-zinc-950 flex items-center justify-center shadow-md">
                      <Star className="w-4 h-4 text-black fill-black" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration CTA Banner */}
      <section className="bg-white py-24 relative z-30">
        <div className="px-6 md:px-12 max-w-7xl mx-auto w-full">
          <div className="bg-club-dark rounded-3xl p-8 md:p-12 border border-neutral-800 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
            <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 w-96 h-96 bg-lime-primary/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="space-y-4 max-w-2xl text-center lg:text-left">
              <span className="font-bold text-xs text-lime-primary uppercase tracking-widest bg-neutral-900 px-3 py-1.5 rounded-md border border-neutral-800 inline-block font-label">Ready to make a splash?</span>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white leading-tight font-display">Collaborate, invent, or sponsor our mission.</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">Connect directly with our corporate relations department and build custom initiatives targeting student engineers.</p>
            </div>
            <button
              onClick={() => router.push("/events")}
              className="bg-lime-primary text-club-dark hover:bg-white hover:scale-105 active:scale-95 transition-all px-8 py-4 rounded-xl font-extrabold text-sm font-label flex items-center gap-2.5 whitespace-nowrap cursor-pointer z-10 shrink-0"
            >
              <span>Explore Upcoming Events</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
