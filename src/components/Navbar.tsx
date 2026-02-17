import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="text-base font-bold tracking-tight text-foreground transition-colors hover:text-primary">
          keno<span className="text-gradient-purple">.lol</span>
        </Link>
        <div className="flex items-center gap-5">
          {[
            { to: "/", label: "Home" },
            { to: "/mctiers", label: "MCTiers" },
            { to: "/video-hoster", label: "Video Hoster" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "text-xs font-medium tracking-wide transition-colors hover:text-foreground",
                location.pathname === link.to ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
