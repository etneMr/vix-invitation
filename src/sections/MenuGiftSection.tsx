import { motion } from 'framer-motion'
import { gift } from '../data/wedding'
import {
  Reveal,
  // RevealItem,
  // RevealStagger,
} from '../components/Reveal'

function FoliageCorner({ position }: { position: 'tr' | 'bl' }) {
  const isTr = position === 'tr'
  return (
    <motion.div
      className={`pointer-events-none absolute h-36 w-36 rounded-full bg-gradient-to-br from-[#66b3ff]-700/35 via-emerald-600/15 to-transparent blur-md ${isTr ? '-right-10 -top-10' : '-bottom-10 -left-10'
        }`}
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden
    />
  )
}

function QrPlaceholder({ qrCodeUrl }: { qrCodeUrl: string }) {
  return (
    <div className="mx-auto flex aspect-square w-44 items-center justify-center rounded-lg border-2 border-dashed border-[#66b3ff]/60 bg-neutral-50 text-center font-sans text-xs text-neutral-400">
      <img src={qrCodeUrl} alt="QR Code" className="p-1 w-full h-full object-contain" />
    </div>
  )
}

export function MenuGiftSection() {
  return (
    <section className="relative overflow-hidden border-x-2 border-skyline/50 bg-white px-5 pb-20 pt-4 sm:mx-auto sm:max-w-lg sm:border-x">
      <FoliageCorner position="tr" />
{/* 
      <Reveal className="relative z-[1] text-center">
        <motion.div
          className="mx-auto mt-6 h-14 max-w-xs bg-gradient-to-r from-transparent via-emerald-700/30 to-transparent"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        />
        <motion.h2
          className="-mt-8 font-script text-4xl text-neutral-900 sm:text-5xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Thực đơn đón tiếp
        </motion.h2>
        <p className="mt-2 font-sans text-[10px] font-semibold tracking-[0.4em] text-neutral-600">
          QUANG & CHÂU
        </p>
      </Reveal>

      <RevealStagger className="relative z-[1] mx-auto mt-12 max-w-md space-y-10">
        {menuCategories.map((cat) => (
          <RevealItem key={cat.name}>
            <h3 className="font-serif text-sm font-semibold tracking-[0.2em] text-gold">
              {cat.name}
            </h3>
            <ul className="mt-3 space-y-2 font-sans text-sm text-neutral-800">
              {cat.items.map((line) => (
                <motion.li
                  key={line}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  {line}
                </motion.li>
              ))}
            </ul>
          </RevealItem>
        ))}
      </RevealStagger> */}

      <FoliageCorner position="bl" />

      <Reveal className="relative z-[1] mx-auto mt-20 max-w-md text-center">
        <p className="font-sans text-xs font-medium text-[#66b3ff]/100">{gift.hint}</p>
        <h3 className="mt-2 font-script text-3xl text-[#1F3A5F]">
          {gift.title}
        </h3>
        <p className="mx-auto mt-4 max-w-xs font-sans text-xs leading-relaxed ">
          {gift.note}
        </p>

        <div className="mt-10 space-y-12">
          {gift.accounts.map((acc) => (
            <div
              key={acc.account}
              className="rounded-2xl border border-[#66b3ff]/60 bg-[#66b3ff]/5 px-4 py-6"
            >
              <p className="font-sans text-sx font-semibold uppercase tracking-wide text-[#66b3ff]/80">
                {acc.label}
              </p>
              <p className="mt-3 font-sans text-base text-neutral-800">
                Số tài khoản:{' '}
                <span className="font-medium">{acc.account}</span>
              </p>
              <p className="mt-2 inline-block rounded border border-[#66b3ff]/60 px-4 py-2 font-sans font-bold text-[13px] text-neutral-900">
                Chủ TK: {acc.holder}  
              </p>
              <p className="mt-2 font-sans text-sm text-neutral-700">
                Ngân hàng: {acc.bank}
              </p>
              <div className="mt-6">
                <QrPlaceholder qrCodeUrl={acc.qrPlaceholder} />
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
