import { useEffect, useRef, useState } from 'react'

type SoundControlProps = {
  canPlay: boolean
  forceMuted?: boolean
}

const DEFAULT_VOLUME = 0.5
const AUDIO_SOURCE = '/wedding-music.mp3'

export function SoundControl({ canPlay, forceMuted = false }: SoundControlProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [volume, setVolume] = useState(DEFAULT_VOLUME)
  const [isMuted, setIsMuted] = useState(false)
  const [hasAudioError, setHasAudioError] = useState(false)

  useEffect(() => {
    const audio = new Audio(AUDIO_SOURCE)
    audio.loop = true
    audio.volume = DEFAULT_VOLUME
    audioRef.current = audio

    const onError = () => setHasAudioError(true)

    audio.addEventListener('error', onError)

    return () => {
      audio.pause()
      audio.currentTime = 0
      audio.removeEventListener('error', onError)
      audioRef.current = null
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = volume
  }, [volume])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.muted = isMuted || forceMuted
  }, [isMuted, forceMuted])

  const effectiveMuted = isMuted || forceMuted

  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !canPlay || hasAudioError) return

    audio
      .play()
      .then(() => undefined)
      .catch(() => undefined)
  }, [canPlay, hasAudioError])

  const toggleMuted = () => {
    setIsMuted((prev) => !prev)
  }

  const onVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextVolume = Number(event.target.value)
    setVolume(nextVolume)
    if (nextVolume > 0 && isMuted) {
      setIsMuted(false)
    }
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 rounded-full border border-white/10 bg-black/45 px-3 py-2 opacity-70 shadow-xl shadow-black/35 backdrop-blur-md transition-all duration-200 hover:opacity-100 focus-within:opacity-100">
      <div className="group flex items-center gap-2">
        <button
          type="button"
          onClick={toggleMuted}
          className="rounded-full p-1 text-white transition hover:scale-105"
          aria-label={effectiveMuted ? 'Bật tiếng' : 'Tắt tiếng'}
          title={effectiveMuted ? 'Bật tiếng' : 'Tắt tiếng'}
          disabled={!canPlay || hasAudioError}
        >
          {effectiveMuted || volume === 0 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.9"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 5 6 9H3v6h3l5 4V5Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="m16 9 5 6m0-6-5 6" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.9"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 5 6 9H3v6h3l5 4V5Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 9.5a4.5 4.5 0 0 1 0 5" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M18.5 7a8 8 0 0 1 0 10" />
            </svg>
          )}
        </button>

        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={onVolumeChange}
          aria-label="Âm lượng"
          className="volume-slider max-w-0 opacity-0 transition-all duration-200 group-hover:ml-1 group-hover:max-w-28 group-hover:opacity-100 group-focus-within:ml-1 group-focus-within:max-w-28 group-focus-within:opacity-100"
          disabled={hasAudioError}
        />
      </div>
      {hasAudioError && (
        <p className="pt-1 text-[10px] text-rose-200">Thiếu file `public/wedding-music.mp3`.</p>
      )}
    </div>
  )
}
