import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, Plus } from "lucide-react";

export default async function DashboardPage() {
  const session = await auth();
  if (!session) redirect("/login");

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mx-auto mb-6">
          <LayoutDashboard size={28} className="text-violet-400" />
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">
          Olá, {session.user?.name?.split(" ")[0]} 👋
        </h1>
        <p className="text-zinc-500 mb-8">
          Seu dashboard está chegando na Fase 3. Por enquanto, você está autenticado e pronto para construir.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-6 py-3 rounded-xl font-medium transition-all"
        >
          <Plus size={16} />
          Ver Landing Page
        </Link>
      </div>
    </div>
  );
}
