import { motion } from 'framer-motion'
import { brideIntro, couple, groomIntro, images } from '../data/wedding'
import { Reveal } from '../components/Reveal'

export function CoupleIntroSection() {
  return (
    <section className="bg-white px-6 py-16 pb-0">
      <Reveal className="mx-auto max-w-lg text-center">
        <h2 className="font-script text-5xl text-[#1F3A5F]">
          {couple.groomShort}
        </h2>
        <p className="mt-4 font-sans text-sm leading-relaxed text-neutral-600 italic">
          {groomIntro.quote}
        </p>

        <div className="relative mx-auto mt-10 flex max-w-sm justify-center pl-6">
          <motion.div
            className="relative z-10 h-40 w-40 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-lg shadow-black/10 sm:h-44 sm:w-44"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 320, damping: 18 }}
          >
            <img
              src={images.coupleOverlapLeft}
              alt="Cặp đôi"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <motion.div
            className="-ml-10 h-40 w-40 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-lg shadow-black/10 sm:h-44 sm:w-44"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 320, damping: 18 }}
          >
            <img
              src={images.coupleOverlapRight}
              alt="Cặp đôi"
              className="h-full w-full object-cover"

            />
          </motion.div>
        </div>

        <h2 className="mt-14 font-script text-5xl text-[#1F3A5F]">
          {couple.brideShort}
        </h2>
        <p className="mt-4 font-sans text-sm leading-relaxed text-neutral-600 italic">
          {brideIntro.quote}
        </p>
      </Reveal>
    </section>
  )
}
