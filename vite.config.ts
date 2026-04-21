import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

function rsvpDevApiPlugin(): Plugin {
  return {
    name: 'rsvp-dev-api',
    configureServer(server) {
      server.middlewares.use('/api/rsvp', async (req, res, next) => {
        if (req.method !== 'POST') {
          next()
          return
        }

        const chunks: Uint8Array[] = []
        req.on('data', (chunk) => chunks.push(chunk))
        req.on('error', () => {
          res.statusCode = 400
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: 'Invalid request body' }))
        })

        req.on('end', async () => {
          const env = loadEnv(server.config.mode, process.cwd(), '')
          const token = env.TELEGRAM_BOT_TOKEN
          const chatId = env.TELEGRAM_CHAT_ID
          if (!token || !chatId) {
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: 'Missing Telegram env vars' }))
            return
          }

          try {
            const rawBody = Buffer.concat(chunks).toString('utf8')
            const payload = rawBody ? (JSON.parse(rawBody) as Record<string, string>) : {}
            const cleanName = payload.name?.trim()

            if (!cleanName) {
              res.statusCode = 400
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ error: 'Name is required' }))
              return
            }

            const telegramText = [
              '🎉 RSVP mới',
              `👤 Tên: ${cleanName}`,
              `✅ Tham dự: ${payload.attendance === 'co' ? 'Có' : 'Không'}`,
              `👥 Khách của: ${payload.guestSide === 'chu-re' ? 'Chú rể' : 'Cô dâu'}`,
              `🔢 Số khách: ${payload.guestCount || '1'}`,
              `💌 Lời chúc: ${payload.message?.trim() || '(không có)'}`,
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
              const detail = await telegramResponse.text()
              res.statusCode = 502
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ error: 'Telegram request failed', detail }))
              return
            }

            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ ok: true }))
          } catch {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: 'Invalid JSON payload' }))
          }
        })
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), rsvpDevApiPlugin()],
  server: {
    host: true,
    allowedHosts: ['507c-118-71-213-199.ngrok-free.app'],
  },
})
