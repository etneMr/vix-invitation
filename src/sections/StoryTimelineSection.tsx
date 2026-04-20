import { motion } from 'framer-motion'
import { storyLead, timeline } from '../data/wedding'
import type { TimelineItem } from '../data/wedding'
import { Reveal } from '../components/Reveal'

function LeafCluster({ side }: { side: 'left' | 'right' }) {
  return (
    <motion.div
      className={`pointer-events-none absolute bottom-0 top-1/2 z-10 h-32 w-24 -translate-y-1/2 bg-gradient-to-b from-emerald-600/25 via-emerald-500/20 to-transparent blur-sm ${
        side === 'right' ? '-right-4 rounded-l-full' : '-left-4 rounded-r-full'
      }`}
      initial={{ opacity: 0, scale: 0.9, x: side === 'right' ? 12 : -12 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden
    />
  )
}

function MilestoneCard({
  date,
  title,
  body,
}: Pick<TimelineItem, 'date' | 'title' | 'body'>) {
  return (
    <article className="rounded-2xl bg-white/90 px-5 py-6 shadow-sm shadow-black/5">
      <p className="font-sans text-[11px] font-semibold uppercase tracking-widest text-neutral-500">
        {date}
      </p>
      <h3 className="mt-2 font-script text-3xl text-neutral-900">{title}</h3>
      <p className="mt-3 font-sans text-sm leading-relaxed text-neutral-600">
        {body}
      </p>
    </article>
  )
}

function CirclePhoto({
  image,
  leaves,
}: {
  image: string
  leaves: 'left' | 'right' | null
}) {
  return (
    <div
      className={`relative mx-auto mt-8 flex justify-center ${
        leaves === 'right' ? 'pr-6' : leaves === 'left' ? 'pl-6' : ''
      }`}
    >
      {leaves === 'right' && <LeafCluster side="right" />}
      {leaves === 'left' && <LeafCluster side="left" />}
      <motion.div
        className="relative h-52 w-52 overflow-hidden rounded-full border-4 border-white shadow-lg"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 280, damping: 20 }}
      >
        <img src={image} alt="" className="h-full w-full object-cover" />
      </motion.div>
    </div>
  )
}

function TimelineBlock({ item }: { item: TimelineItem }) {
  const circle = item.layout === 'circle'
  const imageFirst = circle && item.imageFirst

  return (
    <Reveal key={item.title}>
      {circle && imageFirst && (
        <>
          <CirclePhoto image={item.image} leaves={item.leaves} />
          <div className="mt-8">
            <MilestoneCard date={item.date} title={item.title} body={item.body} />
          </div>
        </>
      )}

      {circle && !imageFirst && (
        <>
          <MilestoneCard date={item.date} title={item.title} body={item.body} />
          <CirclePhoto image={item.image} leaves={item.leaves} />
        </>
      )}

      {item.layout === 'wide' && (
        <>
          <MilestoneCard date={item.date} title={item.title} body={item.body} />
          <motion.div
            className="relative mt-8 overflow-hidden rounded-xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          >
            <img
              src={item.image}
              alt=""
              className="aspect-[16/10] w-full object-cover"
            />
          </motion.div>
        </>
      )}
    </Reveal>
  )
}

export function StoryTimelineSection() {
  return (
    <section className="border-x-2 border-skyline/50 bg-[#f9f9f9] px-4 py-16 sm:mx-auto sm:max-w-lg sm:border-x">
      <Reveal className="text-center">
        <p className="font-sans text-sm font-medium tracking-wide text-gold">
          {storyLead.eyebrow}
        </p>
        <h2 className="mt-2 font-script text-4xl text-neutral-900">
          {storyLead.title}
        </h2>
      </Reveal>

      <div className="mx-auto mt-14 max-w-md space-y-16">
        {timeline.map((item) => (
          <TimelineBlock key={item.title} item={item} />
        ))}
      </div>
    </section>
  )
}
