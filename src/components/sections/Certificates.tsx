"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { certificates } from "@/data/certificates";
import type { Certificate } from "@/data/certificates";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { CertificateModal } from "@/components/ui/CertificateModal";
import { easeOut } from "@/lib/utils";

export function Certificates() {
  const [active, setActive] = useState<Certificate | null>(null);

  return (
    <section
      id="certificates"
      className="bg-surface section-padding"
      aria-labelledby="certificates-heading"
    >
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="05 — Certificates"
          title="Learning & credentials"
          description="Click any credential to view the certificate image."
          id="certificates-heading"
        />

        <StaggerContainer className="mt-12 divide-y divide-border border-y border-border">
          {certificates.map((cert) => (
            <StaggerItem key={cert.id}>
              <motion.button
                type="button"
                onClick={() => setActive(cert)}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3, ease: easeOut }}
                className="cursor-hover group flex w-full flex-col gap-2 py-5 text-left transition-colors duration-300 ease-out hover:bg-canvas/50 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-4">
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border font-mono text-[0.6rem] text-muted transition-all duration-300 ease-out group-hover:border-accent group-hover:bg-accent/10 group-hover:text-accent"
                    aria-hidden
                  >
                    ↗
                  </span>
                  <p className="font-sans text-base text-ink transition-colors duration-300 group-hover:text-accent">
                    {cert.title}
                  </p>
                </div>
                <p className="pl-12 font-mono text-xs uppercase tracking-wider text-muted sm:pl-0">
                  {cert.issuer}
                </p>
              </motion.button>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <CertificateModal certificate={active} onClose={() => setActive(null)} />
    </section>
  );
}
