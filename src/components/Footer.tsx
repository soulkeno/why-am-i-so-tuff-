import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-border/30">
      <div className="glow-divider" />
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] font-medium text-muted-foreground"
        >
          © 2025 keno<span className="text-gradient-purple">.lol</span>
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[9px] tracking-widest text-muted-foreground/40 uppercase"
        >
          built different
        </motion.span>
      </div>
    </footer>
  );
};

export default Footer;
