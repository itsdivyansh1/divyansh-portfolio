import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const HeroSection = () => {
  const techStacks: string[] = [
    "Reactjs",
    "Nodejs",
    "MongoDB",
    "PHP",
    "SQL",
    "Java",
    "Python",
    "C/C++",
    "Wordpress",
  ];

  return (
    <section className="w-full h-auto lg:h-[600px] bg-noise bg-slate-600 text-white flex justify-between md:flex-row flex-col">
      <div className="w-full p-6 md:w-[50%] md:p-12 ">
        <div className="flex items-baseline gap-x-2 font-retro flex-wrap">
          <img
            src="/images/typingcat.gif"
            alt="Random image of a cat"
            className="saturate-0 inline"
          />
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight uppercase lg:text-5xl">
            Divyansh Mishra
          </h1>
        </div>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-justify">
          Hi there! I'm Divyansh Mishra, a web developer who loves creating
          websites that look great and work smoothly. I've been doing this for a
          year now, focusing on both the design and functionality of websites.
        </p>

        <div>
          <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            Tech Stacks
          </h3>
          <div className="flex gap-2 mt-2 flex-wrap">
            {techStacks.map((item, i) => (
              <Badge key={i}>{item}</Badge>
            ))}
          </div>
        </div>
        <Button variant={"secondary"} className="mt-6" asChild>
          <a
            href="https://drive.google.com/file/d/1qJVCqnp8HWn6-nnh7ousL7Egc33IbjWI/view?usp=drive_link"
            target="_blank"
          >
            Resume
            <Download />
          </a>
        </Button>
      </div>
      <div className="w-full md:w-[50%] relative hidden md:block">
        <div className="absolute -right-1.5 -bottom-8.5 ">
          <img
            src="/images/illustration.svg"
            alt="finally me coding"
            className="saturate-50 w-[200px] md:w-[400px] lg:w-[600px]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
