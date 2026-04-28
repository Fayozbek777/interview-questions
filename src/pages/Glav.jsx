import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Glav = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-4 font-sans selection:bg-zinc-800"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="mb-16 text-center" variants={itemVariants}>
        <motion.div
          className="h-[1px] bg-zinc-800 mx-auto mb-6"
          initial={{ width: 0 }}
          animate={{ width: 40 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <h2 className="text-zinc-600 text-[10px] uppercase tracking-[0.5em] font-medium">
          Knowledge Base
        </h2>
      </motion.div>
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
        <motion.div variants={itemVariants}>
          <Link
            to="/frontendquestions"
            className="group flex flex-col items-center"
          >
            <span className="text-zinc-700 text-[9px] mb-4 group-hover:text-zinc-500 transition-colors uppercase tracking-[0.3em]">
              Section 01
            </span>
            <h1 className="text-4xl md:text-5xl font-light text-zinc-300 group-hover:text-white transition-all duration-500 tracking-tighter">
              Frontend
            </h1>
            <div className="mt-4 h-[1px] bg-zinc-800 w-8 group-hover:w-full group-hover:bg-zinc-400 transition-all duration-700"></div>
          </Link>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="hidden md:block w-[1px] h-20 bg-zinc-900"
        />
        <motion.div variants={itemVariants}>
          <Link
            to="/backendquestions"
            className="group flex flex-col items-center"
          >
            <span className="text-zinc-700 text-[9px] mb-4 group-hover:text-zinc-500 transition-colors uppercase tracking-[0.3em]">
              Section 02
            </span>
            <h1 className="text-4xl md:text-5xl font-light text-zinc-300 group-hover:text-white transition-all duration-500 tracking-tighter">
              Backend
            </h1>
            <div className="mt-4 h-[1px] bg-zinc-800 w-8 group-hover:w-full group-hover:bg-zinc-400 transition-all duration-700"></div>
          </Link>
        </motion.div>
      </div>
      <motion.footer className="absolute bottom-12" variants={itemVariants}>
        <p className="text-zinc-800 text-[9px] uppercase tracking-[0.3em] hover:text-zinc-700 transition-colors cursor-default">
          Encrypted Access // v.2.0.4
        </p>
      </motion.footer>
    </motion.div>
  );
};

export default Glav;
