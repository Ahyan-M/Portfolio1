import { aboutBio, stats } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CountUp } from "@/components/ui/CountUp";

export function About() {
  return (
    <section
      id="about"
      className="bg-surface section-padding"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-content gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-24">
        <div>
          <SectionHeading
            eyebrow="01 — About"
            title="Developer with a builder&apos;s mindset"
            id="about-heading"
          />
          <Reveal delay={0.1}>
            <p className="mt-8 text-lg leading-relaxed text-muted">{aboutBio}</p>
          </Reveal>
        </div>

        <div className="flex flex-col justify-center gap-10 border-t border-border pt-10 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={0.08 * i}>
              <div className="group transition-transform duration-300 ease-out hover:translate-x-1">
                <p className="font-display text-5xl font-semibold text-accent md:text-6xl">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-muted">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
