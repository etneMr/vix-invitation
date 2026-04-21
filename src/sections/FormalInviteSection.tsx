import { motion } from 'framer-motion'
import {
  couple,
  eventMain,
  family,
  images,
  invite,
} from '../data/wedding'
import {
  Reveal,
  RevealItem,
  RevealStagger,
} from '../components/Reveal'

function FloatingHearts() {
  const hearts = [
    { x: '8%', y: '18%', d: 0 },
    { x: '88%', y: '22%', d: 0.3 },
    { x: '18%', y: '72%', d: 0.5 },
    { x: '78%', y: '68%', d: 0.2 },
    { x: '48%', y: '8%', d: 0.7 },
  ]
  return (
    <>
      {hearts.map((h, i) => (
        <motion.span
          key={i}
          className="pointer-events-none absolute text-lg text-red-500"
          style={{ left: h.x, top: h.y }}
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          animate={{ y: [0, -6, 0] }}
          transition={{
            opacity: { duration: 0.5, delay: h.d },
            y: {
              duration: 3 + i * 0.2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: h.d + 0.3,
            },
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
      viewBox="0 0 200 24"
      className={`mx-auto mb-3 mt-2 h-6 w-48 text-neutral-800 ${flip ? 'scale-x-[-1]' : ''}`}
      aria-hidden
    >
      <motion.path
        d="M4 14 Q 50 4 100 14 T 196 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.svg>
  )
}

export function FormalInviteSection() {
  return (
    <section className="border-x-2 border-skyline/60 bg-white px-5 py-16 sm:mx-auto sm:max-w-lg sm:border-x">
      <Reveal className="relative text-center">
        <FloatingHearts />
        <Flourish />
        <div className="relative z-[1] flex flex-wrap items-baseline justify-center gap-x-2 gap-y-0">
          <span className="font-script text-5xl text-neutral-900 sm:text-6xl">
            Save
          </span>
          <span className="font-script text-2xl text-neutral-700 sm:text-3xl">
            the
          </span>
          <span className="font-script text-5xl text-neutral-900 sm:text-6xl">
            Date
          </span>
        </div>
        <Flourish flip />

        <p className="mt-10 font-script text-3xl text-neutral-900 sm:text-4xl">
          {couple.displayPair}
        </p>

        <RevealStagger className="mt-12 grid grid-cols-1 gap-4 text-center sm:grid-cols-2 sm:gap-5">
          <RevealItem>
            <div className="rounded-2xl border border-skyline/60 bg-[#007FFF]/10 px-4 py-5 shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
              <p className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-900">
                {family.groom.title}
              </p>
              <div className="mx-auto mt-3 h-px w-14 bg-terracotta/40" />
              {family.groom.lines.map((l) => (
                <p
                  key={l}
                  className="mt-2 font-sans text-xs leading-relaxed text-neutral-700"
                >
                  {l}
                </p>
              ))}
            </div>
          </RevealItem>
          <RevealItem>
            <div className="rounded-2xl border border-skyline/60 bg-[#007FFF]/10 px-4 py-5 shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
              <p className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-900">
                {family.bride.title}
              </p>
              <div className="mx-auto mt-3 h-px w-14 bg-terracotta/40" />
              {family.bride.lines.map((l) => (
                <p
                  key={l}
                  className="mt-2 font-sans text-xs leading-relaxed text-neutral-700"
                >
                  {l}
                </p>
              ))}
            </div>
          </RevealItem>
        </RevealStagger>

        <motion.div
          className="mx-auto mt-8 w-28 overflow-hidden rounded-full"
          whileHover={{ scale: 1.04 }}
        >
          <img
            src={images.bouquet}
            alt="Hoa cưới"
            className="aspect-square w-full object-cover"
          />
        </motion.div>

        <Reveal className="mt-10">
          <p className="font-sans text-xs font-bold tracking-wide text-neutral-900">
            {invite.kicker}
          </p>
          <p className="mt-2 font-sans text-sm text-neutral-700">
            {invite.line1}
          </p>
          <p className="mt-1 font-sans text-xs text-neutral-500">
            {invite.line2}
          </p>
        </Reveal>

        <Reveal className="mt-12 space-y-3">
          <p className="font-script text-3xl text-neutral-900 sm:text-4xl">
            {couple.groomFull}
          </p>
          <p className="text-lg text-red-500">♥</p>
          <p className="font-script text-3xl text-neutral-900 sm:text-4xl">
            {couple.brideFull}
          </p>
        </Reveal>

        <Reveal className="mt-12 space-y-2 font-sans text-sm text-neutral-700 rounded-2xl border border-skyline/70 bg-[#007FFF]/10 px-5 py-6">
          <p>{eventMain.time}</p>
          <p className="font-medium text-neutral-900 text-[18px]">{eventMain.date}</p>
          <div className="flex items-center justify-center gap-1 mt-4 ">
            <p className="m-0 leading-none font-medium">{eventMain.at}</p>
            <p className="m-0 leading-none font-medium text-[16px]">
            {eventMain.place}
            </p>
          </div>
          <p className="text-neutral-600">{eventMain.address}</p>
        </Reveal>


      </Reveal>
    </section>
  )
}
