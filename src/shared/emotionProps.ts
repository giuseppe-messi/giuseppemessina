import type { Transition } from "motion";

export const desktopNavTransition: Transition = {
  type: "spring",
  stiffness: 260,
  //  stiffness: 60,
  damping: 24
};
