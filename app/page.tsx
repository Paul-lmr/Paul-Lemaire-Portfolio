import { Hero } from "@/components/home/hero";
import { ProjectIndex } from "@/components/home/project-index";
import { TechnicalIndexSection } from "@/components/home/technical-index-section";
import { AboutSection } from "@/components/home/about-section";
import { InternationalSection } from "@/components/home/international-section";
import { CurrentlyExploringSection } from "@/components/home/currently-exploring-section";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectIndex />
      <TechnicalIndexSection />
      <AboutSection />
      <InternationalSection />
      <CurrentlyExploringSection />
    </>
  );
}
