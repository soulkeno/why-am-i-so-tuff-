import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Terminal, Crosshair } from "lucide-react";
import Layout from "@/components/Layout";
import TiltCard from "@/components/TiltCard";

const CODE = `(() => {
  const target = "join queue";
  let scheduled = false;
  const find = () =>
    [...document.querySelectorAll("button,[role='button']")]
      .filter(el => el.textContent?.toLowerCase().includes(target));
  const run = () => {
    scheduled = false;
    const buttons = find();
    if (!buttons.length) return;
    buttons.forEach(btn => btn.click());
    console.log("clicked", buttons.length, "button(s)", new Date().toLocaleTimeString());
  };
  const schedule = () => {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(run);
    }
  };
  const observer = new MutationObserver(schedule);
  observer.observe(document.body, { childList: true, subtree: true });
  document.addEventListener("visibilitychange", schedule);
  window.addEventListener("focus", schedule);
  console.log("successfully injected keno's queue sniper >_<");
  run();
})();`;

const steps = [
  { step: 1, text: "Open the MCTiers website and navigate to the queue page" },
  { step: 2, text: "Open DevTools with F12 or Ctrl + Shift + J" },
  { step: 3, text: "Go to the Console tab" },
  { step: 4, text: "Paste the code below and press Enter" },
];

const MCTiers = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="flex flex-col items-center px-6 pb-12 pt-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary"
        >
          <Crosshair className="h-6 w-6" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-black tracking-tight sm:text-5xl"
        >
          MCTiers <span className="text-gradient-purple">Queue Sniper</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-3 max-w-lg text-muted-foreground"
        >
          Automatically clicks "Join Queue" the instant it appears — giving you the fastest entry into the waitlist.
        </motion.p>
      </section>

      <div className="mx-auto max-w-3xl space-y-6 px-6 pb-24">
        {/* What it does */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <TiltCard className="p-6">
            <h2 className="mb-2 text-lg font-semibold text-foreground">What does it do?</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              This script watches for the "Join Queue" button on the MCTiers page and clicks it automatically
              the moment it appears. It uses a MutationObserver to detect DOM changes in real-time, so you'll
              never miss your spot in the queue.
            </p>
          </TiltCard>
        </motion.div>

        {/* Setup Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <TiltCard className="p-6">
            <h2 className="mb-4 text-lg font-semibold text-foreground">Setup</h2>
            <div className="space-y-3">
              {steps.map((s) => (
                <div key={s.step} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary/10 text-xs font-bold text-primary">
                    {s.step}
                  </span>
                  <p className="text-sm text-muted-foreground">{s.text}</p>
                </div>
              ))}
            </div>
          </TiltCard>
        </motion.div>

        {/* Code Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <TiltCard className="p-6">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-primary" />
                <h2 className="text-lg font-semibold text-foreground">Code</h2>
              </div>
              <button
                onClick={handleCopy}
                className="inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-secondary px-3 text-xs font-medium text-secondary-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-green-400" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
            <div className="overflow-x-auto rounded-md border border-border bg-background p-4">
              <pre className="text-xs leading-relaxed text-muted-foreground">
                <code>{CODE}</code>
              </pre>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </Layout>
  );
};

export default MCTiers;
