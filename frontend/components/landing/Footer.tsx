import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
            <span className="text-white font-bold text-xs">T</span>
          </div>
          <span className="text-zinc-400 text-sm font-medium">
            Turion<span className="text-violet-400">.network</span>
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm text-zinc-600">
          <Link href="/terms" className="hover:text-zinc-400 transition-colors">Termos</Link>
          <Link href="/privacy" className="hover:text-zinc-400 transition-colors">Privacidade</Link>
          <a href="https://status.turion.network" className="hover:text-zinc-400 transition-colors">Status</a>
          <a href="https://github.com/LucasBolla94/TurionBuilderAI" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors">GitHub</a>
        </div>

        <p className="text-zinc-700 text-xs">
          © 2026 Turion.Network. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
