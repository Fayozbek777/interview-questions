import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiBookOpen } from "react-icons/fi";

const QuestionCard = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [data?.uniqueId]);

  if (!data) return null;

  return (
    <div className="mb-4 overflow-hidden border border-zinc-900 bg-[#0d0d0d] group rounded-sm">
      {/* HEADER */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
      >
        <div className="flex items-center gap-4">
          <FiBookOpen
            className="text-zinc-700 group-hover:text-zinc-500 transition-colors"
            size={16}
          />
          <h3 className="font-light text-zinc-300 text-sm tracking-wide group-hover:text-zinc-100 transition-colors uppercase">
            {data.title || "Savol nomi yo'q"}
          </h3>
        </div>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-zinc-800"
        >
          <FiChevronDown size={18} />
        </motion.div>
      </button>

      {/* CONTENT */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 pt-2 border-t border-zinc-900/50 bg-[#0a0a0a] space-y-4">
              {/* ANSWER */}
              <div className="text-zinc-200 text-sm leading-relaxed whitespace-pre-line">
                {data.text || "Javob mavjud emas."}
              </div>

              {/* 🔥 REAL LIFE */}
              {data.realLife && (
                <div className="border-l border-yellow-700 pl-4 text-xs text-yellow-500 bg-yellow-900/10 py-2 rounded-sm">
                  💡 {data.realLife}
                </div>
              )}

              {/* 🔥 DIAGRAM */}
              {data.diagram && (
                <div>
                  <div className="text-[10px] text-zinc-600 mb-2 uppercase tracking-widest">
                    diagram
                  </div>
                  <pre className="p-4 bg-black border border-zinc-900 rounded-sm overflow-x-auto">
                    <code className="text-green-400 font-mono text-xs whitespace-pre">
                      {data.diagram}
                    </code>
                  </pre>
                </div>
              )}

              {/* CODE */}
              {data.code && (
                <div>
                  <div className="text-[10px] text-zinc-600 mb-2 uppercase tracking-widest">
                    code
                  </div>
                  <pre className="p-4 bg-black border border-zinc-900 rounded-sm overflow-x-auto">
                    <code className="text-zinc-300 font-mono text-xs whitespace-pre">
                      {data.code}
                    </code>
                  </pre>
                </div>
              )}

              {/* FOOTER */}
              <div className="mt-6 flex items-center justify-between border-t border-zinc-900 pt-4 text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                <span className="bg-zinc-900/50 border border-zinc-800 px-2 py-1 text-zinc-400">
                  {data.level || "Standard"}
                </span>
                <span className="font-mono opacity-40">
                  REF_ID: {data.id || "N/A"}
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
