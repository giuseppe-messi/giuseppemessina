// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";

// type RevealProps = {
//   children: React.ReactNode;
//   delay?: number;
//   fullwidth?: boolean;
// };

// export const Reveal = ({ children, delay, fullwidth }: RevealProps) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   const animate = { opacity: 1, y: 0 };
//   const initial = { opacity: 0, y: 100 };

//   return (
//     <motion.div
//       ref={ref}
//       animate={isInView ? animate : initial}
//       initial={initial}
//       transition={{ duration: 1, ease: "easeOut", delay }}
//       className={`${fullwidth ? "w-full" : ""}`}
//     >
//       {children}
//     </motion.div>
//   );
// };
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  fullwidth?: boolean;
};

export const Reveal = ({ children, delay = 0, fullwidth }: RevealProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const wasVisibleOnMount = useRef(false);

  const setRef = (node: HTMLDivElement) => {
    if (node) {
      ref.current = node;

      // only run on first mount
      // if (!wasVisibleOnMount.current) {
      const rect = node.getBoundingClientRect();
      wasVisibleOnMount.current = rect.top < window.innerHeight;
      //}
    }
  };

  const isInView = useInView(ref, { once: true });

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
        delay: wasVisibleOnMount.current ? delay : 0
      }}
      className={fullwidth ? "w-full" : ""}
    >
      {children}
    </motion.div>
  );
};
