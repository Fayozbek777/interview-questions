import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 border border-zinc-500 rounded-full pointer-events-none z-[9999] hidden md:block"
      animate={{ x: mousePos.x - 12, y: mousePos.y - 12 }}
      transition={{ type: "spring", damping: 30, stiffness: 250, mass: 0.5 }}
    />
  );
};

export default CustomCursor;
