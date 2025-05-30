import { Link } from "react-router-dom";
import ModeToggle from "./mode-toggle";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <header className="my-container flex items-center justify-between py-4 ">
      <Link
        to={"/"}
        className="hover:border-b-2 dark:border-slate-200 border-slate-900 "
      >
        @_divyansh
      </Link>
      <div className="flex gap-x-2">
        <ModeToggle />
        <Button asChild>
          <Link to={"/contact"}>Contact me</Link>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
