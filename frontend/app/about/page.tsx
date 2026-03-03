import Navbar from "../(landing)/_components/Navbar";
import Footer from "../(landing)/_components/Footer";

const values = [
  {
    emoji: "❤️",
    title: "Compassion",
    description: "We treat every passenger like family — with patience, kindness, and genuine care at every step of the journey.",
  },
  {
    emoji: "⏰",
    title: "Reliability",
    description: "Punctuality is our promise. We know your appointments matter, and we show up on time, every time.",
  },
  {
    emoji: "🛡️",
    title: "Safety First",
    description: "Our vehicles are maintained to the highest standards and every driver is background-checked and CPR certified.",
  },
  {
    emoji: "🤝",
    title: "Integrity",
    description: "We operate with full transparency — no hidden fees, no surprises. Just honest, dependable service.",
  },
];

const team = [
  { name: "Coming Soon", role: "Founder & CEO", initials: "PC" },
  { name: "Coming Soon", role: "Operations Manager", initials: "PC" },
  { name: "Coming Soon", role: "Lead Driver", initials: "PC" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <section className="pt-36 pb-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-red-50 text-prime-red text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            About Us
          </span>
          <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
            More Than Just a Ride
          </h1>
          <p className="text-slate-500 text-xl leading-relaxed max-w-2xl mx-auto">
            Prime Care Medical Transportation was founded with one goal — to make sure everyone in Las Vegas
            has access to safe, dignified, and reliable medical transportation.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Our Core Values</h2>
            <div className="w-20 h-1.5 bg-prime-red mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white border-2 border-slate-100 rounded-super p-8 soft-shadow hover-lift flex gap-6 items-start"
              >
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
                  {v.emoji}
                </div>
                <div>
                  <h3 className="text-xl font-extrabold mb-2">{v.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Our Team</h2>
            <div className="w-20 h-1.5 bg-prime-red mx-auto rounded-full"></div>
            <p className="text-slate-500 mt-6 text-lg">The people behind every safe ride.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-super p-8 text-center soft-shadow hover-lift border-2 border-slate-100"
              >
                <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center text-prime-red font-extrabold text-xl mx-auto mb-5">
                  {member.initials}
                </div>
                <p className="font-extrabold text-lg text-slate-400">{member.name}</p>
                <p className="text-slate-400 text-sm mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-[#c1272d] rounded-[3rem] p-12 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-bold mb-6">Ready to ride with us?</h2>
          <p className="text-red-100 mb-10 text-lg">
            Book a ride online or give us a call — we're happy to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/book-ride" className="inline-block bg-white text-[#c1272d] px-10 py-4 rounded-full font-bold text-xl hover:scale-105 transition">
              Book a Ride
            </a>
            <a href="tel:7025551234" className="inline-block bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-white/10 transition">
              Call Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}