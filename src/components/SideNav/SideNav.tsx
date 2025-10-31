import clsx from 'clsx';
import giuseppesAvatar from '../../assets/giuseppe.jpeg';
import { AnimatePresence, motion } from 'motion/react';
import {
    ChevronRight,
    House,
    Pencil,
    UserSearch
    } from 'lucide-react';
import { useState } from 'react';

const NAV_OPEN = 240;
const NAV_COLLAPSED = 72;

const items = [
  { label: "Home", icon: <House /> },
  { label: "Projects", icon: <Pencil /> },
  { label: "About", icon: <UserSearch /> }
];

export function SideNav() {
  const [open, setOpen] = useState(true);

  return (
    <motion.aside
      initial={false}
      animate={{ width: open ? NAV_OPEN : NAV_COLLAPSED }}
      //   transition={{ type: "spring", stiffness: 100 }}
      className="sticky top-0 bg-[var(--main-gray)]"
    >
      <div className="flex items-center p-3">
        <div className="flex-shrink-0">
          <img
            src={giuseppesAvatar}
            alt="Giuseppe Messina"
            className="w-10 h-10 rounded-full"
          />
        </div>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
              animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
              exit={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="overflow-hidden"
            >
              <div className="whitespace-nowrap leading-tight">
                <p className="text-sm font-semibold">Giuseppe Messina</p>
                <p className="text-xs text-gray-500">Full Stack Developer</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute right-[-11px] w-6 h-6 rounded-full bg-[var(--main-gray)] flex items-center justify-center border border-[var(--light-gray)] hover:border-[var(--text-white)] transition-colors duration-300">
          <ChevronRight
            className={clsx(
              " text-[var(--text-white)] cursor-pointer hover-color-red",
              open && "rotate-180"
            )}
            onClick={() => setOpen((o) => !o)}
          />
        </div>
      </div>

      <nav className="mt-2 px-2">
        {items.map((item) => (
          <motion.button
            key={item.label}
            whileTap={{ scale: 0.98 }}
            className="group w-full"
          >
            <motion.div
              layout
              className="flex items-center h-10 rounded-xl px-3 gap-3 text-gray-700 hover:bg-gray-100"
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
            >
              <div className="grid place-items-center">{item.icon}</div>

              <AnimatePresence initial={false}>
                {open && (
                  <motion.span
                    key="label"
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    className="truncate"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.button>
        ))}
      </nav>
    </motion.aside>
  );
}
