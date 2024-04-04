import { FaSackDollar } from "react-icons/fa6";
import { RiOpenaiFill } from "react-icons/ri";
import { RiArticleFill } from "react-icons/ri";
import { MdOutlineFactCheck } from "react-icons/md";
import { IoSearchCircleSharp } from "react-icons/io5";
import InViewProvider from "./InViewProvider";

const FeaturesSection = () => {
  return (
    <InViewProvider>
      <section
        className="mt-10 bg-foreground text-background scroll-mt-[100px]"
        id="features"
      >
        <div className="flex flex-col items-center pt-20">
          {/* Header */}
          <div className="flex flex-col items-center">
            <h1 className="text-[64px] font-bold tracking-tight">Features</h1>
            <div className="flex flex-col items-center text-[16px]">
              <p>
                These are the most helpful features offered to help writers
                create meaningful articles and
              </p>
              <p>ensure that the search intent is always answered!</p>
            </div>
          </div>
          {/* Features Bento */}
          <div className="mt-32 flex flex-col items-center">
            {/* First Row */}
            <div className="flex w-[900px] flex-row space-x-2">
              {/* Savings Bento */}
              <div className="flex h-[300px] w-[300px] basis-1/3 flex-col rounded-2xl bg-background p-8 text-foreground">
                <FaSackDollar className="text-6xl" />
                <h2 className="mt-3 text-[20px] font-semibold tracking-tight">
                  Savings
                </h2>
                <p className="mt-2 font-light leading-tight">
                  You can use your own OpenAI API key to ensure costs are always
                  managed and reviewed within your team accordingly.
                </p>
                <p className="mt-2">No bill shocks.</p>
              </div>
              {/* AI-Powered Article Writing Bento */}
              <div className="flex h-[300px] w-[600px] basis-2/3 flex-col rounded-2xl bg-background p-8 text-foreground">
                <RiOpenaiFill className="text-6xl" />
                <h2 className="mt-3 text-[20px] font-semibold tracking-tight">
                  AI-Powered Article Writing
                </h2>
                <p className="mt-2 font-light leading-tight">
                  Write articles in minutes with our fine-tuned Article Pal
                  exclusive GPT model, writing valuable content that answres the
                  search intent. Coupled with great keywords, your article and
                  site should get indexed and rank ASAP.
                </p>
                <p className="mt-2">
                  Claude and Gemini support to follow soon!
                </p>
              </div>
            </div>
            {/* Second Row */}
            <div className="mt-4 flex w-[900px] flex-row space-x-2">
              {/* Outline Geneartion */}
              <div className="flex h-[300px] w-[300px] basis-1/3 flex-col rounded-2xl bg-background p-8 text-foreground">
                <RiArticleFill className="text-6xl" />
                <h2 className="mt-3 text-[20px] font-semibold tracking-tight">
                  Outline Generation
                </h2>
                <p className="mt-2 font-light leading-tight">
                  Article Pal allows you to be flexible with your approach. You
                  can decide if Article Pal intelligently chooses your outline
                  for you or you dissect and choose your own subheadings.
                </p>
              </div>
              {/* Factual Information */}
              <div className="flex h-[300px] w-[300px] basis-1/3 flex-col rounded-2xl bg-background p-8 text-foreground">
                <MdOutlineFactCheck className="text-6xl" />
                <h2 className="mt-3 text-[20px] font-semibold tracking-tight">
                  Factual Information
                </h2>
                <p className="mt-2 font-light leading-tight">
                  We strongly urge our users to take advantage of the powerful
                  talking point text area to ensure that Article Pal has the
                  right facts when writing the article.
                </p>
              </div>
              {/* Factual Information */}
              <div className="flex h-[300px] w-[300px] basis-1/3 flex-col rounded-2xl bg-background p-8 text-foreground">
                <IoSearchCircleSharp className="text-6xl" />
                <h2 className="mt-3 text-[20px] font-semibold tracking-tight">
                  Search Engine Friendly
                </h2>
                <p className="mt-2 font-light leading-tight">
                  Article Pal allows you to generate great keywords with the
                  title as reference, it uses an advance algorithm to suggest
                  better keywords or you can also manually add your own keywords
                  for the added flexibility.
                </p>
              </div>
            </div>
            {/* Quote */}
            <div className="mb-16 mt-20 flex w-[900px] flex-col items-center space-y-2 text-center text-3xl font-bold tracking-tight text-background/50">
              <h2>
                &lsquo;Get it down. Take chances. It may be bad, but it&apos;s
                the only <br /> way you can do anything really good.&lsquo;
              </h2>
              <h2> - William Faulkner</h2>
            </div>
          </div>
        </div>
      </section>
    </InViewProvider>
  );
};

export default FeaturesSection;
