import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { Providers } from "@/components/layout/Providers";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ahyan Mehta — Full Stack Developer",
  description:
    "Portfolio of Ahyan Mehta, a Computer Science student and full stack developer building innovative web solutions.",
  openGraph: {
    title: "Ahyan Mehta — Full Stack Developer",
    description:
      "Building innovative web solutions with modern technologies and creative problem-solving.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${fraunces.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <div className="grain" aria-hidden />
        <Providers>
          <>
            <main className="relative">{children}</main>
            <Footer />
          </>
        </Providers>
      </body>
    </html>
  );
}
