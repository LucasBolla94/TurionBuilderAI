"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Sparkles } from "lucide-react";

const PROFILES = [
  { value: "developer", emoji: "💻", label: "Desenvolvedor solo" },
  { value: "startup", emoji: "🚀", label: "Startup / Time" },
  { value: "student", emoji: "🎓", label: "Estudante" },
  { value: "company", emoji: "🏢", label: "Empresa" },
];

const GOALS = [
  { value: "web_app", emoji: "🌐", label: "App Web com banco" },
  { value: "api", emoji: "⚡", label: "API / Backend" },
  { value: "dashboard", emoji: "📊", label: "Dashboard" },
  { value: "unsure", emoji: "🤔", label: "Ainda não sei" },
];

const STACKS = [
  { value: "nextjs", emoji: "▲", label: "Next.js + PostgreSQL" },
  { value: "fastapi", emoji: "🐍", label: "FastAPI + PostgreSQL" },
  { value: "node", emoji: "🟩", label: "Node.js + PostgreSQL" },
  { value: "auto", emoji: "✨", label: "Deixar o Turion decidir" },
];

const STEPS = [
  { title: "Qual é o seu perfil?", options: PROFILES, key: "profile" as const },
  { title: "O que você quer construir?", options: GOALS, key: "goal" as const },
  { title: "Qual stack prefere?", options: STACKS, key: "firstStack" as const },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const current = STEPS[step];

  async function select(value: string) {
    const newAnswers = { ...answers, [current.key]: value };
    setAnswers(newAnswers);

    if (step < STEPS.length - 1) {
      setStep(step + 1);
      return;
    }

    // Último passo — salva e redireciona
    setLoading(true);
    await fetch("/api/onboarding", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        profile: newAnswers.profile,
        firstStack: newAnswers.firstStack,
      }),
    });
    router.push("/dashboard");
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex flex-col items-center justify-center px-4">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative w-full max-w-lg">
        {/* Logo + badge */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium px-4 py-2 rounded-full mb-6">
            <Sparkles size={12} />
            Configuração inicial
          </div>
          <h1 className="text-3xl font-bold text-white">{current.title}</h1>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mb-10">
          {STEPS.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i <= step ? "bg-violet-500 w-8" : "bg-white/10 w-4"
              }`}
            />
          ))}
        </div>

        {/* Options */}
        {loading ? (
          <div className="flex flex-col items-center gap-4 py-12">
            <Loader2 size={32} className="animate-spin text-violet-400" />
            <p className="text-zinc-400">Preparando sua workspace...</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {current.options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => select(opt.value)}
                className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-violet-500/50 hover:bg-violet-500/5 transition-all cursor-pointer"
              >
                <span className="text-3xl group-hover:scale-110 transition-transform">
                  {opt.emoji}
                </span>
                <span className="text-white text-sm font-medium text-center">
                  {opt.label}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* Step counter */}
        {!loading && (
          <p className="text-center text-zinc-600 text-xs mt-8">
            Passo {step + 1} de {STEPS.length}
          </p>
        )}
      </div>
    </div>
  );
}
