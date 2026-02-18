import { motion } from "framer-motion";

/** Floating decorative glyphs scattered in the background */
const Decorations = () => {
  const glyphs = [
    { char: "//", x: "8%", y: "18%", delay: 0 },
    { char: "{}", x: "92%", y: "25%", delay: 0.5 },
    { char: "</>", x: "85%", y: "65%", delay: 1.2 },
    { char: ">>", x: "5%", y: "72%", delay: 0.8 },
    { char: "/*", x: "15%", y: "45%", delay: 1.5 },
    { char: "=>", x: "90%", y: "85%", delay: 0.3 },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 z-[2] overflow-hidden">
      {glyphs.map((g, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.08, 0.04, 0.08, 0] }}
          transition={{
            duration: 8,
            delay: g.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute text-xs text-primary select-none"
          style={{
            left: g.x,
            top: g.y,
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          {g.char}
        </motion.span>
      ))}

      {/* Side accent lines */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        className="absolute left-6 top-20 h-32 w-[1px] origin-top"
        style={{ background: "linear-gradient(180deg, hsl(265 90% 60% / 0.2), transparent)" }}
      />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
        className="absolute right-6 top-20 h-32 w-[1px] origin-top"
        style={{ background: "linear-gradient(180deg, hsl(265 90% 60% / 0.15), transparent)" }}
      />
    </div>
  );
};

export default Decorations;
