import { motion } from 'framer-motion'
import { images } from '../data/wedding'
import { Reveal } from '../components/Reveal'

export function VideoSection() {
  return (
    <section className="bg-[#faf8f5] px-6 py-14">
      <Reveal className="mx-auto max-w-lg">
        <motion.button
          type="button"
          className="group relative block w-full overflow-hidden rounded-xl shadow-md"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          aria-label="Xem video / album"
        >
          <img
            src={images.videoCover}
            alt="Khoảnh khắc cưới"
            className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-black/25 transition group-hover:bg-black/35" />
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-lg backdrop-blur-sm">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </motion.button>
      </Reveal>
    </section>
  )
}
