import { MessageSquare, Cpu, Rocket } from "lucide-react";

const STEPS = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Descreva",
    desc: "Digite o que você quer criar em linguagem natural. Sem formulários, sem burocracia.",
    color: "from-violet-500 to-violet-700",
    glow: "shadow-violet-500/20",
  },
  {
    icon: Cpu,
    step: "02",
    title: "O Turion constrói",
    desc: "A AI planeja a arquitetura, gera código, sobe o banco de dados e prepara o deploy automaticamente.",
    color: "from-indigo-500 to-indigo-700",
    glow: "shadow-indigo-500/20",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Edite e publique",
    desc: "Ajuste pelo chat do agente, visualize ao vivo e publique com um clique.",
    color: "from-sky-500 to-sky-700",
    glow: "shadow-sky-500/20",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs text-violet-400 font-semibold uppercase tracking-widest mb-3">Como funciona</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            De ideia a app em{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              3 passos
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-px bg-gradient-to-r from-violet-500/30 via-indigo-500/30 to-sky-500/30" />

          {STEPS.map(({ icon: Icon, step, title, desc, color, glow }) => (
            <div
              key={step}
              className="relative flex flex-col items-center text-center p-8 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-white/15 transition-all group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-6 shadow-xl ${glow} group-hover:scale-105 transition-transform`}>
                <Icon size={28} className="text-white" />
              </div>
              <span className="text-xs text-zinc-600 font-mono mb-2">{step}</span>
              <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
              <p className="text-zinc-500 leading-relaxed text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
