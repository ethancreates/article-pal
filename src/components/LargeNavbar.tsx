import SignUpButton from "./SignUpButton";
import { cn } from "@/lib/utils";
import { raleway } from "@/components/Fonts";

const LargeNavbar = () => {
  return (
    <nav className="text-background">
      <ul className="bg-foreground w-[1000px] mx-auto py-4 mt-5 rounded-full flex items-center justify-between shadow-xl">
        <li>
          {/* nav links */}
          <ul className={cn("flex space-x-3 ml-10", raleway.className)}>
            <li>features</li>
            <li>pricing</li>
            <li>contact</li>
          </ul>
        </li>
        <li>
          {/* logo */}
          <h1 className="text-4xl font-bold tracking-tight mr-10">
            article pal.
          </h1>
        </li>
        <li className="mr-14">
          {/* sign in/sign out */}
          <SignUpButton />
        </li>
      </ul>
    </nav>
  );
};
export default LargeNavbar;
