import { useState } from 'react'
import { rsvp } from '../data/wedding'
import { Reveal } from '../components/Reveal'

type Attendance = 'co' | 'khong'
type GuestSide = 'chu-re' | 'co-dau'

const chibiAnimationStyles = `
  @keyframes chibi-body-wiggle {
    0%, 100% { transform: rotate(-2.5deg); }
    50% { transform: rotate(2.5deg); }
  }

  @keyframes chibi-head-sway {
    0%, 100% { transform: rotate(-6deg); }
    50% { transform: rotate(6deg); }
  }
`

function ChibiCharacter({ type, imageUrl }: { type: 'bride' | 'groom', imageUrl: string }) {
  const isBride = type === 'bride'

  return (
    <div className="relative h-32 w-24" role="img" aria-label={isBride ? 'Chibi cô dâu' : 'Chibi chú rể'}>
      <div className={`absolute inset-x-0 top-[17px] z-10 flex justify-center origin-bottom [animation:chibi-head-sway_1.45s_ease-in-out_infinite] ${isBride ? '[animation-delay:60ms]' : ''}`}>
        <img
          src={imageUrl}
          alt=""
          className="pointer-events-none h-16 w-16 rounded-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 [animation:chibi-body-wiggle_1.55s_ease-in-out_infinite]">
        <div className={`absolute left-1/2 top-14 h-12 w-12 -translate-x-1/2 rounded-t-[14px] ${isBride ? 'bg-[#fff8f0]' : 'bg-[#1f2430]'}`} />
        {isBride ? (
          <div className="absolute left-1/2 top-[5.25rem] h-0 w-0 -translate-x-1/2 border-l-[24px] border-r-[24px] border-t-[40px] border-l-transparent border-r-transparent border-t-[#f4eadb]" />
        ) : (
          <>
            <div className="absolute left-1/2 top-[5.35rem] h-10 w-9 -translate-x-1/2 rounded-b-[10px] bg-[#2b3040]" />
            <div className="absolute left-1/2 top-[5.4rem] h-0 w-0 -translate-x-1/2 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-[#d6b04a]" />
          </>
        )}
        <div className="absolute left-[1.4rem] top-[7.75rem] h-1.5 w-3 rounded-full bg-[#8a6d5a]" />
        <div className="absolute right-[1.4rem] top-[7.75rem] h-1.5 w-3 rounded-full bg-[#8a6d5a]" />
      </div>
    </div>
  )
}

function ChibiThankYouAnimation() {
  return (
    <div className="rounded-md border border-sage/40 bg-sage/5 px-4 py-5 text-center">
      <style>{chibiAnimationStyles}</style>
      <div className="mx-auto mb-4 w-fit rounded-full border border-sage/30 bg-white px-4 py-2 shadow-sm">
        <p className="font-sans text-sm font-semibold tracking-wide text-sage">Hai đứa mình cảm ơn bạn rất nhiều!</p>
      </div>
      <div className="flex items-end justify-center gap-6">
        <div className="[animation-delay:60ms]">
          <ChibiCharacter type="bride" imageUrl="/bridge-sticker.png" />
          <p className="mt-2 text-xs font-medium uppercase tracking-wider text-sage">Bảo Châu</p>
        </div>
        <div className="[animation-delay:120ms]">
          <ChibiCharacter type="groom" imageUrl="/public/bridge-sticker.png" />
          <p className="mt-2 text-xs font-medium uppercase tracking-wider text-sage">Minh Quang</p>
        </div>
      </div>
      <p className="mt-3 animate-pulse font-script text-3xl text-sage">Cảm ơn bạn!</p>
    </div>
  )
}

