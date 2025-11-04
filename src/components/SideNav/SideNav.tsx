import clsx from 'clsx';
import giuseppesAvatar from '../../assets/giuseppe.jpeg';
import {
  ChevronRight,
  House,
  Pencil,
  UserSearch
  } from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence, motion, type Transition } from "motion/react";

const NAV_OPEN = 240;
const NAV_COLLAPSED = 75;

const items = [
  { label: "Home", icon: <House size={18} /> },
  { label: "Projects", icon: <Pencil size={18} /> },
  { label: "About", icon: <UserSearch size={18} /> }
];

export function SideNav() {
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState("Projects");

  const openAnimate = open
    ? { scale: 1.2, x: 6, y: 6 }
    : { scale: 1, x: 0, y: 0 };

  const openTransition: Transition = {
    type: "spring",
    stiffness: 260,
    damping: 24
  };

  const fadeInScaleMotion = {
    initial: { opacity: 0 },
    exit: { opacity: 1, scale: 1.1 },
    animate: open ? { opacity: 1, scale: 1.1 } : { opacity: 0, scale: 1 },
    transition: { ...openTransition, delay: 0.2 }
  };

  return (
    <motion.aside
      animate={{ width: open ? NAV_OPEN : NAV_COLLAPSED }}
      // transition={{ type: "spring", stiffness: 100 }}
      className="sticky top-0 px-4 pt-6 bg-[var(--main-gray)]"
    >
      <div className="flex items-center gap-6">
        <motion.img
          animate={openAnimate}
          transition={openTransition}
          src={giuseppesAvatar}
          alt="Giuseppe Messina"
          className="w-10 h-10 rounded-full"
        />

        {open && (
          <AnimatePresence>
            <motion.div {...fadeInScaleMotion}>
              <div className="whitespace-nowrap leading-tight">
                <p className="text-sm font-semibold">Giuseppe Messina</p>
                <p className="text-xs text-gray-500">Full Stack Developer</p>
              </div>
            </motion.div>
          </AnimatePresence>
        )}

        <div className="absolute right-[-10px] w-5 h-5 rounded-full bg-[var(--main-gray)] border border-[var(--text-gray)] hover:border-[var(--text-white)] transition-colors duration-300">
          <motion.div
            onClick={() => setOpen((o) => !o)}
            animate={{ rotate: open ? 180 : 0 }}
            transition={openTransition}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          >
            <ChevronRight
              className="text-[var(--text-gray)] hover:text-[var(--text-white)] transition-colors duration-300"
              size={15}
            />
          </motion.div>
        </div>
      </div>

      <nav className="mt-10 flex flex-col gap-3">
        {items.map((item) => (
          <motion.button
            key={item.label}
            whileTap={{ scale: 0.98 }}
            className={clsx(
              "w-full cursor-pointer rounded-md flex items-center",
              active === item.label &&
                "border border-[var(--text-gray)] hover:border-[var(--text-white)] transition-colors duration-300 bg-[#2c2c2c]"
            )}
            animate={open ? { x: 6, y: 6 } : { x: 0, y: 0 }}
            transition={openTransition}
          >
            <motion.div
              layout
              // className={clsx(
              //   "h-10 px-2 flex items-center w-full gap-6 text-[var(--text-gray)] hover:text-[var(--text-white)] transition-colors duration-300",
              //   !open && "justify-center"
              // )}
              className="h-10 px-2 flex items-center w-full gap-6 text-[var(--text-gray)] hover:text-[var(--text-white)] transition-colors duration-300"
            >
              <motion.div
                transition={openTransition}
                animate={open ? { scale: 1.2 } : { scale: 1 }}
              >
                {item.icon}
              </motion.div>

              {open && (
                <motion.span {...fadeInScaleMotion} className="text-sm">
                  {item.label}
                </motion.span>
              )}
            </motion.div>
          </motion.button>
        ))}
      </nav>
    </motion.aside>
  );
}
