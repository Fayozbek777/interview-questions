import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiBookOpen, FiCode } from "react-icons/fi";

const QuestionCard = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Tab yoki savol o'zgarganda accordionni yopish
  useEffect(() => {
    setIsOpen(false); // Tab o'zgarganda accordionni yopish
  }, [data.uniqueId]); // ← Eng muhim qo'shimcha!

  const getLevelStyles = (level) => {
    switch (level?.toLowerCase()) {
      case "beginner":
      case "oddiy":
        return "bg-green-100 text-green-700";
      case "intermediate":
      case "o'rta":
        return "bg-yellow-100 text-yellow-700";
      case "advanced":
      case "qiyin":
        return "bg-red-100 text-red-700";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <div className="mb-4 overflow-hidden border border-slate-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors focus:outline-none"
      >
        <div className="flex items-center gap-4">
          <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl">
            <FiBookOpen size={20} />
          </div>
          <h3 className="font-bold text-slate-800 text-lg leading-tight">
            {data.title}
          </h3>
        </div>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="text-slate-400"
        >
          <FiChevronDown size={24} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-6 border-t border-slate-100 bg-slate-50">
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
                <p className="whitespace-pre-line">{data.text}</p>
              </div>

              {data.code && (
                <div className="mt-5 relative group">
                  <div className="absolute right-3 top-3 flex items-center gap-1 text-[10px] font-bold text-slate-500 uppercase tracking-widest bg-white/50 px-2 py-1 rounded">
                    <FiCode /> Code
                  </div>
                  <pre className="p-4 bg-slate-900 rounded-xl overflow-x-auto border border-slate-800 shadow-inner custom-scrollbar">
                    <code className="text-blue-300 font-mono text-sm leading-relaxed">
                      {data.code}
                    </code>
                  </pre>
                </div>
              )}

              {data.details && (
                <ul className="mt-4 space-y-2">
                  {data.details.map((detail, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-slate-500"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-6 flex items-center justify-between">
                <span
                  className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider ${getLevelStyles(
                    data.level,
                  )}`}
                >
                  {data.level || "Beginner"}
                </span>
                <span className="text-[10px] text-slate-400 font-medium">
                  ID: #{data.id}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuestionCard;
