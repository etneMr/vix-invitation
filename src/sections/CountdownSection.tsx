import { motion } from 'framer-motion'
import { images, WEDDING_ISO } from '../data/wedding'
import { useWeddingCountdown } from '../hooks/useWeddingCountdown'
import { Reveal } from '../components/Reveal'

const labels = ['Ngày', 'Giờ', 'Phút', 'Giây'] as const

export function CountdownSection() {
  const { days, hours, minutes, seconds, pad2 } = useWeddingCountdown(WEDDING_ISO)
  const values = [days, pad2(hours), pad2(minutes), pad2(seconds)]

  return (
    <section className="relative min-h-[320px] w-full overflow-hidden">
      <img
        src={images.countdownBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/35" />
      <Reveal className="relative flex min-h-[320px] max-w-lg flex-col justify-end px-6 py-10 sm:mx-auto">
        <div className="w-full rounded-t-lg bg-black/55 px-4 py-6 backdrop-blur-[2px]">
          <div className="grid grid-cols-4 gap-2 text-center text-white">
            {values.map((v, i) => (
              <motion.div
                key={`${labels[i]}-${i === 3 ? v : labels[i]}`}
                initial={false}
                animate={i === 3 ? { opacity: [0.85, 1, 0.85] } : {}}
                transition={
                  i === 3
                    ? { duration: 1, repeat: Infinity, ease: 'easeInOut' }
                    : {}
                }
              >
                <p className="font-script text-3xl leading-none sm:text-4xl">
                  {v}
                </p>
                <p className="mt-2 font-sans text-[10px] font-medium uppercase tracking-wider opacity-90 sm:text-xs">
                  {labels[i]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
