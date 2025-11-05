import clsx from 'clsx';
import giuseppesAvatar from '../../assets/giuseppe.jpeg';
import {
  ChevronRight,
  House,
  Pencil,
  UserSearch
  } from 'lucide-react';
import { hoverBorder, hoverText } from '../../shared/styles';
import { useState } from 'react';
import { AnimatePresence, motion, type Transition } from "motion/react";

const NAV_OPEN = 240;
const NAV_COLLAPSED = 75;

const items = [
  { label: "Home", icon: <House size={18} /> },
  { label: "Projects", icon: <Pencil size={18} /> },
  { label: "About", icon: <UserSearch size={18} /> }
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
      // transition={{ type: "spring", stiffness: 100 }}
      className="sticky top-0 px-4 pt-6 bg-[var(--main-gray)]"
    >
      {/* <motion.div
        layout
        className="flex items-center gap-6"
        transition={transition}
      >
        <motion.img
          animate={
            isOpen ? { scale: 1.2, x: 6, y: 6 } : { scale: 1, x: 0, y: 0 }
          }
          transition={transition}
          src={giuseppesAvatar}
          alt="Giuseppe Messina"
          className="w-10 h-10 rounded-full"
        />

        {isOpen && (
          <AnimatePresence>
            <motion.div {...sharedAnimete(isOpen)}>
              <div className="whitespace-nowrap leading-tight">
                <p className="text-sm font-semibold">Giuseppe Messina</p>
                <p className="text-xs text-gray-500">Full Stack Developer</p>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </motion.div> */}

      <motion.div
        layout
        // className={clsx(
        //   "h-10 px-2 flex items-center w-full gap-6 hoverText",
        //   !open && "justify-center"
        // )}
        className={clsx("h-10 px-2 flex items-center w-full gap-6", hoverText)}
      >
        <div className="flex-none w-10 h-10">
          <motion.img
            transition={transition}
            animate={isOpen ? { scale: 1.2 } : { scale: 1 }}
            src={giuseppesAvatar}
            alt="Giuseppe Messina"
            className="w-full h-full rounded-full object-cover"
          />
        </div>

        {isOpen && (
          <AnimatePresence>
            <motion.div {...sharedAnimete(isOpen)}>
              <div className="whitespace-nowrap leading-tight">
                <p className="text-sm font-semibold">Giuseppe Messina</p>
                <p className="text-xs text-gray-500">Full Stack Developer</p>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </motion.div>

      <nav className="mt-10 flex flex-col gap-3">
        {items.map((item) => (
          <motion.button
            key={item.label}
            whileTap={{ scale: 0.98 }}
            className={clsx(
              "w-full cursor-pointer rounded-md flex items-center",

              active === item.label && `bg-[#2c2c2c] ${hoverBorder}`
            )}
            animate={isOpen ? { x: 6, y: 6 } : { x: 0, y: 0 }}
            transition={transition}
          >
            <motion.div
              layout
              // className={clsx(
              //   "h-10 px-2 flex items-center w-full gap-6 hoverText",
              //   !open && "justify-center"
              // )}
              className={clsx(
                "h-10 px-2 flex items-center w-full gap-6",
                hoverText
              )}
            >
              <motion.div
                transition={transition}
                animate={isOpen ? { scale: 1.2 } : { scale: 1 }}
              >
                {item.icon}
              </motion.div>

              {isOpen && (
                <motion.span {...sharedAnimete(isOpen)} className="text-sm">
                  {item.label}
                </motion.span>
              )}
            </motion.div>
          </motion.button>
        ))}
      </nav>

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
