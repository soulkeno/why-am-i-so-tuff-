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
      <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-black tracking-tight sm:text-7xl"
        >
          keno<span className="text-gradient-purple">.lol</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 max-w-md text-lg text-muted-foreground"
        >
          A collection of free, lightweight tools built for speed.
        </motion.p>
        <motion.a
          href="#tools"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 inline-flex h-10 items-center rounded-md border border-primary/40 bg-primary/10 px-6 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
        >
          Browse Tools
        </motion.a>
      </section>

      {/* Tools Grid */}
      <section id="tools" className="mx-auto max-w-4xl px-6 pb-24">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground"
        >
          Tools
        </motion.h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <TiltCard
                onClick={() => navigate(tool.path)}
                className="group p-6"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <tool.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{tool.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{tool.description}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Index;
