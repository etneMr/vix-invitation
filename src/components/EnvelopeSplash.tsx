import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { couple } from '../data/wedding'

type EnvelopeSplashProps = {
  onOpenComplete: () => void
}

export function EnvelopeSplash({ onOpenComplete }: EnvelopeSplashProps) {
  const [isOpened, setIsOpened] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const coupleSlides = [
  '/bg1.JPG',
  '/bg2.JPG',
  '/bg3.JPG',
  ]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % coupleSlides.length)
    }, 9000)

    return () => {
      window.clearInterval(timer)
    }
  }, [coupleSlides.length])

  const handleOpen = () => {
    if (isOpened) return
    setIsOpened(true)
    window.setTimeout(onOpenComplete, 1150)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-b from-rose-50 via-white to-amber-50 px-6">
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={`bg-${coupleSlides[activeImageIndex]}`}
            src={coupleSlides[activeImageIndex]}
            alt={couple.short}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-white/58 backdrop-blur-[1px]" />
      </div>

      <motion.button
        type="button"
        onClick={handleOpen}
        disabled={isOpened}
        onHoverStart={() => {
          if (!isOpened) setIsHovered(true)
        }}
        onHoverEnd={() => setIsHovered(false)}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        whileHover={!isOpened ? { y: -6, scale: 1.015 } : undefined}
        className="group relative z-10 w-full max-w-sm cursor-pointer focus:outline-none disabled:cursor-default"
      >
        <motion.div
          animate={isOpened ? { scale: 0.96, y: 16, opacity: 0 } : { scale: 1, y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative pt-20 transition-transform duration-500"
        >
          <motion.div
            animate={
              isOpened
                ? { rotate: 0, boxShadow: '0 24px 56px rgba(251, 113, 133, 0.35)' }
                : isHovered
                  ? { rotate: 0.9, boxShadow: '0 24px 56px rgba(251, 113, 133, 0.42)' }
                  : { rotate: 0, boxShadow: '0 22px 44px rgba(251, 113, 133, 0.3)' }
            }
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="relative h-56 rounded-2xl border border-rose-200 bg-rose-200 [perspective:1200px]"
          >
            <motion.div
              animate={
                isOpened
                  ? {
                    y: [8, -10, -96, -132],
                    rotateX: [14, 6, 0, 0],
                    opacity: [0.88, 1, 1, 1],
                    scale: [0.97, 1, 1.03, 1.03],
                  }
                  : isHovered
                    ? { y: -45, rotateX: 2, opacity: 1, scale: 1 }
                    : { y: 8, rotateX: 14, opacity: 0.88, scale: 1.02 }
              }
              transition={
                isOpened
                  ? { duration: 1.1, times: [0, 0.26, 0.72, 1], ease: [0.22, 1, 0.36, 1] }
                  : isHovered
                    ? { duration: 0.45, delay: 0.12, ease: [0.22, 1, 0.36, 1] }
                    : { duration: 0.4, ease: 'easeOut' }
              }
              style={{ transformOrigin: 'bottom center', zIndex: 10 }}
              className="absolute inset-x-6 top-0 rounded-md border-2 border-amber-100 bg-amber-50/95 px-6 py-7 text-center shadow-lg shadow-rose-100/70"
            >
              <p className="text-[11px] uppercase tracking-[0.22em] text-rose-400">Wedding Invitation</p>
              <p className="mt-2 font-script text-4xl text-rose-500">{couple.short}</p>
              <p className="mt-1 text-xs text-neutral-500">Let&apos;s celebrate with us</p>
            </motion.div>

            <div className="absolute inset-x-3 top-3 bottom-14 overflow-hidden rounded-md">
              <AnimatePresence mode="wait">
                <motion.img
                  key={coupleSlides[activeImageIndex]}
                  src={coupleSlides[activeImageIndex]}
                  alt={couple.short}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.6, ease: 'easeInOut' }}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-rose-900/20 via-transparent to-rose-100/15" />
            </div>

            <motion.div
              style={{ transformOrigin: 'top center' }}
              className="absolute inset-x-0 top-[-110px] z-5 h-28 origin-top drop-shadow-[0_10px_14px_rgba(244,63,94,0.24)] [backface-visibility:visible] [transform-style:preserve-3d]"
            >
              <div className="h-full w-full bg-gradient-to-b from-rose-300 via-rose-400 to-rose-500 [clip-path:polygon(0_100%,100%_100%,50%_0)]" />
            </motion.div>

            <motion.div
              style={{ transformOrigin: 'top center' }}
              className="absolute inset-x-0 top-0 z-5 h-28 origin-top drop-shadow-[0_10px_14px_rgba(244,63,94,0.24)] [backface-visibility:visible] [transform-style:preserve-3d]"
            >
              <div className="h-full w-full bg-gradient-to-b from-rose-300 via-rose-200 to-rose-100 [clip-path:polygon(0_0,100%_0,50%_100%)]" />
            </motion.div>
            <div className="absolute inset-0 z-1  0 bg-gradient-to-b from-rose-100/20 to-rose-300/35" />
            <div className="absolute inset-x-0 bottom-0 z-30 h-32 border border-rose-100 bg-rose-300 [clip-path:polygon(0_100%,100%_100%,50%_0)]" />
            <div className="absolute inset-y-0 left-0 z-30 w-1/2 border border-rose-100 bg-rose-300 [clip-path:polygon(0_0,100%_50%,0_100%)]" />
            <div className="absolute inset-y-0 right-0 z-30 w-1/2 bg-rose-300 [clip-path:polygon(100%_0,0_50%,100%_100%)]" />
            <motion.div
              animate={isHovered && !isOpened ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="pointer-events-none absolute inset-0 z-40 bg-gradient-to-tr from-white/0 via-white/20 to-white/0"
            />
            <motion.div
              animate={isOpened ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.72, ease: 'easeOut' }}
              className="pointer-events-none absolute inset-x-8 top-2 z-0 h-16 rounded-b-full bg-gradient-to-b from-rose-800/14 to-transparent blur-md"
            />
            <AnimatePresence>
              {isOpened && (
                <>
                  <motion.span
                    initial={{ opacity: 0, y: 10, x: -14, scale: 0.8 }}
                    animate={{ opacity: 1, y: -34, x: -22, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    className="pointer-events-none absolute left-1/2 top-4 z-50 text-sm"
                  >
                    💖
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 10, x: 10, scale: 0.75 }}
                    animate={{ opacity: 1, y: -42, x: 20, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.52, delay: 0.04, ease: 'easeOut' }}
                    className="pointer-events-none absolute left-1/2 top-6 z-50 text-xs"
                  >
                    ❤️
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 8, x: 0, scale: 0.7 }}
                    animate={{ opacity: 1, y: -54, x: 0, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.56, delay: 0.08, ease: 'easeOut' }}
                    className="pointer-events-none absolute left-1/2 top-4 z-50 text-[10px]"
                  >
                    💕
                  </motion.span>
                </>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        <p className="mt-8 text-center text-xs uppercase tracking-[0.24em] text-neutral-500">
          {isOpened ? 'Đang mở thiệp...' : 'Click vào phong bì'}
        </p>
      </motion.button>
    </div>
  )
}
