import { Button } from "@/components/ui/button";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <footer className="my-container border-t mt-12 md:mt-20 p-6 flex flex-col items-center justify-between gap-y-4 sm:flex-row">
      <div>
        <Link
          to={"/"}
          className="hover:border-b-2 dark:border-slate-200 border-slate-900 "
        >
          @_divyansh
        </Link>
      </div>
      <div>
        <span>&copy;{new Date().getFullYear()} Copyright @_divyansh</span>
      </div>
      <div>
        <Button asChild variant={"ghost"} size={"icon"}>
          <a
            href="https://www.linkedin.com/in/divyanshmishra57/"
            aria-label="Linkedin"
          >
            <LinkedinIcon />
          </a>
        </Button>
        <Button asChild variant={"ghost"} size={"icon"}>
          <a href="https://github.com/itsdivyansh1" aria-label="Github">
            <GithubIcon />
          </a>
        </Button>
        <Button asChild variant={"ghost"} size={"icon"}>
          <a href="https://x.com/divyansh400" aria-label="x.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-twitter-x"
              viewBox="0 0 16 16"
            >
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
            </svg>
          </a>
        </Button>
        <Button asChild variant={"ghost"} size={"icon"}>
          <a
            href="https://www.instagram.com/_divyansh_57/"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
        </Button>
      </div>
    </footer>
  );
};

export default FooterSection;
