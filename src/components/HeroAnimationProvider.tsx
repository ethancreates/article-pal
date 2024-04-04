"use client";

import { motion } from "framer-motion";
import React from "react";

const HeroAnimationProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -200 }}
      whileInView={{ opacity: 100, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1.3 }}
      viewport={{ margin: "20%", once: true }}
    >
      {children}
    </motion.div>
  );
};

export default HeroAnimationProvider;
