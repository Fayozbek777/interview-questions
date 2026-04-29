import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Lenis from "lenis";

// Импорт страниц
import Technical from "./pages/Technical";
import Glav from "./pages/Glav";
import Frontend from "./pages/Chapters/Frontend";
import Backend from "./pages/Chapters/Backend";

// Импорт компонентов
import CustomCursor from "./components/CostumCursor"; // Проверь опечатку в названии (Costum vs Custom)
import Preview from "./components/Preview";

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Glav />
            </PageWrapper>
          }
        />
        <Route
          path="/frontendquestions"
          element={
            <PageWrapper>
              <Frontend />
            </PageWrapper>
          }
        />
        <Route
          path="/backendquestions"
          element={
            <PageWrapper>
              <Backend />
            </PageWrapper>
          }
        />
        <Route
          path="/technical"
          element={
            <PageWrapper>
              <Technical />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [showPreview, setShowPreview] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-400 selection:bg-zinc-800">
      <AnimatePresence mode="wait">
        {showPreview ? (
          /* 2. Показываем компонент Preview и передаем функцию закрытия */
          <Preview
            key="preview-screen"
            onComplete={() => setShowPreview(false)}
          />
        ) : (
          <motion.div
            key="main-app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Router>
              <CustomCursor />
              <AnimatedRoutes />
            </Router>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
