import { MoveRight } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const headers = ["Index", "Projects", "Resources", "Connect"];

const tableData = [
  {
    index: <Link to="/">Home</Link>,
    projects: <Link to="/projects/1">Optimistic UI Sandbox</Link>,
    resources: <Link to="/stack">Stack</Link>,
    connect: <Link to="/contact">Contact</Link>
  },
  {
    index: <Link to="/projects">Projects</Link>,
    projects: <Link to="/projects/2">Chat App</Link>,
    resources: "",
    connect: (
      <a
        href="https://www.linkedin.com/in/giuseppe-messina/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    )
  },
  {
    index: <Link to="/about">About</Link>,
    projects: <Link to="/projects/3">React Lab Mono</Link>,
    resources: "",
    connect: (
      <a
        href="https://github.com/giuseppe-messi/"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    )
  },
  {
    index: "",
    projects: <Link to="/projects/4">Auth-Guarded Hub</Link>,
    resources: "",
    connect: ""
  }
];

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
  const navigate = useNavigate();
  const [londonTime, setLondonTime] = useState<{
    hour: number;
    minutes: number;
    time: string;
  }>(getLondonTime);

  const status = getStatus(londonTime.hour);

  useEffect(() => {
    const id = setInterval(() => {
      setLondonTime(getLondonTime());
    }, 1000 * 60);

    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div className="border-b border-[var(--medium-gray)] pb-10">
        {/* desktop view */}
        <div className="hidden sm:block">
          <table className="w-full text-sm [&_th,&_td]:p-2 [&_th,&_td]:w-10">
            <thead>
              <tr className="[&>th]:text-start">
                {headers.map((h) => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {tableData.map((row, i) => (
                <tr key={i} className="text-[var(--text-gray)]">
                  <td>{row.index}</td>
                  <td>{row.projects}</td>
                  <td>{row.resources}</td>
                  <td>{row.connect}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* mobile view */}
        <div className="sm:hidden grid grid-cols-2 gap-10 text-sm">
          {tableData.map((row, i) => (
            <div key={i} className="text-[var(--text-gray)]">
              <p className="font-semibold text-white mb-2">{headers[i]}</p>

              <>{row.index}</>
              <>{row.projects}</>
              <>{row.resources}</>
              <>{row.connect}</>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-250 flex flex-col gap-8 sm:flex-row sm:gap-0 py-10 border-b border-[var(--medium-gray)] mb-20">
        <div className="flex-1 text-sm">
          <p className="flex gap-1 mb-2">Currently {status}</p>
          <div
            onClick={() => navigate("/contact")}
            className="flex items-center gap-2 text-[var(--text-gray)] cursor-pointer"
          >
            <p>Reach out</p>
            <MoveRight size={18} />
          </div>
        </div>
        <div className="flex-1">
          <p className="text-7xl text-[var(--text-gray)] whitespace-nowrap">
            {londonTime.time}
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-250 text-end pb-22 text-xs lg:text-sm lg:pb-0 mb-5 text-[var(--text-gray)]">
        <p>@ Giuseppe Messina</p>
      </div>
    </>
  );
};
