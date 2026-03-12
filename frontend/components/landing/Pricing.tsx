"use client";
import { useState } from "react";
import { Check } from "lucide-react";
import Link from "next/link";

const PLANS = [
  {
    name: "Free",
    price: { monthly: 0, annual: 0 },
    credits: "500 créditos/mês",
    highlight: false,
    badge: null,
    features: [
      "2 projetos ativos",
      "Preview por 24h",
      "Agente AI limitado",
      "PostgreSQL incluso",
      "Suporte da comunidade",
    ],
    cta: "Começar grátis",
    href: "/register",
  },
  {
    name: "Builder",
    price: { monthly: 25, annual: 20 },
    credits: "5.000 créditos/mês",
    highlight: true,
    badge: "Mais popular",
    features: [
      "Projetos ilimitados",
      "Preview sempre ativo",
      "Agente AI completo",
      "PostgreSQL incluso",
      "Deploy com domínio próprio",
      "Suporte via email",
    ],
    cta: "Assinar Builder",
    href: "/register?plan=builder",
  },
  {
    name: "Pro",
    price: { monthly: 79, annual: 63 },
    credits: "25.000 créditos/mês",
    highlight: false,
    badge: null,
    features: [
      "Projetos ilimitados",
      "Preview sempre ativo",
      "Agente AI prioritário",
      "PostgreSQL incluso",
      "Deploy com domínio próprio",
      "Multi-stack avançado",
      "Suporte prioritário",
    ],
    cta: "Assinar Pro",
    href: "/register?plan=pro",
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs text-violet-400 font-semibold uppercase tracking-widest mb-3">Preços</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simples e{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              transparente
            </span>
          </h2>

          {/* Annual/Monthly toggle */}
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                !annual ? "bg-violet-600 text-white" : "text-zinc-400 hover:text-white"
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                annual ? "bg-violet-600 text-white" : "text-zinc-400 hover:text-white"
              }`}
            >
              Anual
              <span className="text-xs bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded-full">-20%</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col p-8 rounded-2xl border transition-all ${
                plan.highlight
                  ? "bg-violet-600/10 border-violet-500/50 shadow-2xl shadow-violet-500/10"
                  : "bg-white/[0.03] border-white/10 hover:border-white/20"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-violet-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-1">{plan.name}</h3>
                <p className="text-xs text-zinc-500">{plan.credits}</p>
              </div>

              <div className="mb-8">
                <span className="text-5xl font-bold text-white">
                  ${annual ? plan.price.annual : plan.price.monthly}
                </span>
                <span className="text-zinc-500 text-sm ml-1">/mês</span>
                {annual && plan.price.monthly > 0 && (
                  <p className="text-xs text-emerald-400 mt-1">
                    Cobrado anualmente (${plan.price.annual * 12}/ano)
                  </p>
                )}
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-zinc-400">
                    <Check size={14} className="text-violet-400 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={`w-full text-center py-3 rounded-xl font-medium text-sm transition-all ${
                  plan.highlight
                    ? "bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-500/30"
                    : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-zinc-600 text-sm mt-10">
          Todos os planos incluem PostgreSQL, HTTPS e suporte a domínio personalizado (Builder e Pro).
        </p>
      </div>
    </section>
  );
}
