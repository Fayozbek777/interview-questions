import { useState, useEffect, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

import QuestionCard from "../components/QuestionCard";

import {
  htmlQuestions,
  cssQuestions,
  jsQuestions,
  reactQuestions,
} from "../data/questions";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("HTML");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Tanlangan kategoriya ma'lumotlari
  const currentCategoryData = useMemo(() => {
    switch (activeTab) {
      case "HTML":
        return htmlQuestions || [];
      case "CSS":
        return cssQuestions || [];
      case "JavaScript":
        return jsQuestions || [];
      case "React":
        return reactQuestions || [];
      default:
        return [];
    }
  }, [activeTab]);

  // Filtrlangan va formatlangan savollar
  const filteredData = useMemo(() => {
    const search = searchTerm.toLowerCase().trim();

    return currentCategoryData
      .map((q, index) => ({
        ...q,
        category: activeTab,
        title: q.question || q.title || `Savol ${index + 1}`,
        text: q.answer || q.text || "",
        // Har bir tab uchun mutlaqo noyob ID
        uniqueId: `${activeTab.toLowerCase()}-${q.id ?? index}`,
      }))
      .filter((item) => {
        if (!search) return true;
        return (
          item.title.toLowerCase().includes(search) ||
          item.text.toLowerCase().includes(search)
        );
      });
  }, [currentCategoryData, searchTerm, activeTab]);

  const categories = ["HTML", "CSS", "JavaScript", "React"];

  const totalQuestions =
    (htmlQuestions?.length || 0) +
    (cssQuestions?.length || 0) +
    (jsQuestions?.length || 0) +
    (reactQuestions?.length || 0);

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 font-sans selection:bg-indigo-100">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12" data-aos="zoom-in">
          <h1 className="text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Frontend <span className="text-indigo-600 italic">Interview</span>
          </h1>
          <p className="text-slate-500 text-lg font-medium">
            Juniorlar uchun professional savol-javoblar
          </p>

          <div className="mt-6 flex justify-center gap-6 text-sm font-bold text-slate-400">
            <div className="flex flex-col">
              <span className="text-slate-900 text-xl">{totalQuestions}</span>
              <span>Jami</span>
            </div>
            <div className="w-px h-10 bg-slate-200"></div>
            <div className="flex flex-col text-indigo-600">
              <span className="text-xl">{filteredData.length}</span>
              <span>{activeTab}</span>
            </div>
          </div>

          <Link to="/technical" className="inline-block">
            <button
              className={`px-8 py-3 mt-15 rounded-2xl font-bold transition-all duration-300 transform ${"bg-indigo-600 text-white shadow-xl shadow-indigo-200 -translate-y-1"}`}
            >
              Texnik Interview
            </button>
          </Link>
        </header>
        <nav
          className="flex flex-wrap justify-center gap-3 mb-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveTab(cat);
                setSearchTerm("");
              }}
              className={`px-8 py-3 rounded-2xl font-bold transition-all duration-300 transform ${
                activeTab === cat
                  ? "bg-indigo-600 text-white shadow-xl shadow-indigo-200 -translate-y-1"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-indigo-300 hover:shadow-md"
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* Savollar */}
        <section className="grid gap-6" data-aos="fade-up" data-aos-delay="300">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <QuestionCard key={item.uniqueId} data={item} />
            ))
          ) : (
            <div className="text-center py-20 bg-white rounded-[2.5rem] border-2 border-dashed border-slate-200">
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-slate-400 text-lg italic">
                {searchTerm
                  ? `"${searchTerm}" bo'yicha hech narsa topilmadi`
                  : `${activeTab} bo'limida savollar yuklanmoqda...`}
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default HomePage;
