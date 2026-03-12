import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SessionProvider from "@/components/providers/SessionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Turion.Network — AI App Builder",
  description: "Crie apps completos com AI. Descreva o que você quer construir e o Turion planeja, gera o código, sobe o banco e faz o deploy.",
  metadataBase: new URL("https://turion.network"),
  openGraph: {
    title: "Turion.Network — AI App Builder",
    description: "Crie apps completos com AI em minutos.",
    url: "https://turion.network",
    siteName: "Turion.Network",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
