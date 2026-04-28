import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Link } from "react-router-dom";

import QuestionCard from "../../components/QuestionCard";

import { pythonJuniorQuestions } from "../../data/Chapter/Back/pythonJunior";
import { pythonAdvancedQuestions } from "../../data/Chapter/Back/pythonAdvanced";
const Backend = () => {
  const [activeLevel, setActiveLevel] = useState("Junior");
  const [searchTerm, setSearchTerm] = useState("");
  const [parent] = useAutoAnimate({ duration: 300 });

  const levels = ["Junior", "Advanced"];

  const currentLevelData = useMemo(() => {
    return activeLevel === "Junior"
      ? pythonJuniorQuestions || []
      : pythonAdvancedQuestions || [];
  }, [activeLevel]);

  const filteredData = useMemo(() => {
    return currentLevelData
      .map((q, index) => ({
        ...q,
        title: q.question || q.title || `Python Question ${index + 1}`,
        text: q.answer || q.text || "",
        uniqueId: `py-${activeLevel.toLowerCase()}-${q.id || index}`,
      }))
      .filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.text.toLowerCase().includes(searchTerm.toLowerCase()),
      );
  }, [currentLevelData, searchTerm, activeLevel]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-16 px-4 font-sans text-zinc-400 selection:bg-zinc-800">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="w-8 h-[1px] bg-zinc-800 mx-auto mb-6"></div>
          <h1 className="text-2xl font-light text-zinc-200 tracking-tighter uppercase mb-2">
            Python Archive
          </h1>
          <p className="text-zinc-600 text-[10px] uppercase tracking-[0.4em]">
            Server Side Archive
          </p>
        </header>

        {/* Level Switcher (Tabs) */}
        <nav className="flex justify-center gap-8 mb-10 border-b border-zinc-900 pb-4">
          {levels.map((lvl) => (
            <button
              key={lvl}
              onClick={() => {
                setActiveLevel(lvl);
                setSearchTerm(""); // Очистка поиска при смене уровня
              }}
              className={`text-[10px] tracking-[0.3em] uppercase transition-all relative pb-2 ${
                activeLevel === lvl
                  ? "text-zinc-100"
                  : "text-zinc-600 hover:text-zinc-400"
              }`}
            >
              {lvl}
              {activeLevel === lvl && (
                <motion.div
                  layoutId="activeUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-zinc-400"
                />
              )}
            </button>
          ))}
        </nav>

        {/* Search Bar */}
        <div className="mb-10">
          <input
            type="text"
            placeholder="SEARCH_IN_PY_ARCHIVE..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent border-b border-zinc-900 py-2 text-[10px] tracking-widest text-zinc-400 focus:outline-none focus:border-zinc-700 transition-colors"
          />
        </div>

        {/* Questions List */}
        <section ref={parent} className="space-y-4">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <QuestionCard key={item.uniqueId} data={item} />
            ))
          ) : (
            <div className="text-center py-20 border border-zinc-900 bg-[#0d0d0d] rounded-sm">
              <p className="text-zinc-800 text-[10px] tracking-[0.3em] uppercase">
                Empty Sector: {activeLevel}
              </p>
            </div>
          )}
        </section>

        {/* Return Link */}
        <footer className="mt-20 text-center">
          <Link
            to="/"
            className="text-[9px] uppercase tracking-[0.4em] text-zinc-800 hover:text-zinc-500 transition-colors"
          >
            [ Close Connection ]
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default Backend;
