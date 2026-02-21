import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Crosshair, Video, ArrowRight, Terminal, Zap, Shield, Globe } from "lucide-react";
import Layout from "@/components/Layout";
import TiltCard from "@/components/TiltCard";

const tools = [
  {
    icon: Crosshair,
    title: "MCTiers Sniper",
    description: 'Clicks "Join Queue" as fast as it can so you get into the waitlist first.',
    path: "/mctiers",
  },
  {
    icon: Video,
    title: "Video Hoster",
    description: "Host videos for free and send them in Discord with just a link. No file size limits.",
    path: "/video-hoster",
  },
];

const features = [
  {
    icon: Zap,
    title: "Fast",
    description: "Every tool is built to be lightweight and responsive.",
  },
  {
    icon: Shield,
    title: "Reliable",
    description: "Tested and maintained so things just work.",
  },
  {
    icon: Globe,
    title: "Free",
    description: "All tools are completely free to use. No hidden fees.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const Index = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      {/* Hero */}
      <section className="flex min-h-[70vh] items-center px-6">
        <div className="mx-auto w-full max-w-6xl">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-2xl"
          >
            <motion.div
              variants={item}
              className="mb-5 inline-block rounded border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary"
            >
              Update
            </motion.div>
            <motion.h1
              variants={item}
              className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            >
              Your favorite{" "}
              <span className="text-gradient-blue">tools</span>
              <br />
              in one place
            </motion.h1>
            <motion.p
              variants={item}
              className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground"
            >
              A collection of useful tools built to make your life easier. Simple, fast, and free.
            </motion.p>
            <motion.div variants={item} className="flex gap-3 mt-8">
              <motion.a
                href="#tools"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex h-9 items-center gap-2 rounded-md bg-primary px-5 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Browse Tools
              </motion.a>
              <motion.a
                href="#features"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex h-9 items-center gap-2 rounded-md border border-border bg-secondary px-5 text-xs font-medium text-foreground transition-colors hover:bg-muted"
              >
                Learn More
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features row */}
      <section id="features" className="mx-auto max-w-6xl px-6 pb-16">
        <div className="glow-divider mb-12" />
        <motion.div
          className="grid gap-4 sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((f) => (
            <motion.div key={f.title} variants={item}>
              <div className="rounded-lg border border-border bg-card p-5">
                <f.icon className="h-4 w-4 text-primary mb-3" />
                <h3 className="text-sm font-semibold text-foreground mb-1">{f.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Tools Grid */}
      <section id="tools" className="mx-auto max-w-6xl px-6 pb-16">
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
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
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

      {/* Announcement */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="glow-divider mb-12" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-lg border border-border bg-card p-6 max-w-lg"
        >
          <div className="flex items-center gap-2 mb-3">
            <Terminal className="h-3.5 w-3.5 text-primary" />
            <span className="text-[10px] uppercase tracking-widest font-bold text-primary">Announcement</span>
          </div>
          <p className="text-sm text-foreground leading-relaxed">
            More tools will be released later on, we'll be working hard until the website is perfect.
          </p>
          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border">
            <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
              <Terminal className="h-3 w-3 text-primary" />
            </div>
            <div>
              <p className="text-xs font-medium text-foreground">keno</p>
              <p className="text-[9px] text-muted-foreground uppercase">Owner</p>
            </div>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Index;
