import ProjectCard from "@/components/card";
import { DynamicSquigglyHeading } from "@/utils/squiggly_heading";

const ProjectsSection = () => {
  return (
    <section className="mt-12 md:mt-20">
      <div className="flex justify-between items-center">
        <div className="flex flex-col sm:flex-row gap-x-2 ">
          <img
            src="/images/this_is_fine.gif"
            alt="cool projects section"
            className="w-[40px] h-[40px] saturate-0"
          />
          <h2 className="mb-8 scroll-m-20  text-3xl font-semibold tracking-tight transition-colors">
            <DynamicSquigglyHeading
              strokeColor="#3B82F6"
              text="Featured Projects"
            />
          </h2>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 sm:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 ">
        <ProjectCard
          projectName="Expense Tracker"
          description="A smart expense tracker app to manage your income, track spending, and stay on budget."
          backgroundImage="/images/projects/expensetracker.jpg"
          url="https://github.com/itsdivyansh1/Expense-Tracker"
          technologies={["python", "sql", "tkinter", "customtkinter", "xampp"]}
          color="bg-amber-800"
          className="sm:col-span-1 sm:row-span-1 lg:col-span-1 lg:row-span-1 h-70"
        />

        <ProjectCard
          projectName="Note app"
          description="A simple and intuitive note-taking app for creating, editing, and organizing your notes efficiently."
          backgroundImage="/images/projects/noteapp.avif"
          url="https://github.com/itsdivyansh1/php-note-app-learning"
          technologies={["php", "sql", "xampp", "tailwindcss"]}
          color="bg-orange-800"
          className="sm:col-span-1 sm:row-span-1 lg:col-span-1 lg:row-span-1 h-70"
        />

        <ProjectCard
          projectName="AscoIndia Website"
          description="A professional website for AscoIndia showcasing a wide range of scientific products including glassware, metalware, rubberware, and more."
          backgroundImage="/images/projects/ascoindia.avif"
          technologies={["wordpress", "php", "sql", "scss", "xampp"]}
          color="bg-gray-800"
          className="sm:col-span-2 sm:row-span-1 lg:col-span-1 lg:row-span-2 md:h-auto h-70"
        />

        <ProjectCard
          projectName="Proptech"
          description="A full-stack AI-powered real estate web application built with React, Node.js, MongoDB, and Python for intelligent property recommendations and services."
          backgroundImage="/images/projects/proptech.webp"
          color="bg-indigo-800"
          url="https://github.com/itsdivyansh1/proptech-v2-ai"
          technologies={[
            "reactjs",
            "nodejs",
            "expressjs",
            "mongodb",
            "tailwindcss",
            "python",
            "flask",
            "scikit-learn",
          ]}
          className="sm:col-span-2 sm:row-span-1 lg:col-span-2 lg:row-span-1 md:h-auto h-70"
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
