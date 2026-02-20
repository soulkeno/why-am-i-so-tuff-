import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Terminal, LogIn, Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-sm"
      >
        <div className="rounded-lg border border-border bg-card p-8">
          {/* Logo */}
          <div className="flex flex-col items-center mb-8">
            <Terminal className="h-8 w-8 text-foreground mb-3" />
            <h1 className="text-xl font-bold text-foreground">Login</h1>
            <p className="text-xs text-muted-foreground mt-1">
              Enter your credentials to access your account
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <input
                type="email"
                placeholder="Email or Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
              />
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>

            <div className="flex justify-end">
              <button type="button" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Forgot your password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 rounded-md bg-card border border-border py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors"
            >
              <LogIn className="h-4 w-4" />
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-border" />
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">or continue with</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Social */}
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 rounded-md border border-border bg-card py-2.5 text-xs font-medium text-foreground hover:bg-muted transition-colors">
              Discord
            </button>
            <button className="flex items-center justify-center gap-2 rounded-md border border-border bg-card py-2.5 text-xs font-medium text-foreground hover:bg-muted transition-colors">
              Google
            </button>
          </div>

          {/* Register link */}
          <p className="text-center text-xs text-muted-foreground mt-6">
            Don't have an account?{" "}
            <Link to="/register" className="text-foreground hover:underline">
              Register
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
