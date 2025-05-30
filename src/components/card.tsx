import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  projectName?: string;
  backgroundImage?: string;
  description?: string;
  technologies?: string[];
  color?: string;
  url?: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectName = "Project Name",
  backgroundImage = "/images/project-bg.jpg",
  description = "Brief project description",
  technologies = ["React", "Node.js", "MongoDB"],
  color = "bg-slate-600",
  url = "#",
  className,
}) => {
  return (
    <Card
      className={cn(
        "relative overflow-hidden group flex flex-col justify-between",
        className
      )}
      style={{ backgroundImage: 'url("/images/noise.png")' }}
    >
      <div
        className="saturate-50 pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat grayscale opacity-30 group-hover:opacity-40 group-hover:grayscale-0 transition-all duration-500 "
        style={{
          backgroundImage: `url("${backgroundImage}")`,
        }}
      />

      {/* Green Overlay */}
      <div
        className={`pointer-events-none absolute inset-0 opacity-20 group-hover:opacity-0 transition-all duration-300 ${color}`}
      />

      <CardHeader className="flex justify-between items-start">
        <div>
          <CardTitle className="text-2xl">{projectName}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <Button asChild variant={"outline"} className="z-9">
          <a href={url} aria-label={projectName} target="_blank">
            <ArrowUpRight />
          </a>
        </Button>
      </CardHeader>
      <CardFooter className="flex flex-wrap gap-2">
        {technologies.map((item, i) => (
          <Badge key={i}>{item}</Badge>
        ))}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
