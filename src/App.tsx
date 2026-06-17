import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { couple } from './data/wedding'
import { EnvelopeSplash } from './components/EnvelopeSplash'
import { ScrollToTop } from './components/ScrollToTop'
import { SoundControl } from './components/SoundControl'
import { HeroSection } from './sections/HeroSection'
import { CountdownSection } from './sections/CountdownSection'
import { CoupleIntroSection } from './sections/CoupleIntroSection'
import { FormalInviteSection } from './sections/FormalInviteSection'
import { VideoSection } from './sections/VideoSection'
import { StoryTimelineSection } from './sections/StoryTimelineSection'
import { GallerySection } from './sections/GallerySection'
import { RsvpSection } from './sections/RsvpSection'
import { ScheduleSection } from './sections/ScheduleSection'
import { MenuGiftSection } from './sections/MenuGiftSection'
import { FooterSection } from './sections/FooterSection'

function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
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

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
  }, [])

  useEffect(() => {
    if (isEnvelopeOpen) return

    const { body, documentElement } = document

    window.scrollTo(0, 0)

    const previousBodyStyle = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      touchAction: body.style.touchAction,
    }
    const previousHtmlStyle = {
      overflow: documentElement.style.overflow,
      scrollBehavior: documentElement.style.scrollBehavior,
    }

    body.style.overflow = 'hidden'
    body.style.position = 'fixed'
    body.style.top = '0'
    body.style.width = '100%'
    body.style.touchAction = 'none'
    documentElement.style.overflow = 'hidden'
    documentElement.style.scrollBehavior = 'auto'

    return () => {
      body.style.overflow = previousBodyStyle.overflow
      body.style.position = previousBodyStyle.position
      body.style.top = previousBodyStyle.top
      body.style.width = previousBodyStyle.width
      body.style.touchAction = previousBodyStyle.touchAction
      documentElement.style.overflow = previousHtmlStyle.overflow
      documentElement.style.scrollBehavior = previousHtmlStyle.scrollBehavior
      window.scrollTo(0, 0)
    }
  }, [isEnvelopeOpen])

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
    <div className="relative min-h-svh font-sans text-neutral-800 antialiased">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={`couple-bg-${coupleSlides[activeImageIndex]}`}
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
          <VideoSection onVideoPlayingChange={setIsVideoPlaying} />
          <StoryTimelineSection />
          <GallerySection />
          <RsvpSection />
          <ScheduleSection />
          <MenuGiftSection />
          <FooterSection />
        </motion.main>
      </div>
      <SoundControl canPlay={isEnvelopeOpen} forceMuted={isVideoPlaying} />
    </div>
  )
}

export default App
