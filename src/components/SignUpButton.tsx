import { Button } from "./ui/button";
import { raleway } from "@/components/Fonts";
import { cn } from "@/lib/utils";

const SignUpButton = () => {
  return (
    <Button
      className={cn(
        "bg-background/80 text-foreground px-8 rounded-full hover:bg-background/70 active:scale-90 transition",
        raleway.className
      )}
    >
      Sign Up
    </Button>
  );
};

export default SignUpButton;
