"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { easeOut } from "@/lib/utils";
import type { Certificate } from "@/data/certificates";

type CertificateModalProps = {
  certificate: Certificate | null;
  onClose: () => void;
};

export function CertificateModal({
  certificate,
  onClose,
}: CertificateModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!certificate) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [certificate, onClose]);

  return (
    <AnimatePresence>
      {certificate && (
        <motion.div
          className="fixed inset-0 z-[10001] flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: easeOut }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
        >
          <button
            type="button"
            className="absolute inset-0 cursor-hover bg-ink/40 backdrop-blur-sm"
            aria-label="Close certificate preview"
            onClick={onClose}
          />

          <motion.div
            ref={dialogRef}
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.4, ease: easeOut }}
            className="relative z-10 w-full max-w-3xl overflow-hidden rounded-sm border border-border bg-canvas shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <div>
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-accent">
                  {certificate.issuer}
                </p>
                <h3
                  id="cert-modal-title"
                  className="mt-1 font-display text-xl font-semibold text-ink"
                >
                  {certificate.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="cursor-hover font-mono text-xs uppercase tracking-wider text-muted transition-colors duration-300 hover:text-accent"
              >
                Close
              </button>
            </div>

            <div className="relative aspect-[4/3] w-full bg-surface md:aspect-[16/10]">
              <CertificateImage certificate={certificate} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CertificateImage({ certificate }: { certificate: Certificate }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 p-8 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border bg-canvas font-display text-2xl text-accent">
          ✓
        </div>
        <p className="font-display text-lg text-ink">{certificate.title}</p>
        <p className="font-mono text-xs uppercase tracking-wider text-muted">
          Certificate image coming soon
        </p>
      </div>
    );
  }

  return (
    <Image
      src={certificate.image}
      alt={`${certificate.title} certificate from ${certificate.issuer}`}
      fill
      className="object-contain p-4"
      sizes="(max-width: 768px) 100vw, 768px"
      onError={() => setFailed(true)}
    />
  );
}
