import { Button } from "./ui/button";
import { raleway } from "@/components/Fonts";
import { cn } from "@/lib/utils";

const SignUpButton = () => {
  return (
    <Button
      className={cn(
        "bg-background/80 text-foreground px-8 rounded-full",
        raleway.className
      )}
    >
      Sign Up
    </Button>
  );
};

export default SignUpButton;
