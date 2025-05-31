import { DynamicSquigglyHeading } from "@/utils/squiggly_heading";
import GitHubCalendar from "react-github-calendar";

const GithubCalendarComponent = () => {
  const minimalTheme = {
    light: ["hsl(0, 0%, 92%)", "rebeccapurple"],
    dark: ["hsl(0, 0%, 22%)", "hsl(225,92%,77%)"],
  };

  return (
    <div className="w-full mt-12 md:mt-20">
      <div className="flex justify-between items-center">
        <div className="flex flex-col sm:flex-row gap-x-2 ">
          <img
            src="/images/nerdcheckq.gif"
            alt="cool projects section"
            className="w-[40px] h-[40px] saturate-0"
          />
          <h2 className="mb-8 scroll-m-20  text-3xl font-semibold tracking-tight transition-colors">
            <DynamicSquigglyHeading strokeColor="#3B82F6" text="Github Stats" />
          </h2>
        </div>
      </div>
      <div className="flex items-center justify-center border p-4">
        <GitHubCalendar
          username="itsdivyansh1"
          theme={minimalTheme}
          blockRadius={0}
          blockSize={18}
        />
      </div>
    </div>
  );
};

export default GithubCalendarComponent;
