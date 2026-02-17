import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Crosshair, Video, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import TiltCard from "@/components/TiltCard";

const CODE_PREVIEW = `(() => {
  const target = "join queue";
  let scheduled = false;
  const find = () =>
    [...document.querySelectorAll(
      "button,[role='button']"
    )].filter(el =>
      el.textContent?.toLowerCase()
        .includes(target)
    );
  const run = () => {
    scheduled = false;
    const buttons = find();
    if (!buttons.length) return;
    buttons.forEach(btn => btn.click());
  };
  const observer =
    new MutationObserver(schedule);
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
})();`;

const tools = [
  {
    icon: Crosshair,
    title: "MCTiers Sniper",
    description: 'Clicks "Join Queue" as fast as it\'ll go for you to join the waitlist queue.',
    path: "/mctiers",
  },
  {
    icon: Video,
    title: "Video Hoster",
    description: "Host videos for FREE and send them in Discord with just a link, avoiding the file too large error.",
    path: "/video-hoster",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Index = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      {/* Hero */}
      <section className="flex min-h-[75vh] items-center px-6">
        <div className="mx-auto flex w-full max-w-6xl items-center gap-12">
          {/* Left - Text */}
          <motion.div
            className="flex-1"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div
              variants={item}
              className="mb-6 inline-block rounded-md border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary"
            >
              Tools
            </motion.div>
            <motion.h1
              variants={item}
              className="text-4xl font-black leading-tight tracking-tight sm:text-6xl"
            >
              Your favorite{" "}
              <span className="text-gradient-purple">tools</span>
              <br />
              in one place
            </motion.h1>
            <motion.p
              variants={item}
              className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground"
            >
              A collection of free, lightweight utilities designed with speed and simplicity in mind.
            </motion.p>
            <motion.div variants={item}>
              <motion.a
                href="#tools"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="mt-8 inline-flex h-9 items-center gap-2 rounded-md border border-border bg-secondary px-5 text-xs font-medium text-foreground transition-colors hover:bg-muted"
              >
                ▶ Browse Tools
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right - Code Preview */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotate: 6 }}
            animate={{ opacity: 1, x: 0, rotate: 3 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden flex-shrink-0 lg:block"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="w-[380px] overflow-hidden rounded-xl border border-border/60 bg-card shadow-2xl"
              style={{
                transform: "rotate(3deg)",
                boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.5), 0 0 30px -10px hsl(265 90% 60% / 0.1)",
              }}
            >
              {/* Window dots */}
              <div className="flex items-center gap-1.5 border-b border-border/40 px-4 py-2.5">
                <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
                <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
                <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
                <span className="ml-2 text-[9px] text-muted-foreground/50">sniper.js</span>
              </div>
              <div className="p-4">
                <pre
                  className="text-[10px] leading-[1.6] text-muted-foreground/80"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  <code>{CODE_PREVIEW}</code>
                </pre>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tools Grid */}
      <section id="tools" className="mx-auto max-w-6xl px-6 pb-32">
        <motion.h2
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-6 text-xs font-bold uppercase tracking-widest text-muted-foreground"
        >
          Available Tools
        </motion.h2>
        <motion.div
          className="grid gap-4 sm:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {tools.map((tool) => (
            <motion.div key={tool.title} variants={item}>
              <TiltCard
                onClick={() => navigate(tool.path)}
                className="group h-full p-5"
              >
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20">
                  <tool.icon className="h-4 w-4" />
                </div>
                <h3 className="mb-1.5 flex items-center gap-2 text-sm font-semibold text-foreground">
                  {tool.title}
                  <ArrowRight className="h-3 w-3 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary group-hover:opacity-100" />
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground">{tool.description}</p>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </Layout>
  );
};

export default Index;
