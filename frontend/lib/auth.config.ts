import type { NextAuthConfig } from "next-auth";

// Configuração edge-safe (sem Node.js modules, sem Prisma)
// Usada pelo middleware
export const authConfig: NextAuthConfig = {
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  providers: [], // providers ficam em auth.ts (Node.js apenas)
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const pathname = nextUrl.pathname;

      const publicRoutes = ["/", "/login", "/register", "/pricing"];
      const authRoutes = ["/login", "/register"];

      if (publicRoutes.includes(pathname)) {
        if (isLoggedIn && authRoutes.includes(pathname)) {
          return Response.redirect(new URL("/dashboard", nextUrl));
        }
        return true;
      }

      if (!isLoggedIn) {
        const loginUrl = new URL("/login", nextUrl);
        loginUrl.searchParams.set("callbackUrl", pathname);
        return Response.redirect(loginUrl);
      }

      const onboardingDone = (auth.user as { onboardingDone?: boolean })?.onboardingDone;
      if (!onboardingDone && pathname !== "/onboarding") {
        return Response.redirect(new URL("/onboarding", nextUrl));
      }

      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.onboardingDone = (user as { onboardingDone?: boolean }).onboardingDone;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        (session.user as { onboardingDone?: boolean }).onboardingDone =
          token.onboardingDone as boolean;
      }
      return session;
    },
  },
};
