import { raleway } from "@/components/Fonts";
import { cn } from "@/lib/utils";
import { IoIosCheckbox } from "react-icons/io";

const HowToSection = () => {
  return (
    <section
      className="mt-20 flex flex-col items-center scroll-mt-[70px]"
      id="howto"
    >
      {/* Header */}
      <div>
        <h2 className="text-5xl font-bold tracking-tight">
          How Article Pal works
        </h2>
      </div>
      {/* Step 1 */}
      <div className="flex flex-col justify-between w-[900px]">
        {/* top side */}
        <div className="mt-[120px] flex">
          {/* left side */}
          <div className="space-y-7">
            <h2
              className={cn(
                "w-[350px] font-bold text-2xl tracking-tight mt-10",
                raleway.className
              )}
            >
              Type in your <br /> desired title <br /> for your blog post
            </h2>
            <p
              className={cn(
                "w-[400px] text-lg tracking-tight",
                raleway.className
              )}
            >
              Simply provide Article Pal at least 1-2 senetences on what to
              write and our exclusive fine-tuned AI mode will write you a
              comprehensive article regarding the title.
            </p>
          </div>
          {/* right side */}
          <div className="ml-16">
            <div className="w-[420px] h-[320px] rounded-xl bg-foreground border" />
          </div>
        </div>
        {/* bottom side */}
        <div className="flex flex-col">
          <div className="flex items-center mt-10">
            <IoIosCheckbox className="text-3xl mr-2" />
            <p className={raleway.className}>
              Include your SEO keywords or have Article Pal generate them for
              you.
            </p>
          </div>
          <div className="flex items-center mt-5">
            <IoIosCheckbox className="text-3xl mr-2" />
            <p className={raleway.className}>
              Customize your output with tone and perspective options such as
              &quot;Informative&quot;, &quot;Professional&quot;, and many more.
            </p>
          </div>
        </div>
      </div>
      {/* Step 2 */}
      <div className="flex flex-col justify-between w-[900px]">
        {/* top side */}
        <div className="mt-[120px] flex">
          {/* left side */}
          <div className="">
            <div className="w-[420px] h-[320px] rounded-xl bg-foreground border" />
          </div>
          {/* right side */}
          <div className="space-y-7 ml-16">
            <h2
              className={cn(
                "w-[350px] font-bold text-2xl tracking-tight mt-10",
                raleway.className
              )}
            >
              Crafting your
              <br />
              Outline
            </h2>
            <p
              className={cn(
                "w-[400px] text-lg tracking-tight",
                raleway.className
              )}
            >
              After providing Article Pal a title and optionally some keywords,
              it will ask you if you would want to have the outline gerated for
              you or if you want to manually fill the outline with your own
              crafted outline.
            </p>
          </div>
        </div>
        {/* bottom side */}
        <div className="flex flex-col">
          <div className="flex items-center mt-10">
            <IoIosCheckbox className="text-3xl mr-2" />
            <p className={raleway.className}>
              Consider adding facts within the talking points to further improve
              the quality, as well as ensure that all information generated will
              be factual always.
            </p>
          </div>
          <div className="flex items-center mt-5">
            <IoIosCheckbox className="text-5xl mr-2" />
            <p className={raleway.className}>
              You can also rely on our built-in outline generator as we have
              fine-tuned it to use Mutually Exclusive, Collectively Exhaustive
              (MECE) Framework. This is to ensure comprehensive coverage of any
              given topic or problem.
            </p>
          </div>
        </div>
      </div>
      {/* Step 3 */}
      <div className="flex flex-col justify-between w-[900px]">
        {/* top side */}
        <div className="mt-[120px] flex">
          {/* left side */}
          <div className="space-y-7">
            <h2
              className={cn(
                "w-[350px] font-bold text-2xl tracking-tight mt-10",
                raleway.className
              )}
            >
              Generate Article
              <br />
              with your Outline
            </h2>
            <p
              className={cn(
                "w-[400px] text-lg tracking-tight",
                raleway.className
              )}
            >
              Ensure you review your outline before you generate the article.
              Having detailed talking points will definitely help Article Pal
              focus on these topics and subjects.
            </p>
          </div>
          {/* right side */}
          <div className="ml-16">
            <div className="w-[420px] h-[320px] rounded-xl bg-foreground border" />
          </div>
        </div>
      </div>
      {/* Step 4 */}
      <div className="flex flex-col justify-between w-[900px]">
        {/* top side */}
        <div className="mt-[120px] flex">
          {/* left side */}
          <div className="">
            <div className="w-[420px] h-[320px] rounded-xl bg-foreground border" />
          </div>
          {/* right side */}
          <div className="space-y-7 ml-16">
            <h2
              className={cn(
                "w-[350px] font-bold text-2xl tracking-tight mt-10",
                raleway.className
              )}
            >
              Review and edit your article
              <br />
              with your clean and
              <br />
              performant text editor
            </h2>
            <p
              className={cn(
                "w-[400px] text-lg tracking-tight",
                raleway.className
              )}
            >
              Once the article’s generated, review the mockup and if the
              generated article does not suffice, we strongly suggest to
              re-generate a new article with a more detailed talking point
              inputs.
            </p>
          </div>
        </div>
      </div>
      {/* Background Text */}
      <div className="mt-40 mb-20 text-2xl tracking-tight font-bold text-foreground/50 flex flex-col items-center text-center">
        <h2>
          &quot;Either write something worth reading or do something
          <br />
          worth writing&quot;
        </h2>
        <h2>- Benjamin Franklin</h2>
      </div>
    </section>
  );
};
export default HowToSection;
