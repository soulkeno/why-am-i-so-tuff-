import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Crosshair, Video } from "lucide-react";
import Layout from "@/components/Layout";
import TiltCard from "@/components/TiltCard";

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

const Index = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      {/* Hero */}
      <section className="flex min-h-[75vh] flex-col items-start justify-center px-6">
        <div className="mx-auto w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-block rounded-md border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary"
          >
            Tools
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-4xl font-black leading-tight tracking-tight sm:text-6xl"
          >
            Your favorite{" "}
            <span className="text-gradient-purple">tools</span>
            <br />
            in one place
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground"
          >
            A collection of free, lightweight utilities designed with speed and simplicity in mind.
          </motion.p>
          <motion.a
            href="#tools"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 inline-flex h-9 items-center gap-2 rounded-md border border-border bg-secondary px-5 text-xs font-medium text-foreground transition-colors hover:bg-muted"
          >
            ▶ Browse Tools
          </motion.a>
        </div>
      </section>

      {/* Tools Grid */}
      <section id="tools" className="mx-auto max-w-6xl px-6 pb-32">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-6 text-xs font-bold uppercase tracking-widest text-muted-foreground"
        >
          Available Tools
        </motion.h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <TiltCard
                onClick={() => navigate(tool.path)}
                className="group p-5"
              >
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <tool.icon className="h-4 w-4" />
                </div>
                <h3 className="mb-1.5 text-sm font-semibold text-foreground">{tool.title}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">{tool.description}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Index;
