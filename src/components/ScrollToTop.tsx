import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 22 }}
          className="fixed right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-lg bg-violet-600 text-white shadow-lg shadow-violet-900/25"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Lên đầu trang"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
