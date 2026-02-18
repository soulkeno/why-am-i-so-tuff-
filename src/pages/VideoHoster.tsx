import { motion } from "framer-motion";
import { Video, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import TiltCard from "@/components/TiltCard";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const VideoHoster = () => {
  return (
    <Layout>
      {/* Hero */}
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
            <Video className="h-5 w-5" />
          </motion.div>
          <motion.h1
            variants={item}
            className="text-3xl font-black tracking-tight sm:text-4xl"
          >
            Video <span className="text-gradient-purple">Hoster</span>
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-3 max-w-lg text-sm text-muted-foreground"
          >
            Host videos for free and share them anywhere with a simple link.
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
            <h2 className="mb-2 text-sm font-semibold text-foreground">What is it?</h2>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Video Hoster lets you upload and host videos for free. Share them in Discord,
              on your website, or wherever you want with just a link. No more "file too large" errors.
            </p>
          </TiltCard>
        </motion.div>

        <motion.div variants={item}>
          <TiltCard className="p-5">
            <h2 className="mb-3 text-sm font-semibold text-foreground">How it works</h2>
            <div className="space-y-2.5">
              {[
                { step: 1, text: "Upload your video to the platform" },
                { step: 2, text: "Get a shareable link instantly" },
                { step: 3, text: "Paste the link in Discord or wherever you want, it embeds automatically" },
              ].map((s, i) => (
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

        <motion.div variants={item} className="pt-2">
          <motion.a
            href="https://www.sakn.lol"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="inline-flex h-9 items-center gap-2 rounded-md bg-primary px-5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go to Video Hoster
            <ExternalLink className="h-3.5 w-3.5" />
          </motion.a>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default VideoHoster;
