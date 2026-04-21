type Attendance = 'co' | 'khong'
type GuestSide = 'chu-re' | 'co-dau'

type RsvpPayload = {
  name?: string
  attendance?: Attendance
  guestSide?: GuestSide
  guestCount?: string
  message?: string
}

type ApiRequest = {
  method?: string
  body?: unknown
}

type ApiResponse = {
  status: (code: number) => ApiResponse
  json: (payload: unknown) => void
}

function parseRequestBody(body: unknown): RsvpPayload {
  if (typeof body === 'string') {
    try {
      return JSON.parse(body) as RsvpPayload
    } catch {
      return {}
    }
  }

  if (body && typeof body === 'object') {
    return body as RsvpPayload
  }

  return {}
}

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID
  if (!token || !chatId) {
    res.status(500).json({ error: 'Missing Telegram environment variables' })
    return
  }

  const { name, attendance, guestSide, guestCount, message } = parseRequestBody(req.body)
  const cleanName = name?.trim() ?? ''
  if (!cleanName) {
    res.status(400).json({ error: 'Name is required' })
    return
  }

  const telegramText = [
    '🎉 RSVP mới',
    `👤 Tên: ${cleanName}`,
    `✅ Tham dự: ${attendance === 'co' ? 'Có' : 'Không'}`,
    `👥 Khách của: ${guestSide === 'chu-re' ? 'Chú rể' : 'Cô dâu'}`,
    `🔢 Số khách: ${guestCount || '1'}`,
    `💌 Lời chúc: ${message?.trim() || '(không có)'}`,
  ].join('\n')

  const telegramResponse = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: telegramText,
    }),
  })

  if (!telegramResponse.ok) {
    const errorText = await telegramResponse.text()
    res.status(502).json({ error: 'Telegram request failed', detail: errorText })
    return
  }

  res.status(200).json({ ok: true })
}
