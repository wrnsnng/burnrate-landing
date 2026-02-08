import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function ProgressBar({
  percent,
  gradient,
  delay,
  animate,
}: {
  percent: number
  gradient: string
  delay: number
  animate: boolean
}) {
  return (
    <div className="h-1.5 w-full rounded-full bg-white/[0.06]">
      <motion.div
        className="h-full rounded-full"
        style={{ backgroundImage: gradient }}
        initial={{ width: 0 }}
        animate={animate ? { width: `${percent}%` } : { width: 0 }}
        transition={{ duration: 1, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
    </div>
  )
}

function MiniProgressBar({
  percent,
  color,
  delay,
  animate,
}: {
  percent: number
  color: string
  delay: number
  animate: boolean
}) {
  return (
    <div className="h-1 w-12 rounded-full bg-white/[0.06]">
      <motion.div
        className="h-full rounded-full"
        style={{ backgroundColor: color }}
        initial={{ width: 0 }}
        animate={animate ? { width: `${percent}%` } : { width: 0 }}
        transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
    </div>
  )
}

const blueGradient = 'linear-gradient(90deg, #3B82F6, #2563EB)'
const orangeGradient = 'linear-gradient(90deg, #F97316, #EA580C)'

const providers = [
  { name: 'Claude', color: '#DA7756', percent: 42, active: true },
  { name: 'Codex', color: '#10A37F', percent: 15, active: true },
  { name: 'Kimi', color: '#6366F1', percent: 0, active: false },
  { name: 'Gemini', color: '#4285F4', percent: 0, active: false },
]

export function AppPreview() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-text-primary md:text-5xl">
            See your usage at a glance
          </h2>
          <p className="mt-4 text-base text-text-secondary md:text-lg">
            Everything you need, one click away in your menubar
          </p>
        </div>

        {/* Mockup container */}
        <div ref={ref} className="relative flex items-center justify-center">
          {/* Background glow */}
          <div
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: 600,
              height: 600,
              background:
                'radial-gradient(circle, rgba(249,115,22,0.08) 0%, rgba(234,88,12,0.03) 40%, transparent 70%)',
            }}
          />

          {/* Floating mockup with perspective */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={
              isInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ perspective: 1000 }}
          >
            <motion.div
              animate={
                isInView
                  ? { rotateX: 2, rotateY: -1 }
                  : { rotateX: 0, rotateY: 0 }
              }
              transition={{ duration: 1.2, ease: 'easeOut' }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* macOS popover */}
              <div className="relative mx-auto w-[360px] rounded-2xl border border-white/[0.05] bg-[#1C1C1E] p-4 shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
                {/* Popover arrow */}
                <div
                  className="absolute -top-2 left-1/2 -translate-x-1/2"
                  style={{
                    width: 16,
                    height: 8,
                    clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                    backgroundColor: '#1C1C1E',
                  }}
                />

                {/* Header */}
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm">🔥</span>
                    <span className="text-xs font-semibold text-white/80">
                      Burnrate
                    </span>
                  </div>
                  <span className="text-[10px] text-white/30">v0.2.0-beta</span>
                </div>

                {/* Summary rows */}
                <div className="mb-3 space-y-2">
                  {providers.map((p, i) => (
                    <div key={p.name} className="flex items-center gap-2.5">
                      <div
                        className="h-2 w-2 shrink-0 rounded-full"
                        style={{ backgroundColor: p.color }}
                      />
                      <span className="w-12 text-[11px] font-medium text-white/70">
                        {p.name}
                      </span>
                      <div className="flex-1">
                        <MiniProgressBar
                          percent={p.percent}
                          color={p.color}
                          delay={0.3 + i * 0.1}
                          animate={isInView}
                        />
                      </div>
                      <span className="w-7 text-right text-[10px] text-white/40">
                        {p.active ? `${p.percent}%` : '--'}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="mb-3 h-px bg-white/[0.06]" />

                {/* Expanded Claude section */}
                <div className="rounded-[10px] bg-white/[0.04] p-3">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#DA7756]" />
                    <span className="text-xs font-semibold text-white/90">
                      Claude Code
                    </span>
                    <svg
                      className="ml-auto h-3 w-3 text-white/30"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M3 4.5L6 7.5L9 4.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* 5-hour */}
                  <div className="mb-2.5">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-[10px] font-medium text-white/50">
                        5-hour
                      </span>
                      <span className="text-[10px] font-semibold text-[#3B82F6]">
                        42%
                      </span>
                    </div>
                    <ProgressBar
                      percent={42}
                      gradient={blueGradient}
                      delay={0.5}
                      animate={isInView}
                    />
                    <p className="mt-0.5 text-[9px] text-white/30">
                      Resets in 3h 12m (9:15 PM)
                    </p>
                  </div>

                  {/* 7-day */}
                  <div className="mb-2.5">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-[10px] font-medium text-white/50">
                        7-day
                      </span>
                      <span className="text-[10px] font-semibold text-[#3B82F6]">
                        18%
                      </span>
                    </div>
                    <ProgressBar
                      percent={18}
                      gradient={blueGradient}
                      delay={0.7}
                      animate={isInView}
                    />
                    <p className="mt-0.5 text-[9px] text-white/30">
                      Resets in 4d 8h
                    </p>
                  </div>

                  {/* Opus */}
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-[10px] font-medium text-white/50">
                        Opus
                      </span>
                      <span className="text-[10px] font-semibold text-[#F97316]">
                        67%
                      </span>
                    </div>
                    <ProgressBar
                      percent={67}
                      gradient={orangeGradient}
                      delay={0.9}
                      animate={isInView}
                    />
                    <p className="mt-0.5 text-[9px] text-white/30">
                      Resets in 2h 45m (8:48 PM)
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="my-3 h-px bg-white/[0.06]" />

                {/* Active session */}
                <div className="rounded-[10px] bg-white/[0.04] px-3 py-2">
                  <p className="mb-1 text-[10px] font-medium text-white/40">
                    Active Session
                  </p>
                  <p className="font-mono text-[10px] leading-relaxed text-white/60">
                    Input: 125,432 · Output: 8,291 · Cache: 45,120
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
