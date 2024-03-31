import { raleway } from "@/app/layout";
import { cn } from "@/lib/utils";

const HowToSection = () => {
  return (
    <section className="mt-20 flex flex-col items-center">
      {/* Header */}
      <div>
        <h2 className="text-5xl font-bold tracking-tight">
          How Article Pal works
        </h2>
      </div>
      {/* Step 1 */}
      <div className="flex justify-between w-[900px] items-center">
        <div className="mt-10">
          <h2 className={cn("w-[350px] font-bold text-2xl tracking-tight", raleway.className)}>Type in your <br/> desired title <br/> for your blog post</h2>
        </div>
        <div></div>
      </div>
    </section>
  );
};
export default HowToSection;
