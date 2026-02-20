import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Terminal, User, Mail, Lock, Check } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: User,
    title: "Pick a username",
    description: "Pick something unique and memorable",
  },
  {
    id: 2,
    icon: Mail,
    title: "Verify your email",
    description: "We'll use this to verify your account",
  },
  {
    id: 3,
    icon: Lock,
    title: "Create a password",
    description: "Make sure it's strong and easy to remember",
  },
];

const Register = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const goNext = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-foreground mb-1.5">Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
              />
            </div>
            <button
              onClick={goNext}
              className="w-full rounded-md bg-muted border border-border py-2.5 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              Continue
            </button>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-foreground mb-1.5">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
              />
            </div>
            <button
              onClick={goNext}
              className="w-full rounded-md bg-muted border border-border py-2.5 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              Continue
            </button>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-foreground mb-1.5">Password</label>
              <input
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-muted border border-border py-2.5 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              Create Account
            </button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left sidebar - Steps */}
      <div className="hidden md:flex w-[240px] flex-col border-r border-border p-6">
        <div className="flex items-center gap-2 mb-10">
          <Terminal className="h-4 w-4 text-foreground" />
          <span className="text-sm font-bold text-foreground">Astrality</span>
        </div>

        <div className="space-y-2">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => setCurrentStep(step.id)}
              className={`w-full text-left rounded-md p-3 transition-colors ${
                currentStep === step.id
                  ? "bg-card border border-border"
                  : "hover:bg-card/50"
              }`}
            >
              <div className="flex items-start gap-2.5">
                {currentStep > step.id ? (
                  <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                ) : (
                  <step.icon className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                )}
                <div>
                  <p className={`text-xs font-medium ${currentStep === step.id ? "text-foreground" : "text-muted-foreground"}`}>
                    {step.title}
                  </p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{step.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Announcement card */}
        <div className="mt-auto">
          <div className="rounded-md border border-border bg-card p-3">
            <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-2">
              ★ Announcement
            </p>
            <p className="text-[11px] leading-relaxed text-muted-foreground">
              More tools will be released later on, we'll be working hard until the website is perfect.
            </p>
            <div className="flex items-center gap-2 mt-3">
              <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                <Terminal className="h-2.5 w-2.5 text-primary" />
              </div>
              <div>
                <p className="text-[10px] font-medium text-foreground">keno</p>
                <p className="text-[9px] text-muted-foreground uppercase">Owner</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-4">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-sm"
        >
          <div className="flex flex-col items-center mb-6">
            {(() => {
              const StepIcon = steps[currentStep - 1].icon;
              return <StepIcon className="h-8 w-8 text-muted-foreground mb-3" />;
            })()}
            <h1 className="text-lg font-bold text-foreground">
              {steps[currentStep - 1].title}
            </h1>
            <p className="text-xs text-muted-foreground mt-1">
              {steps[currentStep - 1].description}
            </p>
          </div>

          {renderStepContent()}

          <p className="text-center text-xs text-muted-foreground mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-foreground font-medium hover:underline">
              Log in
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
