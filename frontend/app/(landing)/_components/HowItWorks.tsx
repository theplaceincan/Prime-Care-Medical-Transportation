export default function HowItWorks() {
  const steps = [
    { n: "1", t: "Call or Click", d: "Request a ride via phone or our simple online form." },
    { n: "2", t: "Get Matched", d: "We assign a certified driver who fits your specific needs." },
    { n: "3", t: "Safe Arrival", d: "Enjoy a comfortable, escorted ride to your destination." }
  ];

  return (
    <section id="how" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="bg-white rounded-super p-12 border-4 border-red-50 text-center">
        <h2 className="text-4xl font-extrabold mb-12">Booking is Easy as 1-2-3</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((s) => (
            <div key={s.n} className="space-y-4">
              <div className="w-16 h-16 bg-red-100 text-[#c1272d] rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                {s.n}
              </div>
              <h4 className="font-bold text-xl">{s.t}</h4>
              <p className="text-slate-500">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}