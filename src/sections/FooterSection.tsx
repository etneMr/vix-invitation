import { motion } from 'framer-motion'
import { couple, footerClosing, hotline } from '../data/wedding'
import { Reveal } from '../components/Reveal'

function FloatingHearts() {
  const hearts = [
    { x: '6%', y: '12%' },
    { x: '90%', y: '20%' },
    { x: '14%', y: '78%' },
    { x: '82%', y: '70%' },
  ]
  return (
    <>
      {hearts.map((h, i) => (
        <motion.span
          key={i}
          className="pointer-events-none absolute text-base text-red-500"
          style={{ left: h.x, top: h.y }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          animate={{ y: [0, -5, 0] }}
          transition={{
            opacity: { delay: i * 0.08 },
            y: { duration: 2.8 + i * 0.15, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          ♥
        </motion.span>
      ))}
    </>
  )
}

function Flourish({ flip }: { flip?: boolean }) {
  return (
    <motion.svg
      viewBox="0 0 200 28"
      className={`mx-auto h-5 w-50 text-neutral-800 ${flip ? 'scale-x-[-1]' : ''}`}
      aria-hidden
    >
      <motion.path
        d="M4 16 Q 55 2 100 16 T 196 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.9"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.svg>
  )
}

export function FooterSection() {
  return (
    <footer className="relative overflow-hidden bg-white px-6 pb-16 pt-0">
      <Reveal className="relative mx-auto max-w-lg text-center">
        <FloatingHearts />
        {/* <Flourish />
        <div className="relative z-[1] flex flex-wrap items-baseline justify-center gap-x-2">
          <span className="font-script text-3xl text-neutral-900 sm:text-3xl">
            Save
          </span>
          <span className="font-script text-2xl text-neutral-600">the</span>
          <span className="font-script text-3xl text-neutral-900 sm:text-3xl">
            Date
          </span>
        </div>
        <Flourish flip /> */}
        <p className="relative z-[1] mt-6 font-sans text-sm leading-relaxed text-neutral-600">
          {footerClosing.thankYou}
        </p>

        <p className="relative z-[1] mt-2 font-sans text-[12px] uppercase tracking-[0.35em] text-[#66b3ff]/80 font-bold">
          {footerClosing.tagline}
        </p>
      </Reveal>

      <Reveal className="mt-10 border-t border-neutral-200 pt-8">
        <p className="text-center font-sans text-xs font-bold uppercase tracking-wide text-neutral-800">
          {hotline.title}
        </p>
        <div className="mt-4 flex flex-col gap-3 font-sans text-sm text-neutral-700 sm:flex-row sm:justify-center sm:gap-10">
          <a
            href={`tel:${hotline.groom.phone.replace(/\s/g, '')}`}
            className="flex flex-col items-center rounded-xl bg-[#66b3ff]/10 px-4 py-3 transition hover:bg-neutral-100"
          >
            <span className="text-xs text-neutral-500">{hotline.groom.label}</span>
            <span className="font-medium text-[#1F3A5F] text-base">{hotline.groom.phone}</span>
          </a>
          <a
            href={`tel:${hotline.bride.phone.replace(/\s/g, '')}`}
            className="flex flex-col items-center rounded-xl bg-[#66b3ff]/10 px-4 py-3 transition hover:bg-neutral-100"
          >
            <span className="text-xs text-neutral-500">{hotline.bride.label}</span>
            <span className="font-medium text-[#1F3A5F] text-base">{hotline.bride.phone}</span>
          </a>
        </div>
      </Reveal>
    </footer>
  )
}
