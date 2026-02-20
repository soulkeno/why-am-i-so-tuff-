import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Crosshair, Video, ArrowRight } from "lucide-react";
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

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
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
        <div className="mx-auto w-full max-w-6xl">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div
              variants={item}
              className="mb-5 inline-block rounded border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary"
            >
              Update
            </motion.div>
            <motion.h1
              variants={item}
              className="text-4xl font-black leading-tight tracking-tight sm:text-6xl"
            >
              Your favorite{" "}
              <span className="text-gradient-blue">tools</span>
              <br />
              in one place
            </motion.h1>
            <motion.p
              variants={item}
              className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground"
            >
              A collection of useful tools built to make your life easier. Simple, fast, and free.
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
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="glow-divider mb-12" />
      </div>

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
    </Layout>
  );
};

export default Index;
