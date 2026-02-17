import { type ReactNode } from "react";
import Navbar from "./Navbar";
import AnimatedBackground from "./AnimatedBackground";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative min-h-screen bg-background bg-grid">
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10 pt-16">{children}</main>
    </div>
  );
};

export default Layout;
