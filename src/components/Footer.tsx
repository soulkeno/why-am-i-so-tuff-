import { Terminal } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-border/30">
      <div className="glow-divider" />
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="flex items-center gap-2 text-[10px] font-medium text-muted-foreground">
          <Terminal className="h-3 w-3 text-primary" />
          © 2025 Astrality
        </span>
        <span className="text-[9px] tracking-widest text-muted-foreground/40 uppercase">
          built different
        </span>
      </div>
    </footer>
  );
};

export default Footer;
