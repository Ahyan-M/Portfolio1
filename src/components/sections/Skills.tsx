import { skillCategories } from "@/data/skills";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/Reveal";

export function Skills() {
  return (
    <section
      id="skills"
      className="section-padding"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="03 — Tools"
          title="Tools I use"
          id="skills-heading"
        />

        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {skillCategories.map((category, ci) => (
            <Reveal key={category.title} delay={ci * 0.08}>
              <div>
                <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  {category.title}
                </h3>
                <StaggerContainer className="space-y-1">
                  {category.items.map((item) => (
                    <StaggerItem key={item}>
                      <div className="cursor-hover group relative overflow-hidden border-b border-border py-3 transition-colors duration-300 ease-out hover:border-accent/40 hover:bg-surface/60">
                        <span
                          className="absolute inset-y-0 left-0 w-0 bg-accent/5 transition-all duration-300 ease-out group-hover:w-full"
                          aria-hidden
                        />
                        <span className="relative inline-block font-sans text-lg text-ink transition-all duration-300 ease-out group-hover:translate-x-2 group-hover:text-accent">
                          {item}
                        </span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
