import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BarChart3, Bell, Terminal, TrendingUp, Monitor, RefreshCw } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Feature {
  title: string
  description: string
  icon: LucideIcon
}

const features: Feature[] = [
  {
    title: 'Real-time Tracking',
    description:
      'Monitor 5-hour, 7-day, and Opus utilization with live color-coded progress bars.',
    icon: BarChart3,
  },
  {
    title: 'Smart Alerts',
    description:
      'Get notified at 80% and 90% thresholds before you hit rate limits. Cycle reset alerts too.',
    icon: Bell,
  },
  {
    title: 'Session Management',
    description:
      'See active session tokens and resume any of your 8 most recent sessions with one click.',
    icon: Terminal,
  },
  {
    title: 'Analytics Dashboard',
    description:
      'Track historical usage trends with beautiful charts across 24h, 7d, and 30d periods.',
    icon: TrendingUp,
  },
  {
    title: 'Customizable Menubar',
    description:
      'Choose from 5 display modes: flame emoji + percentage, icon-only, or mini chart bars.',
    icon: Monitor,
  },
  {
    title: 'Auto-Updates',
    description:
      'Always run the latest version with Sparkle-powered signed updates.',
    icon: RefreshCw,
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
}

export function Features() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="features" className="relative px-6 py-28 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-text-primary md:text-5xl">
            Everything you need to stay under the limit
          </h2>
          <p className="mt-4 text-base text-text-secondary md:text-lg">
            Burnrate monitors your API usage across providers so you can code
            without interruption
          </p>
        </div>

        {/* Feature cards grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = feature.icon

  return (
    <motion.div
      variants={cardVariants}
      className="group rounded-2xl border border-surface-border bg-surface-card p-7 transition-all duration-200 hover:scale-[1.02] hover:border-brand-orange/20 hover:shadow-[0_0_24px_rgba(249,115,22,0.06)]"
    >
      {/* Icon */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-orange/10">
        <Icon className="h-6 w-6 text-brand-orange" />
      </div>

      {/* Text */}
      <h3 className="text-lg font-semibold text-text-primary">
        {feature.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
        {feature.description}
      </p>
    </motion.div>
  )
}
