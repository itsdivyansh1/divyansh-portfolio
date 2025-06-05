import HeroSection from "@/sections/hero";
import ProjectsSection from "@/sections/project";
import { lazy, Suspense } from "react";
const GithubCalendarComponent = lazy(
  () => import("@/components/githubcalendar")
);

const HomePage = () => {
  return (
    <main className="my-container">
      {/* Hero Section */}
      <HeroSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Github Calendar */}
      <Suspense fallback={<div>Loading github stats...</div>}>
        <GithubCalendarComponent />
      </Suspense>
    </main>
  );
};

export default HomePage;
