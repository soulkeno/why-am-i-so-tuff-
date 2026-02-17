import { motion } from "framer-motion";
import { Video, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import TiltCard from "@/components/TiltCard";

const VideoHoster = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="flex flex-col items-start px-6 pb-10 pt-28">
        <div className="mx-auto w-full max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary"
          >
            <Video className="h-5 w-5" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-3xl font-black tracking-tight sm:text-4xl"
          >
            Video <span className="text-gradient-purple">Hoster</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 max-w-lg text-sm text-muted-foreground"
          >
            Host videos for free and share them anywhere with a simple link.
          </motion.p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl space-y-4 px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <TiltCard className="p-5">
            <h2 className="mb-2 text-sm font-semibold text-foreground">What is it?</h2>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Video Hoster lets you upload and host videos completely for free. Share them in Discord,
              on your website, or anywhere else with just a link — no more "file too large" errors.
            </p>
          </TiltCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          <TiltCard className="p-5">
            <h2 className="mb-3 text-sm font-semibold text-foreground">How it works</h2>
            <div className="space-y-2.5">
              {[
                { step: 1, text: "Upload your video to the platform" },
                { step: 2, text: "Get a shareable link instantly" },
                { step: 3, text: "Paste the link in Discord or anywhere — it embeds automatically" },
              ].map((s) => (
                <div key={s.step} className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-primary/10 text-[10px] font-bold text-primary">
                    {s.step}
                  </span>
                  <p className="text-xs text-muted-foreground">{s.text}</p>
                </div>
              ))}
            </div>
          </TiltCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="pt-2"
        >
          <a
            href="https://www.sakn.lol"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center gap-2 rounded-md bg-primary px-5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go to Video Hoster
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      </div>
    </Layout>
  );
};

export default VideoHoster;
