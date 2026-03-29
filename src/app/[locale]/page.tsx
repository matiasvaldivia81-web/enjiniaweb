import Hero from "@/components/home/Hero";
import CapabilitiesSection from "@/components/home/CapabilitiesSection";
import UnitsSection from "@/components/home/UnitsSection";
import SolutionsSection from "@/components/home/SolutionsSection";
import ImportationsSection from "@/components/home/ImportationsSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import ResourcesSection from "@/components/home/ResourcesSection";
import ContactCTA from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CapabilitiesSection />
      <UnitsSection />
      <SolutionsSection />
      <ImportationsSection />
      <ProjectsSection />
      <IndustriesSection />
      <ResourcesSection />
      <ContactCTA />
    </>
  );
}
