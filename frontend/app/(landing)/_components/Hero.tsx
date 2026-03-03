"use client";
import Image from 'next/image';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="pt-40 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8">
            Safe Rides for <br />
            <span className="text-prime-red">Loved Ones.</span>
          </h1>
          <p className="text-slate-500 text-xl mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
            Gentle, reliable medical transportation designed for seniors and those in need. We make every journey stress-free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="/book-ride" className="inline-block bg-prime-red text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl shadow-red-500/30 hover-lift text-center">
              Book a Friendly Ride
            </a>
            <button
              onClick={() => scrollTo("services")}
              className="inline-block bg-white border-2 border-slate-100 px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-50 transition cursor-pointer"
            >
              Our Services
            </button>
          </div>
          <div className="mt-12 flex items-center justify-center lg:justify-start gap-6 opacity-60">
            <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-wider">
              <span className="text-2xl">🛡️</span> Fully Insured
            </div>
            <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-wider">
              <span className="text-2xl">❤️</span> Caregivers First
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="bg-red-50 absolute inset-0 rounded-super -rotate-3 -z-10"></div>
          <div className="bg-white p-4 rounded-super soft-shadow rotate-2 overflow-hidden border-4 border-white">
            <div className="bg-slate-50 rounded-4xl h-112.5 overflow-hidden relative">
              <Image
                src="/landing.png"
                alt="Prime Care Medical Transportation Van"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-10 right-10 bg-white p-6 rounded-3xl shadow-2xl flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">✅</div>
              <div className="text-left">
                <p className="font-bold text-slate-800">CPR Certified</p>
                <p className="text-xs text-slate-500">Every driver is trained</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}