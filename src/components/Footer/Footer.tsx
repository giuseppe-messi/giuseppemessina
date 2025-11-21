import { MoveRight } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const londonFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/London",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false
});

const getLondonTime = () => {
  const timeString = londonFormatter.format(new Date());
  const [hourStr, minuteStr] = timeString.split(":");

  const hour = Number(hourStr);
  const minutes = Number(minuteStr);

  const period = hour >= 12 ? "PM" : "AM";

  return {
    hour,
    minutes,
    time: `${hourStr}:${minuteStr} ${period}`
  };
};

const getStatus = (hour: number) => {
  if (hour >= 9 && hour < 18) {
    return (
      <span className="flex items-center gap-2">
        👨‍💻 working
        <motion.span
          initial={{ scale: 1, opacity: 0.6 }}
          animate={{
            scale: [1, 1.35, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
          className="w-2 h-2 rounded-full bg-[#b6ff1b]"
        ></motion.span>
      </span>
    );
  } else if (hour >= 18 && hour < 23) {
    return "😎 ...chilling";
  } else {
    return "💤";
  }
};

export const Footer = () => {
  const [londonTime, setLondonTime] = useState<{
    hour: number;
    minutes: number;
    time: string;
  }>(getLondonTime);

  const status = getStatus(londonTime.hour);

  useEffect(() => {
    const id = setInterval(() => {
      console.log("INTERVALLLLLL HEREEEE");
      setLondonTime(getLondonTime());
    }, 1000 * 60);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-[var(--main-gray)] w-full pt-10">
      <div className="mx-auto max-w-250 border-b border-[var(--medium-gray)] pb-10">
        <table className="w-full text-sm [&_th,&_td]:p-2 [&_th,&_td]:w-10">
          <thead>
            <tr className="[&>th]:text-start">
              <th>Index</th>
              <th>Projects</th>
              <th>Resources</th>
              <th>Connect</th>
            </tr>
          </thead>
          <tbody className="text-[var(--text-gray)]">
            <tr>
              <td>Home</td>
              <td>Optimistic UI Sandbox</td>
              <td>Stack</td>
              <td>Contact</td>
            </tr>
            <tr>
              <td>Projects</td>
              <td>Chat App</td>
              <td></td>
              <td>LinkedIn</td>
            </tr>
            <tr>
              <td>About</td>
              <td>Chat App</td>
              <td></td>
              <td>GitHub</td>
            </tr>
            <tr>
              <td></td>
              <td>Chat App</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mx-auto max-w-250 flex py-10 border-b border-[var(--medium-gray)] mb-20">
        <div className="flex-1 text-sm">
          <p className="flex gap-1 mb-2">Currently {status}</p>
          <div className="flex items-center gap-2 text-[var(--text-gray)]">
            <p>Reach out</p>
            <MoveRight size={18} />
          </div>
        </div>
        <div className="flex-1">
          <p className="text-7xl text-[var(--text-gray)] ">{londonTime.time}</p>
        </div>
      </div>
      <div className="mx-auto max-w-250 text-end mb-5 text-sm text-[var(--text-gray)]">
        <p>@ Giuseppe Messina</p>
      </div>
    </div>
  );
};
