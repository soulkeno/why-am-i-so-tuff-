import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Crosshair, Video, ArrowRight, Terminal, Zap, Shield, Globe, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";

const tools = [
  {
    icon: Crosshair,
    title: "MCTiers Sniper",
    description: 'Auto-clicks "Join Queue" so you get in first.',
    path: "/mctiers",
    tag: "Automation",
  },
  {
    icon: Video,
    title: "Video Hoster",
    description: "Host and share videos for free. No file size limits.",
    path: "/video-hoster",
    tag: "Media",
  },
];

const features = [
  { icon: Zap, title: "Fast", description: "Lightweight tools that load instantly." },
  { icon: Shield, title: "Reliable", description: "Tested and maintained to just work." },
  { icon: Globe, title: "Free", description: "No hidden fees, no premium tiers." },
];

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08, ease: "easeOut" },
  }),
};

const Index = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="relative px-6 pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-16">
          {/* Left copy */}
          <div className="flex-1 max-w-xl">
            <motion.div
              custom={0}
              variants={fade}
              initial="hidden"
              animate="show"
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">
                Now available
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fade}
              initial="hidden"
              animate="show"
              className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.5rem]"
            >
              The all-in-one
              <br />
              <span className="text-primary">toolbox</span> you need
            </motion.h1>

            <motion.p
              custom={2}
              variants={fade}
              initial="hidden"
              animate="show"
              className="mt-5 text-sm leading-relaxed text-muted-foreground max-w-sm"
            >
              Free, open tools that actually work. Built for speed, designed to be simple.
            </motion.p>

            <motion.div
              custom={3}
              variants={fade}
              initial="hidden"
              animate="show"
              className="mt-8 flex items-center gap-3"
            >
              <a
                href="#tools"
                className="inline-flex h-10 items-center gap-2 rounded-lg bg-primary px-5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Get Started
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <a
                href="#features"
                className="inline-flex h-10 items-center gap-2 rounded-lg border border-border px-5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-card"
              >
                Learn more
              </a>
            </motion.div>
          </div>

          {/* Right – Mini dashboard preview */}
          <motion.div
            custom={2}
            variants={fade}
            initial="hidden"
            animate="show"
            className="flex-1 w-full max-w-md"
          >
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              {/* Title bar */}
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
                  <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
                  <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
                </div>
                <span className="ml-2 text-[10px] text-muted-foreground">dashboard</span>
              </div>

              {/* Content */}
              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-foreground">Welcome back</span>
                  <span className="text-[10px] text-muted-foreground">2 tools active</span>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Tools", value: "2" },
                    { label: "Uptime", value: "99.9%" },
                    { label: "Users", value: "1.2k" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-md border border-border bg-background p-3 text-center">
                      <p className="text-lg font-bold text-foreground">{stat.value}</p>
                      <p className="text-[9px] text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Tool list */}
                <div className="space-y-2">
                  {tools.map((tool) => (
                    <div
                      key={tool.title}
                      className="flex items-center gap-3 rounded-md border border-border bg-background p-3"
                    >
                      <div className="h-7 w-7 rounded-md bg-primary/10 flex items-center justify-center">
                        <tool.icon className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-foreground">{tool.title}</p>
                        <p className="text-[10px] text-muted-foreground truncate">{tool.description}</p>
                      </div>
                      <span className="h-2 w-2 rounded-full bg-primary/60" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="mx-auto max-w-6xl px-6 pb-20">
        <div className="h-px bg-border mb-16" />
        <div className="grid gap-6 sm:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <div className="h-9 w-9 shrink-0 rounded-lg border border-border bg-card flex items-center justify-center">
                <f.icon className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">{f.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Tools ── */}
      <section id="tools" className="mx-auto max-w-6xl px-6 pb-20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Available Tools
          </h2>
          <span className="text-[10px] text-muted-foreground">{tools.length} tools</span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {tools.map((tool, i) => (
            <motion.button
              key={tool.title}
              custom={i}
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              onClick={() => navigate(tool.path)}
              className="group flex items-start gap-4 rounded-lg border border-border bg-card p-5 text-left transition-colors hover:border-primary/30 hover:bg-card/80"
            >
              <div className="h-10 w-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                <tool.icon className="h-4.5 w-4.5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-sm font-semibold text-foreground">{tool.title}</h3>
                  <span className="text-[9px] rounded-full border border-border px-2 py-0.5 text-muted-foreground">
                    {tool.tag}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{tool.description}</p>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground/40 mt-0.5 transition-colors group-hover:text-primary" />
            </motion.button>
          ))}
        </div>
      </section>

      {/* ── Announcement ── */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="h-px bg-border mb-16" />
        <motion.div
          custom={0}
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex items-start gap-4 rounded-lg border border-border bg-card p-5 max-w-lg"
        >
          <div className="h-8 w-8 shrink-0 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
            <Terminal className="h-3.5 w-3.5 text-primary" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold text-foreground">keno</span>
              <span className="text-[9px] rounded-full border border-border px-2 py-0.5 text-muted-foreground uppercase">
                Owner
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              More tools will be released later on, we'll be working hard until the website is perfect.
            </p>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Index;