export function RsvpSection() {
  const paramName = (new URLSearchParams(window.location.search).get('name') ?? '').trim()
  const hasParamName = paramName.length > 0
  const [name, setName] = useState(paramName)
  const [attendance, setAttendance] = useState<Attendance>('co')
  const [guestSide, setGuestSide] = useState<GuestSide>('chu-re')
  const [guestCount, setGuestCount] = useState('1')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false)
  const [submitFeedback, setSubmitFeedback] = useState<string | null>(null)
  const guestName = (hasParamName ? paramName : name).trim()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitFeedback(null)

    if (!guestName) {
      setSubmitFeedback('Vui lòng nhập tên trước khi gửi RSVP.')
      return
    }

    setIsSubmitting(true)
    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: guestName,
          attendance,
          guestSide,
          guestCount: guestCount || '1',
          message: message.trim(),
        }),
      })

      if (!response.ok) {
        setSubmitFeedback('Gửi thất bại. Bạn vui lòng thử lại sau ít phút nhé.')
        return
      }

      setIsSubmitSuccess(true)
      setSubmitFeedback('Đã gửi RSVP thành công. Cảm ơn bạn rất nhiều!')
      setMessage('')
    } catch {
      setSubmitFeedback('Không thể kết nối máy chủ. Bạn vui lòng thử lại sau nhé.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="border-x-2 border-skyline/50 bg-white px-5 py-16 sm:mx-auto sm:max-w-lg sm:border-x">
      <Reveal className="mx-auto max-w-md text-center">
        <h2 className="font-script text-5xl text-neutral-900">{rsvp.title}</h2>
        <p className="mt-3 text-xs font-medium tracking-[0.2em] text-gold">{rsvp.deadline}</p>
        <p className="mx-auto mt-4 max-w-sm font-sans text-sm leading-relaxed text-neutral-700">
          {rsvp.subtitle}
        </p>
      </Reveal>

      <Reveal className="mx-auto mt-8 max-w-md rounded-sm border border-neutral-200 bg-white p-4 shadow-sm">
        <form className="space-y-6 text-left" onSubmit={handleSubmit}>
          <fieldset className="space-y-6" disabled={isSubmitting || isSubmitSuccess}>
            {!hasParamName && <label className="block space-y-2">
              <span className="font-sans text-xl text-neutral-900">
                Bạn sẽ đến chứ?
              </span>
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Tên"
                className="w-full border border-skyline/80 px-3 py-2.5 font-sans text-base text-neutral-800 outline-none transition focus:border-sage disabled:cursor-not-allowed disabled:opacity-60"
              />
            </label>}

            <fieldset className="space-y-3">
              <legend className="font-sans text-lg text-neutral-900">Bạn sẽ đến chứ{guestName ? `, ${guestName}` : ''}?</legend>
              <label className="flex items-center gap-3 text-lg text-neutral-700">
                <input
                  type="radio"
                  name="attendance"
                  checked={attendance === 'co'}
                  onChange={() => setAttendance('co')}
                  className="h-4 w-4 accent-sage"
                />
                Có
              </label>
              <label className="flex items-center gap-3 text-lg text-neutral-700">
                <input
                  type="radio"
                  name="attendance"
                  checked={attendance === 'khong'}
                  onChange={() => setAttendance('khong')}
                  className="h-4 w-4 accent-sage"
                />
                Không
              </label>
            </fieldset>

            <fieldset className="space-y-3">
              <legend className="font-sans text-lg text-neutral-900">Bạn là khách của:</legend>
              <label className="flex items-center gap-3 text-lg text-neutral-700">
                <input
                  type="radio"
                  name="guestSide"
                  checked={guestSide === 'chu-re'}
                  onChange={() => setGuestSide('chu-re')}
                  className="h-4 w-4 accent-sage"
                />
                Chú rể
              </label>
              <label className="flex items-center gap-3 text-lg text-neutral-700">
                <input
                  type="radio"
                  name="guestSide"
                  checked={guestSide === 'co-dau'}
                  onChange={() => setGuestSide('co-dau')}
                  className="h-4 w-4 accent-sage"
                />
                Cô dâu
              </label>
            </fieldset>

            <label className="block space-y-2">
              <span className="font-sans text-lg text-neutral-900">Số khách</span>
              <input
                type="number"
                min={1}
                max={10}
                value={guestCount}
                onChange={(event) => setGuestCount(event.target.value)}
                className="w-full border-b border-neutral-300 px-1 py-2 font-sans text-lg text-neutral-700 outline-none transition focus:border-sage disabled:cursor-not-allowed disabled:opacity-60"
              />
            </label>

            <label className="block space-y-2">
              <span className="font-sans text-lg text-neutral-900">Lời chúc</span>
              <textarea
                rows={3}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="w-full resize-none border-b border-neutral-300 px-1 py-2 font-sans text-base text-neutral-700 outline-none transition focus:border-sage disabled:cursor-not-allowed disabled:opacity-60"
              />
            </label>
          </fieldset>

          <p className="text-center font-sans text-sm text-neutral-700">{rsvp.note}</p>
          {submitFeedback && (
            <p className="text-center font-sans text-sm text-neutral-700">{submitFeedback}</p>
          )}
          {true && <ChibiThankYouAnimation />}

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting || isSubmitSuccess}
              className="bg-sage px-6 py-2.5 font-sans text-base font-semibold uppercase tracking-wide text-white transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? 'Đang gửi...' : isSubmitSuccess ? 'Đã gửi' : 'Gửi'}
            </button>
          </div>
        </form>
      </Reveal>
    </section>
  )
}
