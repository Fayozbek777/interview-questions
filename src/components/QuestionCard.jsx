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
    <div className="mb-4 overflow-hidden border border-zinc-900 bg-[#0d0d0d] group">
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

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-6 pb-6 pt-2 border-t border-zinc-900/50 bg-[#0a0a0a]">
              {/* Улучшенный текст ответа */}
              <div className="text-zinc-200 text-sm leading-relaxed font-normal whitespace-pre-line tracking-wide">
                {data.text || "Javob mavjud emas."}
              </div>

              {data.code && (
                <div className="mt-5 relative">
                  {/* Добавили метку кода для стиля */}
                  <div className="text-[10px] text-zinc-600 mb-2 font-mono uppercase tracking-widest">
                    {"// code_snippet"}
                  </div>
                  <pre className="p-4 bg-black border border-zinc-900 rounded-sm overflow-x-auto shadow-inner">
                    <code className="text-zinc-300 font-mono text-[12px] leading-relaxed">
                      {data.code}
                    </code>
                  </pre>
                </div>
              )}

              {/* Подвал карточки */}
              <div className="mt-8 flex items-center justify-between border-t border-zinc-900 pt-4 text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium">
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
