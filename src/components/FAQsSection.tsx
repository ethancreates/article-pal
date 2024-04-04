import AccordionElement from "./AccordionElement";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQsSection = () => {
  return (
    <section
      className="flex flex-col items-center my-20 mb-25 scroll-mt-[70px]"
      id="faqs"
    >
      <h2 className="text-4xl font-bold tracking-tight mb-10">
        Frequently asked questions
      </h2>
      {/* Accordion */}
      <div>
        <Accordion type="single" collapsible className="w-[600px] space-y-4">
          <AccordionItem
            value="item-1"
            className="border px-5 rounded-2xl py-3 bg-foreground text-background"
          >
            <AccordionTrigger>FAQ 1</AccordionTrigger>
            <AccordionContent>FAQ 1 Content</AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="border px-5 rounded-2xl py-3 bg-foreground text-background"
          >
            <AccordionTrigger>FAQ 2</AccordionTrigger>
            <AccordionContent>FAQ 2 Content</AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="border px-5 rounded-2xl py-3 bg-foreground text-background"
          >
            <AccordionTrigger>FAQ 3</AccordionTrigger>
            <AccordionContent>FAQ 3 Content</AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="border px-5 rounded-2xl py-3 bg-foreground text-background"
          >
            <AccordionTrigger>FAQ 4</AccordionTrigger>
            <AccordionContent>FAQ 4 Content</AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-5"
            className="border px-5 rounded-2xl py-3 bg-foreground text-background"
          >
            <AccordionTrigger>FAQ 5</AccordionTrigger>
            <AccordionContent>FAQ 5 Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};
export default FAQsSection;
