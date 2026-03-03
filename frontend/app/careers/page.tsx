"use client";
import { useState } from "react";
import Navbar from "../(landing)/_components/Navbar";
import Footer from "../(landing)/_components/Footer";

const perks = [
  { emoji: "💰", title: "Competitive Pay", description: "We offer above-average pay rates with weekly direct deposit." },
  { emoji: "📅", title: "Flexible Schedules", description: "Full-time and part-time shifts available. You choose what works." },
  { emoji: "❤️", title: "Meaningful Work", description: "Make a real difference in people's lives every single day." },
  { emoji: "👥", title: "Supportive Team", description: "Join a friendly, professional team that has your back." },
];

const requirements = [
  "Valid Nevada driver's license (minimum 3 years driving experience)",
  "Clean driving record — no major violations in the past 3 years",
  "Pass a background check and drug screening",
  "CPR and First Aid certification (or willingness to obtain)",
  "Ability to assist passengers in and out of vehicles",
  "Reliable, punctual, and professional attitude",
  "Wheelchair van experience is a plus but not required",
];

export default function CareersPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", experience: "", message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Will wire to api
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />

      <section className="pt-36 pb-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-red-50 text-prime-red text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            Careers
          </span>
          <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Drive With<br />
            <span className="text-prime-red">Prime Care</span>
          </h1>
          <p className="text-slate-500 text-xl leading-relaxed max-w-2xl mx-auto">
            Join a team dedicated to providing safe and compassionate medical transportation
            to the Las Vegas community.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Why Drive With Us?</h2>
            <div className="w-20 h-1.5 bg-prime-red mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((p) => (
              <div
                key={p.title}
                className="bg-white border-2 border-slate-100 rounded-super p-7 text-center soft-shadow hover-lift"
              >
                <div className="text-4xl mb-4">{p.emoji}</div>
                <h3 className="text-lg font-extrabold mb-2">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Current Opening</h2>
            <div className="w-20 h-1.5 bg-prime-red mx-auto rounded-full"></div>
          </div>

          <div className="bg-white rounded-super soft-shadow border-2 border-slate-100 overflow-hidden">
            <div className="bg-prime-red p-8 text-white">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-extrabold mb-1">Medical Transport Driver</h3>
                  <div className="flex flex-wrap gap-3 mt-3">
                    <span className="bg-white/20 px-4 py-1.5 rounded-full text-sm font-bold">📍 Las Vegas, NV</span>
                    <span className="bg-white/20 px-4 py-1.5 rounded-full text-sm font-bold">⏱ Full-time / Part-time</span>
                    <span className="bg-white/20 px-4 py-1.5 rounded-full text-sm font-bold">💰 Competitive Pay</span>
                  </div>
                </div>
                <a
                  href="#apply"
                  onClick={(e) => { e.preventDefault(); document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="inline-block bg-white text-prime-red px-8 py-3 rounded-full font-bold hover:scale-105 transition whitespace-nowrap"
                >
                  Apply Now ↓
                </a>
              </div>
            </div>

            <div className="p-8">
              <h4 className="text-xl font-extrabold mb-6">Requirements</h4>
              <ul className="space-y-3">
                {requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-prime-red text-xs font-bold">✓</span>
                    </div>
                    <span className="text-slate-600">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="apply" className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-4">Apply Now</h2>
            <div className="w-20 h-1.5 bg-prime-red mx-auto rounded-full"></div>
            <p className="text-slate-500 mt-4">Fill out the form below and we'll be in touch within 2 business days.</p>
          </div>

          {submitted ? (
            <div className="bg-green-50 border-2 border-green-200 rounded-super p-12 text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-2xl font-extrabold text-green-800 mb-2">Application Received!</h3>
              <p className="text-green-700">Thank you for applying. We'll review your application and reach out within 2 business days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-super soft-shadow border-2 border-slate-100 p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full border-2 border-slate-100 rounded-2xl px-4 py-3 font-medium focus:outline-none focus:border-prime-red transition"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    className="w-full border-2 border-slate-100 rounded-2xl px-4 py-3 font-medium focus:outline-none focus:border-prime-red transition"
                    placeholder="(702) 555-1234"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full border-2 border-slate-100 rounded-2xl px-4 py-3 font-medium focus:outline-none focus:border-prime-red transition"
                  placeholder="you@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Years of Driving Experience *</label>
                <select
                  required
                  value={form.experience}
                  onChange={e => setForm({ ...form, experience: e.target.value })}
                  className="w-full border-2 border-slate-100 rounded-2xl px-4 py-3 font-medium focus:outline-none focus:border-prime-red transition bg-white"
                >
                  <option value="">Select experience</option>
                  <option value="3-5">3–5 years</option>
                  <option value="5-10">5–10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Tell us about yourself</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full border-2 border-slate-100 rounded-2xl px-4 py-3 font-medium focus:outline-none focus:border-prime-red transition resize-none"
                  placeholder="Any relevant experience, certifications, or why you'd like to join Prime Care..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-prime-red text-white py-4 rounded-full font-bold text-lg hover:scale-[1.02] transition shadow-lg shadow-red-500/20"
              >
                Submit Application
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}