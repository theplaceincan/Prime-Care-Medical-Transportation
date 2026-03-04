"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SignInPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">

        <div className="text-center mb-8">
          <Link href="/">
            <Image src="/pcmt.png" alt="Prime Care" width={120} height={48} className="mx-auto mb-4" />
          </Link>
          <h1 className="text-3xl font-extrabold text-slate-800">Welcome back</h1>
          <p className="text-slate-500 mt-2">Sign in to manage your rides</p>
        </div>

        <div className="bg-white rounded-super soft-shadow border-2 border-slate-100 p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="w-full border-2 border-slate-100 rounded-2xl px-4 py-3 font-medium focus:outline-none focus:border-[#c1272d] transition text-slate-800"
                placeholder="you@email.com"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-bold text-slate-700">Password</label>
                <Link href="/forgot-password" className="text-xs text-[#c1272d] font-bold hover:underline">
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                required
                value={form.password}
                onChange={e => setForm({ ...form, password: e.target.value })}
                className="w-full border-2 border-slate-100 rounded-2xl px-4 py-3 font-medium focus:outline-none focus:border-[#c1272d] transition text-slate-800"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#c1272d] text-white py-4 rounded-full font-bold text-lg hover:scale-[1.02] transition shadow-lg shadow-red-500/20 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-slate-100" />
            <span className="text-xs text-slate-400 font-bold">OR</span>
            <div className="flex-1 h-px bg-slate-100" />
          </div>

          <button className="w-full border-2 border-slate-100 rounded-full py-3 font-bold text-slate-600 hover:bg-slate-50 transition flex items-center justify-center gap-3">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>
        </div>

        <p className="text-center mt-6 text-slate-500 font-medium">
          Don't have an account?{" "}
          <Link href="/register" className="text-[#c1272d] font-bold hover:underline">
            Create one here
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