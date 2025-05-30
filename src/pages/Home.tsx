import FooterSection from "@/sections/footer";
import HeroSection from "@/sections/hero";
import ProjectsSection from "@/sections/project";

const HomePage = () => {
  return (
    <main className="my-container">
      {/* Hero Section */}
      <HeroSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Footer Section */}
      <FooterSection />
    </main>
  );
};

export default HomePage;
