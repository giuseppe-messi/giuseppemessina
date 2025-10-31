import React from 'react';
import { motion } from 'motion/react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="md:text-6xl font-semibold leading-tight tracking-tight"
      >
        <motion.span
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className=" bg-[linear-gradient(95deg,_#f6f6f6_0%,_#f6f6f6_35%,_#9a9a9a_70%,_#3a3a3a_100%)] bg-clip-text text-transparent"
        >
          Giuseppe Messina
        </motion.span>

        <div className="flex justify-center gap-3 flex-wrap">
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="bg-[linear-gradient(95deg,_#f6f6f6_0%,_#f6f6f6_35%,_#9a9a9a_70%,_#3a3a3a_100%)] bg-clip-text text-transparent"
          >
            Full Stack Typescript Developer
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            className="bg-[linear-gradient(95deg,_#f6f6f6_0%,_#f6f6f6_35%,_#9a9a9a_70%,_#3a3a3a_100%)] bg-clip-text text-transparent"
          >
            Frontend-leaning
          </motion.span>
        </div>
      </motion.h1>
    </div>
  );
};

export default Home;
