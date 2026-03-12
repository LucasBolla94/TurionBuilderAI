import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Não autenticado." }, { status: 401 });
  }

  const { profile, firstStack } = await req.json();

  await prisma.user.update({
    where: { id: session.user.id },
    data: {
      profile,
      firstStack,
      onboardingDone: true,
    },
  });

  return NextResponse.json({ success: true });
}
