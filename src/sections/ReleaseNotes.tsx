import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { latestRelease, RELEASES_URL } from '@/data/releases'

interface CategoryProps {
  label: string
  color: string
  items: string[]
}

function Category({ label, color, items }: CategoryProps) {
  if (items.length === 0) return null

  return (
    <div>
      <h4 className="mb-3 text-sm font-semibold text-text-primary">{label}</h4>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <span
              className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
              style={{ backgroundColor: color }}
            />
            <span className="text-sm leading-relaxed text-text-secondary">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ReleaseNotes() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const formattedDate = new Date(latestRelease.date).toLocaleDateString(
    'en-US',
    { year: 'numeric', month: 'long', day: 'numeric' },
  )

  return (
    <section id="release-notes" className="relative px-6 py-28 md:py-32">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mx-auto max-w-4xl"
      >
        {/* Section header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <h2 className="text-3xl font-bold text-text-primary md:text-5xl">
              What's New
            </h2>
            <span className="rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-semibold text-brand-orange">
              v{latestRelease.version}
            </span>
          </div>
          <p className="text-base text-text-secondary">
            {latestRelease.title}
          </p>
          <p className="mt-1 text-sm text-text-tertiary">{formattedDate}</p>
        </div>

        {/* Release content */}
        <div className="rounded-2xl border border-surface-border bg-surface-card p-6 md:p-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Left column: Features */}
            <Category
              label="New Features"
              color="#22C55E"
              items={latestRelease.features}
            />

            {/* Right column: Changes, Fixes, Known Issues */}
            <div className="space-y-8">
              <Category
                label="Changes"
                color="#3B82F6"
                items={latestRelease.changes}
              />
              <Category
                label="Fixes"
                color="#EAB308"
                items={latestRelease.fixes}
              />
              <Category
                label="Known Issues"
                color="#EF4444"
                items={latestRelease.knownIssues}
              />
            </div>
          </div>
        </div>

        {/* Footer link */}
        <div className="mt-8 text-center">
          <a
            href={RELEASES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-brand-orange"
          >
            See full release history
            <ArrowRight size={14} />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
