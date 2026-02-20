import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/mctiers", label: "MCTiers" },
    { to: "/video-hoster", label: "Video Hoster" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 text-base font-bold tracking-tight text-foreground transition-colors hover:text-primary">
          <Terminal className="h-4 w-4 text-primary" />
          <span>Astrality</span>
        </Link>
        <div className="flex items-center gap-6">
          {links.map((link, i) => (
            <motion.div
              key={link.to}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
            >
              <Link
                to={link.to}
                className={cn(
                  "relative text-xs font-medium tracking-wide transition-colors hover:text-foreground",
                  location.pathname === link.to ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {link.label}
                {location.pathname === link.to && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-[18px] left-0 right-0 h-[1px] bg-primary"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
          <div className="flex items-center gap-3 ml-4 border-l border-border/40 pl-4">
            <Link
              to="/login"
              className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-xs font-medium text-foreground bg-primary/10 border border-primary/30 rounded-md px-3 py-1.5 transition-colors hover:bg-primary/20"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
