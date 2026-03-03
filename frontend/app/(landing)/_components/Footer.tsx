import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-6 border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <Image src="/pcmt.png" alt="PCMT" width={120} height={40} className="mb-4 mx-auto md:mx-0" />
          <p className="text-slate-500 text-sm">Serving the Las Vegas community with quality non-emergency medical transportation!</p>
        </div>
        <div className="flex gap-6 text-[#c1272d] font-bold">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
        </div>
      </div>
      <div className="text-center mt-12 pt-8 border-t border-slate-50">
        <p className="text-slate-400 text-xs italic">© {currentYear} Prime Care Medical Transportation LLC.</p>
      </div>
    </footer>
  );
}