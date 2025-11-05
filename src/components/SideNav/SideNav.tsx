import clsx from "clsx";
import giuseppesAvatar from "../../assets/giuseppe.jpeg";
import { ChevronRight, House, Pencil, UserSearch } from "lucide-react";
import { hoverBorder, hoverText } from "../../shared/styles";
import { useState } from "react";
import { AnimatePresence, motion, type Transition } from "motion/react";

const NAV_OPEN = 240;
const NAV_COLLAPSED = 75;

const items = [
  { label: "Home", icon: <House size={20} /> },
  { label: "Projects", icon: <Pencil size={20} /> },
  { label: "About", icon: <UserSearch size={20} /> }
];

const transition: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 24
};

const sharedAnimete = (isOpen: boolean) => ({
  initial: { opacity: 0 },
  exit: { opacity: 1, scale: 1.1 },
  animate: isOpen ? { opacity: 1, scale: 1.1 } : { opacity: 0, scale: 1 },
  transition: { ...transition, delay: 0.2 }
});

export function SideNav() {
  const [isOpen, setIsOpen] = useState(true);
  const [active, setActive] = useState("Projects");

  return (
    <motion.aside
      animate={{ width: isOpen ? NAV_OPEN : NAV_COLLAPSED }}
      transition={transition}
      className="sticky top-0 px-4 pt-6 gap-10 bg-[var(--main-gray)] flex flex-col items-center"
    >
      <div className="flex items-center w-full gap-6">
        <div className="flex-none w-10 h-10">
          <motion.img
            transition={transition}
            animate={isOpen ? { scale: 1.2 } : { scale: 1 }}
            src={giuseppesAvatar}
            alt="Giuseppe Messina"
            className="w-full h-full rounded-full object-cover"
          />
        </div>

        <div className="overflow-hidden">
          <div className="whitespace-nowrap leading-tight">
            <p className="text-sm font-semibold">Giuseppe Messina</p>
            <p className="text-xs text-gray-500">Full Stack Developer</p>
          </div>
        </div>
      </div>

      {/* <nav className="mt-10 flex flex-col gap-3"> */}
      {items.map((item) => (
        <motion.div
          transition={transition}
          animate={isOpen ? { x: 10, y: 10 } : { x: 0, y: 0 }}
          className="flex items-center w-full gap-6"
        >
          <div className="flex-none w-10 h-10 flex items-center justify-center">
            {item.icon}
          </div>

          <div className="overflow-hidden">
            <div className="whitespace-nowrap leading-tight">
              <p className="text-sm font-semibold"> {item.label}</p>
            </div>
          </div>
        </motion.div>
      ))}
      {/* </nav> */}

      <div
        className={clsx(
          "absolute top-[38px] right-[-10px] w-5 h-5 rounded-full bg-[var(--main-gray)]",
          hoverBorder
        )}
      >
        <motion.div
          onClick={() => setIsOpen((o) => !o)}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={transition}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
        >
          <ChevronRight
            className={clsx(
              "absolute left-1/2 top-1/2 -translate-x-[47%] -translate-y-1/2",
              hoverText
            )}
            size={15}
          />
        </motion.div>
      </div>
    </motion.aside>
  );
}
