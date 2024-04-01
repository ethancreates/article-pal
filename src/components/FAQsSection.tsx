import AccordionElement from "./AccordionElement";

const FAQsSection = () => {
  return (
    <section className="flex flex-col items-center mt-20">
      <h2 className="text-4xl font-bold tracking-tight mb-10">
        Frequently asked questions
      </h2>
      {/* Accordion */}
      <div>
        <AccordionElement title="Question 1">
          <p>Answer 1</p>
        </AccordionElement>
      </div>
    </section>
  );
};
export default FAQsSection;
