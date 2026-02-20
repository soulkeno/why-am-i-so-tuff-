import { type ReactNode } from "react";
import Navbar from "./Navbar";
import AnimatedBackground from "./AnimatedBackground";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative min-h-screen bg-background scanlines noise">
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10 pt-16">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
