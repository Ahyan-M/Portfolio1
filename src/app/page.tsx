import { Hero } from "@/components/sections/Hero";
import { MarqueeDivider } from "@/components/sections/MarqueeDivider";
import { About } from "@/components/sections/About";
import { ExperienceSection } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Certificates } from "@/components/sections/Certificates";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeDivider />
      <About />
      <ExperienceSection />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
    </>
  );
}
