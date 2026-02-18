import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 600);
    }, 2200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="relative flex flex-col items-center gap-6">
            {/* Glow behind logo */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.3 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute w-64 h-64 rounded-full blur-[80px]"
              style={{ background: "hsl(265 90% 60%)" }}
            />

            {/* Logo text */}
            <motion.h1
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="relative text-5xl font-bold tracking-tight text-foreground"
            >
              keno<span className="text-gradient-purple">.lol</span>
            </motion.h1>

            {/* Subtle underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              className="h-[2px] w-24 rounded-full bg-primary/60"
            />

            {/* Loading dots */}
            <div className="flex gap-1.5 mt-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0.2 }}
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 1, delay: 1 + i * 0.15, repeat: Infinity }}
                  className="w-1.5 h-1.5 rounded-full bg-primary"
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
