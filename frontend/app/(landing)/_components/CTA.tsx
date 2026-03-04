export default function CTA() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto bg-[#c1272d] rounded-[3rem] p-12 text-center text-white shadow-2xl">
        <h2 className="text-4xl font-bold mb-6">Ready to schedule a ride?</h2>
        <p className="text-red-100 mb-10 text-lg">Our friendly team is standing by to help you or your loved ones get where they need to go.</p>
        <a href="/sign-in" className="inline-block bg-white text-[#c1272d] px-12 py-4 rounded-full font-bold text-xl hover:scale-105 transition">
          Get Started Today
        </a>
      </div>
    </section>
  );
}