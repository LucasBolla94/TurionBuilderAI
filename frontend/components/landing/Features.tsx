import { Code2, MessageCircle, Database, Globe, Coins, Layers } from "lucide-react";

const FEATURES = [
  {
    icon: Code2,
    title: "Workspace completa",
    desc: "Editor Monaco (estilo VSCode), preview ao vivo e logs — na mesma tela.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    icon: MessageCircle,
    title: "Agente de código AI",
    desc: "Chat acoplado que entende seu projeto e aplica mudanças diretamente nos arquivos.",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
  {
    icon: Database,
    title: "Banco de dados incluso",
    desc: "PostgreSQL provisionado automaticamente com schema, migrations e ORM configurados.",
    color: "text-sky-400",
    bg: "bg-sky-500/10",
  },
  {
    icon: Globe,
    title: "Deploy instantâneo",
    desc: "URL pública em segundos. Domínio próprio disponível nos planos pagos.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Coins,
    title: "Créditos unificados",
    desc: "Uma moeda para tudo: tokens de AI, deploy, banco de dados e storage. Consumo visível em tempo real.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    icon: Layers,
    title: "Multi-stack",
    desc: "Next.js, FastAPI, Node.js e mais. A AI escolhe a melhor stack para seu caso de uso.",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs text-violet-400 font-semibold uppercase tracking-widest mb-3">Recursos</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Tudo que você precisa,{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              num só lugar
            </span>
          </h2>
          <p className="text-zinc-500 mt-4 max-w-xl mx-auto">
            Sem configurar servidores, sem gerenciar infraestrutura. Foque no produto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map(({ icon: Icon, title, desc, color, bg }) => (
            <div
              key={title}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-white/15 hover:bg-white/[0.05] transition-all group"
            >
              <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                <Icon size={20} className={color} />
              </div>
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
