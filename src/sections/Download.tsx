import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Download as DownloadIcon, ArrowRight } from 'lucide-react'
import { latestRelease, DOWNLOAD_URL, RELEASES_URL } from '@/data/releases'

export function Download() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="download" className="relative px-6 py-32">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 700,
          height: 700,
          background:
            'radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 60%)',
        }}
      />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative mx-auto max-w-3xl text-center"
      >
        <h2 className="text-3xl font-bold text-text-primary md:text-5xl">
          Ready to take control of your usage?
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-base text-text-secondary md:text-lg">
          Download Burnrate for free and never hit a rate limit by surprise
          again.
        </p>

        {/* Download button */}
        <div className="mt-10">
          <a
            href={DOWNLOAD_URL}
            className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-brand-orange to-brand-orange-dark px-10 py-5 text-lg font-semibold text-white transition-transform hover:scale-105"
          >
            <DownloadIcon size={22} />
            Download for macOS
          </a>
        </div>

        {/* Releases link */}
        <div className="mt-5">
          <a
            href={RELEASES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-brand-orange"
          >
            View all releases on GitHub
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Version badge */}
        <p className="mt-6 text-sm text-text-tertiary">
          v{latestRelease.version} · 1.8 MB · macOS 14+
        </p>

        {/* License note */}
        <p className="mt-2 text-xs text-text-tertiary">
          Free &amp; open source · MIT License
        </p>
      </motion.div>
    </section>
  )
}
