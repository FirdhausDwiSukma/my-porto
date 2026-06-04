import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { About } from "@/components/About";
import { Certifications } from "@/components/Certifications";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
