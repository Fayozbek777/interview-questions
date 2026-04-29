import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preview = ({ onComplete }) => {
  useEffect(() => {
    // Через 2.5 секунды завершаем превью
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-[#0a0a0a] flex flex-col items-center justify-center z-[10000]">
      <motion.div
        initial={{ opacity: 0, letterSpacing: "0.2em" }}
        animate={{ opacity: 1, letterSpacing: "0.5em" }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="text-center"
      >
        <h1 className="text-zinc-100 text-xl md:text-3xl font-light uppercase tracking-[0.5em]">
          Interview Questions
        </h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.5, duration: 1 }}
          className="h-[1px] bg-zinc-800 mt-4"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-zinc-600 text-[10px] uppercase mt-4 tracking-[0.3em]"
        >
          Accessing System Archive...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Preview;
