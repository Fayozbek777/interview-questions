import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Link } from "react-router-dom";
import QuestionCard from "../../components/QuestionCard";
import {
  htmlQuestions,
  cssQuestions,
  jsQuestions,
  reactQuestions,
} from "../../data/Chapter/Front/questions";

const Frontend = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("HTML");
  const [parent] = useAutoAnimate();

  const currentCategoryData = useMemo(() => {
    const map = {
      HTML: htmlQuestions,
      CSS: cssQuestions,
      JavaScript: jsQuestions,
      React: reactQuestions,
    };
    return map[activeTab] || [];
  }, [activeTab]);

  const filteredData = useMemo(() => {
    return currentCategoryData
      .map((q, index) => ({
        ...q,
        title: q.question || q.title || `Savol ${index + 1}`,
        text: q.answer || q.text || "",
        uniqueId: `${activeTab.toLowerCase()}-${q.id || index}`, // Гарантированный ID
      }))
      .filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.text.toLowerCase().includes(searchTerm.toLowerCase()),
      );
  }, [currentCategoryData, searchTerm, activeTab]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-16 px-4 font-sans text-zinc-400">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <div className="w-8 h-[1px] bg-zinc-800 mx-auto mb-6"></div>
          <h1 className="text-2xl font-light text-zinc-200 tracking-tighter uppercase mb-8">
            Frontend Archive
          </h1>

          <nav className="flex justify-center gap-6 mb-12">
            {["HTML", "CSS", "JavaScript", "React"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`text-[10px] tracking-[0.2em] uppercase pb-1 border-b transition-all ${
                  activeTab === cat
                    ? "border-zinc-400 text-zinc-100"
                    : "border-transparent text-zinc-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </nav>

          <input
            type="text"
            placeholder="SEARCH_IN_ARCHIVE..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent border-b border-zinc-900 py-2 text-[10px] tracking-widest text-zinc-400 focus:outline-none focus:border-zinc-700 transition-colors"
          />
        </header>

        <section ref={parent} className="space-y-4">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <QuestionCard key={item.uniqueId} data={item} />
            ))
          ) : (
            <div className="text-center py-20 border border-zinc-900 bg-[#0d0d0d] text-[10px] uppercase tracking-widest text-zinc-800">
              No data found in this sector
            </div>
          )}
        </section>

        <div className="mt-16 text-center">
          <Link
            to="/"
            className="text-[9px] uppercase tracking-[0.4em] text-zinc-800 hover:text-zinc-500 transition-colors"
          >
            [ Back to main terminal ]
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
