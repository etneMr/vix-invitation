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

// function FloatingHearts() {
//   const hearts = [
//     { x: '8%', y: '18%', d: 0 },
//     { x: '88%', y: '22%', d: 0.3 },
//     { x: '18%', y: '74%', d: 0.5 },
//     { x: '78%', y: '68%', d: 0.2 },
//     { x: '48%', y: '8%', d: 0.7 },
//   ]
//   return (
//     <>

//     </>
//   )
// }

// function Flourish({ flip }: { flip?: boolean }) {
//   return (
//     <motion.svg
//       viewBox="0 0 200 24"
//       className={`mx-auto mb-3 mt-2 h-6 w-48 text-neutral-800 ${flip ? 'scale-x-[-1]' : ''}`}
//       aria-hidden
//     >
//       <motion.path
//         d="M4 14 Q 50 4 100 14 T 196 14"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1"
//         initial={{ pathLength: 0, opacity: 0 }}
//         whileInView={{ pathLength: 1, opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
//       />
//     </motion.svg>
//   )
// }

export function FormalInviteSection() {
  return (
    <section className="border-x-2 border-skyline/60 bg-white px-5 py-16 sm:mx-auto sm:max-w-lg sm:border-x">
      <Reveal className="relative text-center">
        <RevealStagger className="mt-12 grid grid-cols-1 gap-4 text-center sm:grid-cols-2 sm:gap-5">
          <RevealItem>
            <div className="rounded-2xl border border-skyline/60 bg-[#66b3ff]/10 px-4 py-5 shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
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
            <div className="rounded-2xl border border-skyline/60 bg-[#66b3ff]/10 px-4 py-5 shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
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
          <p className="font-script text-3xl text-[#1F3A5F] sm:text-4xl">
            {couple.groomFull}
          </p>
          <p className="text-lg text-red-500">♥</p>
          <p className="font-script text-3xl text-[#1F3A5F] sm:text-4xl">
            {couple.brideFull}
          </p>
        </Reveal>

        <Reveal className="mt-12 space-y-2 font-sans text-sm text-neutral-700 rounded-2xl border border-skyline/70 bg-[#66b3ff]/10 px-5 py-6">
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
