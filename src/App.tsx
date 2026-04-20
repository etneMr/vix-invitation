import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { galleryPhotos, images } from './data/wedding'
import { EnvelopeSplash } from './components/EnvelopeSplash'
import { ScrollToTop } from './components/ScrollToTop'
import { HeroSection } from './sections/HeroSection'
import { CountdownSection } from './sections/CountdownSection'
import { CoupleIntroSection } from './sections/CoupleIntroSection'
import { FormalInviteSection } from './sections/FormalInviteSection'
import { VideoSection } from './sections/VideoSection'
import { StoryTimelineSection } from './sections/StoryTimelineSection'
import { GallerySection } from './sections/GallerySection'
import { ScheduleSection } from './sections/ScheduleSection'
import { MenuGiftSection } from './sections/MenuGiftSection'
import { FooterSection } from './sections/FooterSection'

function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false)
  const [activeBgIndex, setActiveBgIndex] = useState(0)

  const invitationBgSlides = [
    images.countdownBg,
    galleryPhotos[0],
    galleryPhotos[2],
    galleryPhotos[5],
  ]

  useEffect(() => {
    if (!isEnvelopeOpen) return

    const timer = window.setInterval(() => {
      setActiveBgIndex((prev) => (prev + 1) % invitationBgSlides.length)
    }, 7000)

    return () => {
      window.clearInterval(timer)
    }
  }, [isEnvelopeOpen, invitationBgSlides.length])

  useEffect(() => {
    let lastSpawnAt = 0

    const onMouseMove = (event: MouseEvent) => {
      const now = performance.now()
      if (now - lastSpawnAt < 45) return
      lastSpawnAt = now

      const heart = document.createElement('span')
      heart.className = 'heart-trail'
      heart.textContent = '❤'

      const randomOffsetX = (Math.random() - 0.5) * 12
      const randomOffsetY = (Math.random() - 0.5) * 10
      const randomSize = 10 + Math.random() * 8

      heart.style.left = `${event.clientX + randomOffsetX}px`
      heart.style.top = `${event.clientY + randomOffsetY}px`
      heart.style.fontSize = `${randomSize}px`

      document.body.appendChild(heart)
      window.setTimeout(() => {
        heart.remove()
      }, 950)
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.querySelectorAll('.heart-trail').forEach((el) => el.remove())
    }
  }, [])

  return (
    <div className="relative min-h-svh bg-white font-sans text-neutral-800 antialiased">
      <AnimatePresence mode="wait">
        {isEnvelopeOpen && (
          <motion.div
            key="invitation-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={`invitation-bg-slide-${activeBgIndex}`}
                src={invitationBgSlides[activeBgIndex]}
                alt=""
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1.14 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2, ease: 'easeInOut' }}
                className="absolute inset-0 h-full w-full object-cover blur-md"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-white/65 backdrop-blur-xl" />
            <div className="absolute inset-0 bg-gradient-to-b from-rose-50/70 via-white/72 to-amber-50/75" />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!isEnvelopeOpen && (
          <motion.div
            key="envelope-splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <EnvelopeSplash onOpenComplete={() => setIsEnvelopeOpen(true)} />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative z-10">
        <ScrollToTop />
      <motion.main
        initial={{ opacity: 0, y: 24, scale: 0.99 }}
        animate={isEnvelopeOpen ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 24, scale: 0.99 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-lg shadow-sm shadow-black/5 lg:max-w-lg lg:border-x lg:border-neutral-200/80"
      >
        <HeroSection />
        <CountdownSection />
        <CoupleIntroSection />
        <FormalInviteSection />
        <VideoSection />
        <StoryTimelineSection />
        <GallerySection />
        <ScheduleSection />
        <MenuGiftSection />
        <FooterSection />
      </motion.main>
      </div>
    </div>
  )
}

export default App
