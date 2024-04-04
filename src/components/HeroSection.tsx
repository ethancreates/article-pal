import { raleway } from "./Fonts";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Image from "next/image";
import APheaderImg from "../../public/articlepal-editor.png";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center mt-10">
      <div className="flex flex-col items-center text-5xl font-bold tracking-tight leading-tight">
        <h1>Writing valuable and high-quality articles</h1>
        <h1>has never been this easy!</h1>
      </div>
      <div className="text-[16px] tracking-tight mt-3 flex flex-col items-center">
        <p className={cn("", raleway.className)}>
          Never face the blank page alone again. Article Pal is your trusty AI
          sidekick, generating multiple high-quality
        </p>
        <p className={cn("", raleway.className)}>
          article drafts and ideas so you can choose the perfect starting point.
        </p>
      </div>
      <div className="mt-5">
        <Button
          className={cn(
            "bg-foreground text-background rounded-full shadow-2xl px-10 py-7 text-xl hover:bg-foreground/70 active:scale-90 transition",
            raleway.className
          )}
        >
          Get Started
        </Button>
      </div>
      {/* Main Image */}
      <div className="mt-10">
        <Image
          src={APheaderImg}
          width={1000}
          height={770}
          alt="A snapshot of what Article Pal's editor looks like."
        />
      </div>
      {/* Background Text */}
      <div className="my-16 text-7xl tracking-tight font-bold text-foreground/50">
        <h2>by writers, for writers</h2>
      </div>
    </section>
  );
};
export default HeroSection;
