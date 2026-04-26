import { motion } from 'framer-motion'
import { images } from '../data/wedding'
import { Reveal } from '../components/Reveal'

type VideoSectionProps = {
  onVideoPlayingChange?: (isPlaying: boolean) => void
}

export function VideoSection({ onVideoPlayingChange }: VideoSectionProps) {
  return (
    <section className="bg-[#faf8f5] px-6 py-14">
      <Reveal className="mx-auto max-w-lg">
        <motion.div
          className="overflow-hidden rounded-xl shadow-md"
          whileHover={{ scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 280, damping: 24 }}
        >
          <video
            src={images.videoCover}
            controls
            preload="metadata"
            playsInline
            onPlay={() => onVideoPlayingChange?.(true)}
            onPause={() => onVideoPlayingChange?.(false)}
            onEnded={() => onVideoPlayingChange?.(false)}
            className="aspect-video w-full bg-black object-cover"
          >
            Trình duyệt của bạn không hỗ trợ phát video.
          </video>
        </motion.div>
      </Reveal>
    </section>
  )
}
