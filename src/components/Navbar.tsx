import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="text-lg font-bold tracking-tight text-foreground transition-colors hover:text-primary">
          keno<span className="text-gradient-purple">.lol</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-foreground",
              location.pathname === "/" ? "text-foreground" : "text-muted-foreground"
            )}
          >
            Home
          </Link>
          <Link
            to="/mctiers"
            className={cn(
              "text-sm font-medium transition-colors hover:text-foreground",
              location.pathname === "/mctiers" ? "text-foreground" : "text-muted-foreground"
            )}
          >
            MCTiers
          </Link>
          <Link
            to="/video-hoster"
            className={cn(
              "text-sm font-medium transition-colors hover:text-foreground",
              location.pathname === "/video-hoster" ? "text-foreground" : "text-muted-foreground"
            )}
          >
            Video Hoster
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
