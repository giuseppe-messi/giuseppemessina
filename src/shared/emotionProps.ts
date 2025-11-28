import type { TargetAndTransition, Transition } from "motion";

export const desktopNavTransition: Transition = {
  type: "spring",
  stiffness: 260,
  //  stiffness: 60,
  damping: 24
};

type SlideUp = {
  initial: TargetAndTransition;
  animate: TargetAndTransition;
  transition: Transition;
};

export const slideUp: SlideUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: "easeOut" }
};
