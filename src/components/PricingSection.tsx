import InViewProvider from "./InViewProvider";

const PricingSection = () => {
  return (
    <div id="pricing" className="scroll-mt-14">
      <InViewProvider>
        <section className="bg-foreground text-background">
          <div className="flex flex-col items-center">
            <h2 className="mt-20 text-4xl font-bold tracking-tight mr-5">
              Pricing
            </h2>
            {/* Cards */}
            <div className="flex flex-col md:flex-row items-center mb-20 space-x-5">
              {/* Left Card */}
              <div className="bg-background h-[400px] w-[260px] rounded-2xl text-foreground">
                <div className="flex flex-col items-center">
                  <h3 className="mt-5 text-3xl font-bold">Free</h3>
                </div>
              </div>
              {/* Middle Card */}
              <div className="bg-background h-[400px] w-[260px] rounded-2xl mt-[150px] text-foreground">
                <div className="flex flex-col items-center">
                  <h3 className="mt-5 text-3xl font-bold">Monthly</h3>
                </div>
              </div>
              {/* Right Card */}
              <div className="bg-background h-[400px] w-[260px] rounded-2xl text-foreground">
                <div className="flex flex-col items-center">
                  <h3 className="mt-5 text-3xl font-bold">Yearly</h3>
                </div>
              </div>
            </div>
            {/* Quote */}
            <div className="flex flex-col text-background/50 text-2xl font-bold text-center tracking-tight mt-10 mb-20">
              <h2>
                &quot;The scariest moment is always just before you start&quot;
              </h2>
              <h2>- Stephen King</h2>
            </div>
          </div>
        </section>
      </InViewProvider>
    </div>
  );
};
export default PricingSection;
