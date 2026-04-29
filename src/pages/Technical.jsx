import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";

import Technical from "../data/Chapter/Front/techData";
import Glav from "./Glav";
import Frontend from "../pages/Chapters/Frontend";
import Backend from "../pages/Chapters/Backend";
import CustomCursor from "../components/CostumCursor";
import Preview from "../components/Preview";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Glav />} />
        <Route path="/frontendquestions" element={<Frontend />} />
        <Route path="/backendquestions" element={<Backend />} />
        <Route path="/technical" element={<Technical />} />
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
    <div className="min-h-screen bg-[#0a0a0a]">
      <AnimatePresence mode="wait">
        {showPreview ? (
          <Preview key="preview" onComplete={() => setShowPreview(false)} />
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <CustomCursor />
            <Router>
              <AnimatedRoutes />
            </Router>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
