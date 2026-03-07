"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SubmitEventHandler } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = async (e) => {
    setLoading(true);
    e.preventDefault();

    setError("");
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const res = await fetch("http://127.0.0.1:8000/auth/register", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          email: form.email, 
          password: form.password, 
          first_name: form.firstName, 
          last_name: form.lastName, 
          phone: form.phone
        })
      })

      const data = await res.json()

      if (!res.ok) {
        setError("Invalid input.")
        setLoading(false)
        return;
      }

      // Redirect to sign in
      window.location.href = "/sign-in"

    } catch(error) {
      setError("Something went wrong with registration. Try again.")
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">

        <div className="text-center mb-8">
          <Link href="/">
            <Image src="/pcmt.png" alt="Prime Care" width={120} height={48} className="mx-auto mb-4" />
          </Link>
          <h1 className="text-3xl font-extrabold text-slate-800">Create your account</h1>
          <p className="text-slate-500 mt-2">Book and manage your rides with ease</p>
        </div>

        <div className="bg-white rounded-super soft-shadow border-2 border-slate-100 p-8">
          <form onSubmit={handleSubmit} className="space-y-5">

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                <input
                  type="text"
                  required
                  value={form.firstName}
                  onChange={e => setForm({ ...form, firstName: e.target.value })}
                  className="w-full border-2 border-slate-100 rounded-2xl px-4 py-3 font-medium focus:outline-none focus:border-[#c1272d] transition"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                <input
                  type="text"
                  required
                  value={form.lastName}
                  onChange={e => setForm({ ...form, lastName: e.target.value })}
                  className="w-full border-2 border-slate-100 rounded-2xl px-4 py-3 font-medium focus:outline-none focus:border-[#c1272d] transition"
                  placeholder="Smith"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="w-full border-2 border-slate-100 rounded-2xl px-4 py-3 font-medium focus:outline-none focus:border-[#c1272d] transition"
                placeholder="you@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
                className="w-full border-2 border-slate-100 rounded-2xl px-4 py-3 font-medium focus:outline-none focus:border-[#c1272d] transition"
                placeholder="(702) 555-1234"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Password</label>
              <input
                type="password"
                required
                minLength={8}
                value={form.password}
                onChange={e => setForm({ ...form, password: e.target.value })}
                className="w-full border-2 border-slate-100 rounded-2xl px-4 py-3 font-medium focus:outline-none focus:border-[#c1272d] transition"
                placeholder="Min. 8 characters"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Confirm Password</label>
              <input
                type="password"
                required
                value={form.confirmPassword}
                onChange={e => setForm({ ...form, confirmPassword: e.target.value })}
                className={`w-full border-2 rounded-2xl px-4 py-3 font-medium focus:outline-none transition ${
                  error ? "border-red-300 focus:border-red-400" : "border-slate-100 focus:border-[#c1272d]"
                }`}
                placeholder="••••••••"
              />
              {error && <p className="text-red-500 text-sm font-semibold mt-2">{error}</p>}
            </div>


            <p className="text-xs text-slate-400 leading-relaxed">
              By creating an account you agree to our{" "}
              <Link href="/terms" className="text-[#c1272d] font-bold hover:underline">Terms of Service</Link>
              {" "}and{" "}
              <Link href="/privacy" className="text-[#c1272d] font-bold hover:underline">Privacy Policy</Link>.
            </p>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#c1272d] text-white py-4 rounded-full font-bold text-lg hover:scale-[1.02] transition shadow-lg shadow-red-500/20 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Creating account..." : "Create Account"}
            </button>
          </form>
        </div>

        <p className="text-center mt-6 text-slate-500 font-medium">
          Already have an account?{" "}
          <Link href="/sign-in" className="text-[#c1272d] font-bold hover:underline">
            Sign in here
          </Link>
        </p>

        <p className="text-center mt-4">
          <Link href="/" className="text-xs text-slate-400 hover:text-slate-600 transition">
            ← Back to home
          </Link>
        </p>
      </div>
    </div>
  );
}