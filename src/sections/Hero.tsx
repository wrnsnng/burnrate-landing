import { motion } from 'framer-motion'
import { Download, Github, ChevronDown } from 'lucide-react'

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 800,
          height: 800,
          background:
            'radial-gradient(circle, rgba(249,115,22,0.12) 0%, rgba(234,88,12,0.04) 40%, transparent 70%)',
        }}
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center text-center"
      >
        {/* Floating app icon */}
        <motion.div variants={fadeUp} className="mb-10">
          <motion.img
            src={`${import.meta.env.BASE_URL}app-icon.png`}
            alt="Burnrate"
            className="h-40 w-40 drop-shadow-[0_0_60px_rgba(249,115,22,0.3)] md:h-48 md:w-48"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="max-w-4xl text-5xl leading-tight font-extrabold tracking-tight md:text-7xl md:leading-tight"
        >
          Never hit{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #F97316, #EA580C)',
            }}
          >
            rate limits
          </span>{' '}
          by surprise again
        </motion.h1>

        {/* Subhead */}
        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary md:text-xl"
        >
          A macOS menubar app that tracks your Claude Code, Codex, Kimi &amp;
          Gemini usage in real-time
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="https://github.com/wrnsnng/burnrate/releases/download/v0.2.0-beta/Burnrate-0.2.0-beta.zip"
            className="inline-flex items-center justify-center gap-2.5 rounded-xl px-8 py-4 font-semibold text-white transition-transform hover:scale-105"
            style={{
              backgroundImage: 'linear-gradient(135deg, #F97316, #EA580C)',
            }}
          >
            <Download size={20} />
            Download for macOS
          </a>
          <a
            href="https://github.com/wrnsnng/burnrate"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-surface-border px-8 py-4 font-semibold text-text-secondary transition-colors hover:text-text-primary"
          >
            <Github size={20} />
            View on GitHub
          </a>
        </motion.div>

        {/* macOS requirement */}
        <motion.p variants={fadeUp} className="mt-6 text-sm text-text-tertiary">
          Requires macOS 14.0+
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={24} className="text-text-tertiary" />
        </motion.div>
      </motion.div>
    </section>
  )
}
