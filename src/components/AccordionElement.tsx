"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type AccordionElementProps = {
  title: string;
  children: JSX.Element;
  defaultOpen?: boolean;
};

const AccordionElement = ({
  title,
  children,
  defaultOpen = false,
}: AccordionElementProps) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="border rounded-2xl bg-foreground w-[800px] h-[80px]"
    >
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex w-full items-center justify-between gap-4 py-6"
      >
        <motion.span
          variants={{
            open: {},
          }}
        >
          {title}
        </motion.span>
      </button>
    </motion.div>
  );
};
export default AccordionElement;
