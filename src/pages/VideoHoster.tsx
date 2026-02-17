import { motion } from "framer-motion";
import { Video, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import TiltCard from "@/components/TiltCard";

const VideoHoster = () => {
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
          <Video className="h-6 w-6" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-black tracking-tight sm:text-5xl"
        >
          Video <span className="text-gradient-purple">Hoster</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-3 max-w-lg text-muted-foreground"
        >
          Host videos for free and share them anywhere with a simple link.
        </motion.p>
      </section>

      <div className="mx-auto max-w-3xl space-y-6 px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <TiltCard className="p-6">
            <h2 className="mb-2 text-lg font-semibold text-foreground">What is it?</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Video Hoster lets you upload and host videos completely for free. Share them in Discord,
              on your website, or anywhere else with just a link — no more "file too large" errors.
            </p>
          </TiltCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <TiltCard className="p-6">
            <h2 className="mb-3 text-lg font-semibold text-foreground">How it works</h2>
            <div className="space-y-3">
              {[
                { step: 1, text: "Upload your video to the platform" },
                { step: 2, text: "Get a shareable link instantly" },
                { step: 3, text: "Paste the link in Discord or anywhere — it embeds automatically" },
              ].map((s) => (
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex justify-center pt-4"
        >
          <a
            href="https://www.sakn.lol"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go to Video Hoster
            <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </Layout>
  );
};

export default VideoHoster;
