import Image from 'next/image';

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">How We Can Help</h2>
          <div className="w-20 h-1.5 bg-prime-red mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-white p-10 rounded-super soft-shadow hover-lift flex flex-col md:flex-row gap-8 items-center text-left">
            <div className="bg-red-50 p-8 rounded-3xl shrink-0">
              <Image src="/pcmticon.png" alt="Icon" width={96} height={96} />
            </div>
            <div>
              <h3 className="text-3xl font-extrabold mb-4">Senior Mobility</h3>
              <p className="text-slate-500 text-lg leading-relaxed">Door-to-door escort for elderly passengers. We help with getting in and out of the vehicle and ensure they reach their appointment safely.</p>
            </div>
          </div>

          <div className="bg-prime-red p-10 rounded-super text-white shadow-xl shadow-red-900/20 hover-lift text-left">
            <h3 className="text-2xl font-bold mb-4">Dialysis Care</h3>
            <p className="text-red-50/80 mb-6">Punctual and reliable transport for regular treatments. We manage the schedule so you don't have to.</p>
            <span className="bg-white/20 px-4 py-2 rounded-full text-xs font-bold uppercase">Weekly Recurring</span>
          </div>

          <div className="bg-white p-8 rounded-super soft-shadow hover-lift border-2 border-transparent hover:border-red-100 text-left">
            <h3 className="text-xl font-bold mb-2">Hospital Returns</h3>
            <p className="text-slate-500 text-sm italic">"Friendly & professional care from the ward to your front door."</p>
          </div>

          <div className="bg-white p-8 rounded-super soft-shadow hover-lift border-2 border-transparent hover:border-red-100 text-left">
            <h3 className="text-xl font-bold mb-2">Child Assistance</h3>
            <p className="text-slate-500 text-sm">Safe transportation to therapy or specialist appointments for children.</p>
          </div>

          <div className="bg-white p-8 rounded-super soft-shadow hover-lift border-2 border-transparent hover:border-red-100 text-left">
            <h3 className="text-xl font-bold mb-2">Wheelchair Ready</h3>
            <p className="text-slate-500 text-sm">Equipped with the best hydraulic lifts for a smooth, bump-free ride.</p>
          </div>
        </div>
      </div>
    </section>
  );
}