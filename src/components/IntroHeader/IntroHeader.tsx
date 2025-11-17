import React from "react";
import { motion } from "motion/react";

export const IntroHeader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="font-semibold leading-tight tracking-tight"
    >
      <motion.span
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="text-5xl"
      >
        Hey, I'm Giuseppe
      </motion.span>

      <div className="text-2xl mt-4 flex gap-3 flex-wrap">
        <motion.span
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="text-[var(--text-gray)]"
        >
          Full Stack Typescript Developer...
        </motion.span>

        <motion.span
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        >
          Frontend-leaning
        </motion.span>
      </div>
    </motion.div>
  );
};
