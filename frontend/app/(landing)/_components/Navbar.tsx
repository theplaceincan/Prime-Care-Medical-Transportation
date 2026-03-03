"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md py-4 px-6 border-b border-slate-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Link href="/"><Image src="/pcmt.png" alt="Prime Care Logo" width={100} height={48} className="h-8 hidden md:block" /></Link>
        </div>
        <div className="hidden md:flex gap-10 font-semibold text-slate-600">
          <Link href="/about" className="hover:text-[#c1272d] transition">About</Link>
          <button onClick={() => scrollTo("services")} className="hover:text-[#c1272d] transition cursor-pointer">Services</button>
          <button onClick={() => scrollTo("how")} className="hover:text-[#c1272d] transition cursor-pointer">How it Works</button>
          <Link href="/careers" className="hover:text-[#c1272d] transition">Careers</Link>
        </div>
        <a href="tel:1234567890" className="bg-[#c1272d] text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-red-500/20 hover:scale-105 transition">
          Call Now
        </a>
      </div>
    </nav>
  );
}