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
  console.log("successfully injected queue sniper");
  run();
})();`;

const steps = [
  { step: 1, text: "Open the MCTiers website and navigate to the queue page" },
  { step: 2, text: "Open DevTools with F12 or Ctrl + Shift + J" },
  { step: 3, text: "Go to the Console tab" },
  { step: 4, text: "Paste the code below and press Enter" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const MCTiers = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Layout>
      <motion.section
        className="flex flex-col items-start px-6 pb-10 pt-28"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="mx-auto w-full max-w-3xl">
          <motion.div
            variants={item}
            className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary"
          >
            <Crosshair className="h-5 w-5" />
          </motion.div>
          <motion.h1
            variants={item}
            className="text-3xl font-black tracking-tight sm:text-4xl"
          >
            MCTiers <span className="text-gradient-blue">Queue Sniper</span>
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-3 max-w-lg text-sm text-muted-foreground"
          >
            Automatically clicks "Join Queue" the instant it shows up so you get into the waitlist as fast as possible.
          </motion.p>
        </div>
      </motion.section>

      <motion.div
        className="mx-auto max-w-3xl space-y-4 px-6 pb-24"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div variants={item}>
          <TiltCard className="p-5">
            <h2 className="mb-2 text-sm font-semibold text-foreground">What does it do?</h2>
            <p className="text-xs leading-relaxed text-muted-foreground">
              This script watches for the "Join Queue" button on the MCTiers page and clicks it automatically
              the moment it appears. It uses a MutationObserver to detect DOM changes in real time, so you
              never miss your spot in the queue.
            </p>
          </TiltCard>
        </motion.div>

        <motion.div variants={item}>
          <TiltCard className="p-5">
            <h2 className="mb-3 text-sm font-semibold text-foreground">Setup</h2>
            <div className="space-y-2.5">
              {steps.map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-primary/10 text-[10px] font-bold text-primary">
                    {s.step}
                  </span>
                  <p className="text-xs text-muted-foreground">{s.text}</p>
                </motion.div>
              ))}
            </div>
          </TiltCard>
        </motion.div>

        <motion.div variants={item}>
          <TiltCard className="p-5">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal className="h-3.5 w-3.5 text-primary" />
                <h2 className="text-sm font-semibold text-foreground">Code</h2>
              </div>
              <motion.button
                onClick={handleCopy}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="inline-flex h-7 items-center gap-1.5 rounded border border-border bg-secondary px-2.5 text-[10px] font-medium text-secondary-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <motion.span
                  key={copied ? "check" : "copy"}
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 20 }}
                >
                  {copied ? <Check className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
                </motion.span>
                {copied ? "Copied" : "Copy"}
              </motion.button>
            </div>
            <div className="overflow-x-auto rounded border border-border bg-background/50 p-4">
              <pre className="text-[10px] leading-relaxed text-muted-foreground" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                <code>{CODE}</code>
              </pre>
            </div>
          </TiltCard>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default MCTiers;
