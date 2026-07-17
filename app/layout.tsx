import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { InteractiveDotGrid } from "@/components/InteractiveDotGrid";

export const metadata: Metadata = {
  title: "Tech Triumphs",
  description: "A student-driven tech community building skills, products and leaders for the future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex flex-col min-h-screen bg-[#0A0A0A] text-white relative antialiased overflow-x-hidden">
        <InteractiveDotGrid />
        <Header />
        
        <main className="flex-grow relative z-10">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
