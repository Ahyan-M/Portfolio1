"use client";

import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { AmbientBackground } from "@/components/layout/AmbientBackground";
import { Navbar } from "@/components/layout/Navbar";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <SmoothScroll>
        <AmbientBackground />
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        <div className="relative z-[1]">{children}</div>
      </SmoothScroll>
    </ThemeProvider>
  );
}
