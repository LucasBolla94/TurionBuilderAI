"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0f]/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/30">
            <span className="text-white font-bold text-sm">T</span>
          </div>
          <span className="text-white font-semibold text-lg tracking-tight">
            Turion<span className="text-violet-400">.network</span>
          </span>
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Recursos
          </a>
          <a href="#how-it-works" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Como funciona
          </a>
          <a href="#pricing" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Preços
          </a>
        </nav>

        {/* CTAs */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm text-zinc-400 hover:text-white transition-colors px-4 py-2"
          >
            Entrar
          </Link>
          <Link
            href="/register"
            className="text-sm bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 rounded-lg font-medium transition-all shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40"
          >
            Começar grátis
          </Link>
        </div>
      </div>
    </header>
  );
}
