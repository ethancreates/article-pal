import { cn } from "@/lib/utils";
import { raleway } from "./Fonts";
import { ContactForm } from "./ContactForm";
import InViewProvider from "./InViewProvider";

const ContactSection = () => {
  return (
    <div id="contact" className="scroll-mt-14">
      <InViewProvider>
        <section className="bg-foreground text-background h-screen">
          {/* Header */}
          <div className="flex flex-col items-center">
            <h2 className="mt-16 text-5xl font-bold tracking-tight">
              We&apos;ve been waiting for you.
            </h2>
            <p
              className={cn(
                "text-sm mt-2 font-semibold text-background/80",
                raleway.className,
              )}
            >
              We want to hear from you. Let us know how we can help.
            </p>
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </section>
      </InViewProvider>
    </div>
  );
};
export default ContactSection;
