"use client";
import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const EXAMPLES = [
  "Dashboard financeiro com login e gráficos",
  "App de tarefas com Postgres e autenticação",
  "API REST com JWT e documentação automática",
  "Sistema de CRM com relatórios em PDF",
];

export default function Hero() {
  const [prompt, setPrompt] = useState("");

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Glow blobs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium px-4 py-2 rounded-full mb-8">
          <Sparkles size={12} />
          AI App Builder — Powered by Claude
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-6">
          Crie apps completos
          <br />
          <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
            com AI. Agora.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Descreva o que você quer construir. O Turion planeja, gera o código,
          sobe o banco e faz o deploy — tudo em uma workspace.
        </p>

        {/* Prompt input */}
        <div className="w-full max-w-2xl mx-auto mb-6">
          <div className="relative flex items-center bg-white/5 border border-white/10 rounded-2xl p-2 shadow-2xl shadow-black/40 hover:border-violet-500/40 transition-colors focus-within:border-violet-500/60">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Descreva o app que você quer criar..."
              className="flex-1 bg-transparent text-white placeholder:text-zinc-500 px-4 py-3 text-base outline-none"
              onKeyDown={(e) => e.key === "Enter" && prompt && window.location.assign("/register")}
            />
            <Link
              href={prompt ? `/register?prompt=${encodeURIComponent(prompt)}` : "/register"}
              className="flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-5 py-3 rounded-xl font-medium transition-all text-sm shrink-0 shadow-lg shadow-violet-500/30"
            >
              Criar com AI
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Example chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {EXAMPLES.map((ex) => (
            <button
              key={ex}
              onClick={() => setPrompt(ex)}
              className="text-xs text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 px-3 py-1.5 rounded-full transition-all cursor-pointer"
            >
              {ex}
            </button>
          ))}
        </div>

        {/* Social proof */}
        <p className="text-xs text-zinc-600">
          Sem cartão de crédito &nbsp;·&nbsp; 500 créditos grátis &nbsp;·&nbsp; Cancele quando quiser
        </p>
      </div>

      {/* Demo preview mockup */}
      <div className="relative z-10 w-full max-w-5xl mx-auto mt-20">
        <div className="rounded-2xl border border-white/10 bg-[#0f0f17] shadow-2xl shadow-black/60 overflow-hidden">
          {/* Window chrome */}
          <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="ml-4 text-xs text-zinc-500">turion.network — workspace</span>
          </div>
          {/* Mock workspace */}
          <div className="flex h-64">
            {/* Sidebar */}
            <div className="w-48 border-r border-white/5 p-3 space-y-1">
              <p className="text-[10px] text-zinc-600 uppercase font-semibold mb-2">Arquivos</p>
              {["app/page.tsx", "app/layout.tsx", "api/auth.ts", "prisma/schema.prisma", "Dockerfile"].map((f) => (
                <div key={f} className="text-[11px] text-zinc-500 hover:text-zinc-300 px-2 py-1 rounded cursor-pointer transition-colors">
                  {f}
                </div>
              ))}
            </div>
            {/* Editor */}
            <div className="flex-1 p-4 font-mono text-[11px] leading-relaxed">
              <div className="text-zinc-600">{"// app/page.tsx — gerado pelo Turion AI"}</div>
              <div className="mt-2">
                <span className="text-violet-400">export default</span>
                <span className="text-white"> </span>
                <span className="text-yellow-300">function</span>
                <span className="text-green-300"> Home</span>
                <span className="text-white">() {"{"}</span>
              </div>
              <div className="ml-4 text-zinc-400">{"return ("}</div>
              <div className="ml-8 text-sky-300">{"<Dashboard"}</div>
              <div className="ml-10 text-zinc-500">{"title=\"Despesas\""}</div>
              <div className="ml-10 text-zinc-500">{"userId={session.user.id}"}</div>
              <div className="ml-8 text-sky-300">{"/>"}</div>
              <div className="ml-4 text-zinc-400">{")"}</div>
              <div className="text-white">{"}"}</div>
            </div>
            {/* Chat */}
            <div className="w-56 border-l border-white/5 p-3 flex flex-col gap-2">
              <p className="text-[10px] text-zinc-600 uppercase font-semibold">Turion Agent</p>
              <div className="bg-violet-500/10 border border-violet-500/20 rounded-lg p-2">
                <p className="text-[11px] text-zinc-300">Criei o dashboard com autenticação e gráficos mensais.</p>
              </div>
              <div className="bg-white/5 rounded-lg p-2">
                <p className="text-[11px] text-zinc-500">Adicionar exportação CSV</p>
              </div>
              <div className="mt-auto bg-white/5 border border-white/10 rounded-lg px-2 py-1.5">
                <p className="text-[11px] text-zinc-600">Peça uma mudança...</p>
              </div>
            </div>
          </div>
        </div>
        {/* Glow under mockup */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-2/3 h-20 bg-violet-600/20 blur-3xl rounded-full pointer-events-none" />
      </div>
    </section>
  );
}
