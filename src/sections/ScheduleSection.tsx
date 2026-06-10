import { motion } from 'framer-motion'
import { schedule } from '../data/wedding'
import { Reveal } from '../components/Reveal'

function EventBlock({
  title,
  image,
  dateLine,
  time,
  venue,
  address,
  phone,
  mapsUrl,
}: (typeof schedule)[number]) {
  return (
    <Reveal className="text-center">
      <motion.div
        className="mx-auto h-44 w-44 overflow-hidden rounded-full border-4 border-white shadow-xl shadow-black/10"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300, damping: 18 }}
      >
        <img src={image} alt="" className="h-full w-full object-cover" />
      </motion.div>
      <div className="mt-6 rounded-sm bg-[#66b3ff]/90 px-4 py-2.5 shadow-inner">
        <h3 className="font-script text-2xl text-white">{title}</h3>
      </div>
      <div className="mt-5 space-y-1.5 font-sans text-sm text-[#1F3A5F] ">
        <p>{dateLine}</p>
        <p className="font-medium text-neutral-900">{time}</p>
        <p className="font-medium text-neutral-800">{venue}</p>
        <p className="mx-auto max-w-xs text-xs leading-relaxed text-[#1F3A5F]">
          {address}
        </p>
        <p className="text-xs text-[#1F3A5F]">{phone}</p>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-block pt-2 text-[#66b3ff]/70 underline decoration-[#66b3ff] underline-offset-4 hover:text-[#66b3ff]/100"
        >
          Xem vị trí
        </a>
      </div>
    </Reveal>
  )
}

export function ScheduleSection() {
  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-lg space-y-20">
        {schedule.map((block) => (
          <EventBlock key={block.title} {...block} />
        ))}
      </div>
    </section>
  )
}
