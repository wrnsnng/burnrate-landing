import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Provider {
  name: string
  color: string
  logo: string
  description: string
  status: string
}

const providers: Provider[] = [
  {
    name: 'Claude',
    color: '#DA7756',
    logo: '/claude-logo.svg',
    description:
      'Full usage tracking with 5-hour, 7-day & Opus rate limits. Real-time progress bars with status indicators.',
    status: 'Full Support',
  },
  {
    name: 'Codex (OpenAI)',
    color: '#10A37F',
    logo: '/openai-logo.svg',
    description:
      "Session tracking and usage monitoring for OpenAI's Codex CLI.",
    status: 'Supported',
  },
  {
    name: 'Kimi K2.5',
    color: '#6366F1',
    logo: '/kimi-logo.svg',
    description:
      'CLI detection with automatic install guidance. Usage tracking coming soon.',
    status: 'Coming Soon',
  },
  {
    name: 'Gemini',
    color: '#4285F4',
    logo: '/gemini-logo.svg',
    description:
      'Google Gemini CLI detection and setup. Usage tracking in development.',
    status: 'Coming Soon',
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

export function Providers() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="providers" className="relative px-6 py-28 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-text-primary md:text-5xl">
            Track every AI coding tool
          </h2>
          <p className="mt-4 text-base text-text-secondary md:text-lg">
            Multi-provider support with more integrations coming soon
          </p>
        </div>

        {/* Provider cards grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {providers.map((provider) => (
            <ProviderCard key={provider.name} provider={provider} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <motion.div
      variants={cardVariants}
      className="group rounded-2xl border-t-2 bg-surface-card p-6 transition-all duration-200"
      style={{
        borderTopColor: provider.color,
        // Tailwind border-surface-border for the remaining sides
        borderLeft: '1px solid rgba(255,255,255,0.06)',
        borderRight: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
      whileHover={{
        y: -2,
        boxShadow: `0 8px 32px ${provider.color}15`,
      }}
    >
      {/* Logo + Name */}
      <div className="mb-4 flex items-center gap-3">
        <img
          src={provider.logo}
          alt={`${provider.name} logo`}
          className="h-10 w-10"
        />
        <h3 className="text-xl font-semibold text-text-primary">
          {provider.name}
        </h3>
      </div>

      {/* Description */}
      <p className="mb-5 text-sm leading-relaxed text-text-secondary">
        {provider.description}
      </p>

      {/* Status badge */}
      <span
        className="inline-block rounded-full px-3 py-1 text-xs font-medium"
        style={{
          backgroundColor: `${provider.color}18`,
          color: provider.color,
        }}
      >
        {provider.status}
      </span>
    </motion.div>
  )
}
