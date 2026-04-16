import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiX,
  FiCode,
  FiLayers,
  FiCheckCircle,
  FiChevronRight,
} from "react-icons/fi";
import { SiJavascript, SiReact } from "react-icons/si";
import techTasks from "../data/techData";
import { Link } from "react-router-dom";

import { BsFillLightbulbFill } from "react-icons/bs";

const Technical = () => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [filter, setFilter] = useState("All");

  const filteredTasks =
    filter === "All"
      ? techTasks
      : techTasks.filter((t) => t.category === filter);

  return (
    <div className="min-h-screen bg-[#020617] py-16 px-4 text-slate-200">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-black bg-gradient-to-r from-yellow-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Frontend Interview Hub
          </h1>
          <p className="text-slate-400 text-lg">
            Amaliy savollar va to'liq yechimlar
          </p>
        </motion.div>
        <Link to="/" className="inline-block">
          <button
            className={`px-8 py-3 relative right-75 bottom-15 rounded-2xl font-bold transition-all duration-300 transform ${"bg-slate-900 border-slate-800 hover:border-slate-600"}`}
          >
            Orqaga
          </button>
        </Link>

        {/* Filter */}
        <div className="flex justify-center gap-3 mb-10">
          {["JavaScript", "React"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-2.5 rounded-2xl border transition-all ${
                filter === cat
                  ? "bg-indigo-600 border-indigo-500 shadow-lg shadow-indigo-500/20"
                  : "bg-slate-900 border-slate-800 hover:border-slate-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Container */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredTasks.map((task) => (
              <motion.div
                layout
                key={task.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col bg-slate-900/40 border border-slate-800 rounded-[2rem] p-7 hover:border-indigo-500/40 transition-all group"
              >
                <div className="flex justify-between items-start mb-5">
                  <div
                    className={`p-3 rounded-2xl ${task.category === "JavaScript" ? "bg-yellow-500/10 text-yellow-500" : "bg-cyan-500/10 text-cyan-500"}`}
                  >
                    {task.category === "JavaScript" ? (
                      <SiJavascript size={22} />
                    ) : (
                      <SiReact size={22} />
                    )}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-tighter text-slate-500 border border-slate-800 px-2 py-1 rounded-md">
                    {task.difficulty}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-indigo-400 transition-colors">
                  {task.title}
                </h3>

                <p className="text-slate-400 text-sm mb-5 leading-relaxed">
                  {task.description}
                </p>

                {/* Static Maslahat (Har doim ko'rinib turadi) */}
                <div className="mt-auto mb-6 p-4 bg-indigo-500/5 border-l-2 border-indigo-500 rounded-r-xl">
                  <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold mb-1 uppercase">
                    <BsFillLightbulbFill /> Maslahat
                  </div>
                  <p className="text-slate-400 text-xs italic leading-snug">
                    {task.hint}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedTask(task)}
                  className="flex items-center justify-center gap-2 w-full py-4 bg-indigo-600/10 hover:bg-indigo-600 text-indigo-400 hover:text-white rounded-2xl font-bold transition-all"
                >
                  <FiCode /> To'liq javobni ko'rish
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedTask && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedTask(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0b1120] border border-slate-800 rounded-[2.5rem] w-full max-w-3xl overflow-hidden shadow-2xl"
            >
              <div className="p-8 border-b border-slate-800 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-indigo-600/20 text-indigo-400 rounded-2xl">
                    <FiCheckCircle size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    {selectedTask.title}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedTask(null)}
                  className="text-slate-500 hover:text-white transition-colors"
                >
                  <FiX size={28} />
                </button>
              </div>

              <div className="p-8 max-h-[70vh] overflow-y-auto">
                <div className="mb-8">
                  <h4 className="text-indigo-400 font-bold mb-3 flex items-center gap-2">
                    <FiLayers size={18} /> Topshiriq sharti:
                  </h4>
                  <p className="text-slate-300 bg-slate-900/50 p-5 rounded-2xl border border-slate-800">
                    {selectedTask.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-emerald-400 font-bold mb-3 flex items-center gap-2">
                    <FiCode size={18} /> To'liq kodli yechim:
                  </h4>
                  <div className="relative group">
                    <pre className="bg-slate-950 p-6 rounded-3xl overflow-x-auto text-sm text-emerald-400 font-mono border border-slate-800 leading-relaxed">
                      <code>{selectedTask.solution}</code>
                    </pre>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-slate-900/30 flex justify-end">
                <button
                  onClick={() => setSelectedTask(null)}
                  className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold transition-all"
                >
                  Yopish
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Technical;
