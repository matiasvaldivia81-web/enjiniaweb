import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Grupo Enjinia",
  description:
    "Construcción, importación y tecnología para proyectos reales.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
