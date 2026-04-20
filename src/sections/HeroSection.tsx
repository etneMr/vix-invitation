import { motion } from 'framer-motion'
import { couple, hero } from '../data/wedding'
import { Reveal } from '../components/Reveal'

function WreathGraphic() {
  return (
    <motion.div
      className="relative mx-auto h-48 w-48"
      animate={{ rotate: [0, 2, -2, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      aria-hidden
    >
      <svg viewBox="0 0 200 200" className="h-full w-full text-emerald-700/55">
        <defs>
          <linearGradient id="leafG" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6b8f71" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#a3c4a8" stopOpacity="0.7" />
          </linearGradient>
        </defs>
        <ellipse
          cx="100"
          cy="100"
          rx="78"
          ry="78"
          fill="none"
          stroke="url(#leafG)"
          strokeWidth="1.2"
          strokeDasharray="4 6"
        />
        {[...Array(16)].map((_, i) => {
          const a = (i / 16) * Math.PI * 2
          const x = 100 + Math.cos(a) * 72
          const y = 100 + Math.sin(a) * 72
          return (
            <ellipse
              key={i}
              cx={x}
              cy={y}
              rx="6"
              ry="12"
              fill="url(#leafG)"
              transform={`rotate(${(i * 360) / 16} ${x} ${y})`}
              opacity={0.65}
            />
          )
        })}
      </svg>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <p className="font-script text-2xl text-neutral-900 sm:text-3xl">
          Save the Date
        </p>
      </div>
    </motion.div>
  )
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#faf8f5] px-6 pb-14 pt-10">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 20% 20%, rgba(200,220,180,0.35), transparent), radial-gradient(ellipse 60% 40% at 85% 30%, rgba(255,230,180,0.3), transparent)',
        }}
      />
      <Reveal className="relative mx-auto flex max-w-lg flex-col items-center text-center">
        <WreathGraphic />
        <motion.h1
          className="mt-6 font-sans text-4xl font-semibold tracking-tight text-[#c4786b] sm:text-5xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {couple.short}
        </motion.h1>
        <p className="mt-3 max-w-sm font-sans text-sm text-neutral-600">
          {hero.sub}
        </p>
      </Reveal>
    </section>
  )
}
