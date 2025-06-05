import GithubCalendarComponent from "@/components/githubcalendar";
import HeroSection from "@/sections/hero";
import ProjectsSection from "@/sections/project";

const HomePage = () => {
  return (
    <main className="my-container">
      {/* Hero Section */}
      <HeroSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Github Calendar */}
      <GithubCalendarComponent />
    </main>
  );
};

export default HomePage;
