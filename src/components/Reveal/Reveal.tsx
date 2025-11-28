import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  fullwidth?: boolean;
};

export const Reveal = ({ children, delay = 0, fullwidth }: RevealProps) => {
  const nodeRef = useRef<HTMLDivElement | null>(null);
  const wasAlreadyVisibleOnMount = useRef(false);

  const setRef = (node: HTMLDivElement) => {
    if (node) {
      nodeRef.current = node;
      const rect = node.getBoundingClientRect();
      wasAlreadyVisibleOnMount.current = rect.top < window.innerHeight;
    }
  };

  const isInView = useInView(nodeRef, { once: true });

  const animate = { opacity: 1, y: 0 };
  const initial = { opacity: 0, y: 100 };

  return (
    <motion.div
      ref={setRef}
      animate={isInView ? animate : initial}
      initial={initial}
      transition={{
        duration: 1,
        ease: "easeOut",
        delay: wasAlreadyVisibleOnMount.current ? delay : 0
      }}
      className={fullwidth ? "w-full" : ""}
    >
      {children}
    </motion.div>
  );
};
