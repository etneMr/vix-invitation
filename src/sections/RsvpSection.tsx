import { useState, type FormEvent } from 'react'
import { rsvp } from '../data/wedding'
import { Reveal } from '../components/Reveal'

type Attendance = 'co' | 'khong'
type GuestSide = 'chu-re' | 'co-dau'

export function RsvpSection() {
  const paramName = (new URLSearchParams(window.location.search).get('name') ?? '').trim()
  const hasParamName = paramName.length > 0
  const [name, setName] = useState(paramName)
  const [attendance, setAttendance] = useState<Attendance>('co')
  const [guestSide, setGuestSide] = useState<GuestSide>('chu-re')
  const [guestCount, setGuestCount] = useState('1')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitFeedback, setSubmitFeedback] = useState<string | null>(null)
  const guestName = (hasParamName ? paramName : name).trim()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
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
          {!hasParamName && <label className="block space-y-2">
            <span className="font-sans text-xl text-neutral-900">
              Bạn sẽ đến chứ?
            </span>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Tên"
              className="w-full border border-skyline/80 px-3 py-2.5 font-sans text-base text-neutral-800 outline-none transition focus:border-sage"
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
              className="w-full border-b border-neutral-300 px-1 py-2 font-sans text-lg text-neutral-700 outline-none transition focus:border-sage"
            />
          </label>

          <label className="block space-y-2">
            <span className="font-sans text-lg text-neutral-900">Lời chúc</span>
            <textarea
              rows={3}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="w-full resize-none border-b border-neutral-300 px-1 py-2 font-sans text-base text-neutral-700 outline-none transition focus:border-sage"
            />
          </label>

          <p className="text-center font-sans text-sm text-neutral-700">{rsvp.note}</p>
          {submitFeedback && (
            <p className="text-center font-sans text-sm text-neutral-700">{submitFeedback}</p>
          )}

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-sage px-6 py-2.5 font-sans text-base font-semibold uppercase tracking-wide text-white transition hover:brightness-95"
            >
              {isSubmitting ? 'Đang gửi...' : 'Gửi'}
            </button>
          </div>
        </form>
      </Reveal>
    </section>
  )
}
