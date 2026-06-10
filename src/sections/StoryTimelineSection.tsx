import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { storyLead, timeline } from '../data/wedding'
import type { TimelineItem } from '../data/wedding'
import { Reveal } from '../components/Reveal'

function LeafCluster({ side }: { side: 'left' | 'right' }) {
  return (
    <motion.div
      className={`pointer-events-none absolute bottom-0 top-1/2 z-10 h-32 w-24 -translate-y-1/2 bg-gradient-to-b from-[#66b3ff]/25 via-[#66b3ff]/20 to-transparent blur-sm ${
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
      <p className="font-sans text-[11px] font-semibold uppercase tracking-widest text-[#1F3A5F]">
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

function WidePhoto({ image }: { image: string }) {
  return (
    <motion.div
      className="relative mt-8 overflow-hidden rounded-xl"
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
    >
      <img src={image} alt="" className="aspect-[16/10] w-full object-cover" />
    </motion.div>
  )
}

function PreviewStoryImage({ item }: { item: TimelineItem }) {
  return (
    <Reveal>
      {item.layout === 'wide' ? (
        <WidePhoto image={item.image} />
      ) : (
        <CirclePhoto image={item.image} leaves={item.leaves} />
      )}
    </Reveal>
  )
}

function PreviewStoryContent({ item }: { item: TimelineItem }) {
  return (
    <Reveal>
      <MilestoneCard date={item.date} title={item.title} body={item.body} />
    </Reveal>
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
          <WidePhoto image={item.image} />
        </>
      )}
    </Reveal>
  )
}

export function StoryTimelineSection() {
  const [expanded, setExpanded] = useState(false)
  const previewIndex = timeline.findIndex((item) => item.imageFirst)
  const resolvedPreviewIndex = previewIndex >= 0 ? previewIndex : 0
  const previewItem = timeline[resolvedPreviewIndex]
  const hiddenItems = timeline.filter((_, index) => index !== resolvedPreviewIndex)
  const hasHiddenContent = Boolean(previewItem)

  return (
    <section className="border-x-2 border-skyline/50 bg-[#f9f9f9] px-4 py-16 sm:mx-auto sm:max-w-lg sm:border-x">
      <Reveal className="text-center">
        <p className="font-sans text-[#1F3A5F]/90 font-medium tracking-wide text-3xl">
          {storyLead.eyebrow}
        </p>
        <h2 className="mt-2 font-script text-4xl text-neutral-900">
          {storyLead.title}
        </h2>
      </Reveal>

      <div className="mx-auto mt-14 max-w-md space-y-16">
        {previewItem && <PreviewStoryImage item={previewItem} />}

        <AnimatePresence initial={false}>
          {expanded && previewItem && (
            <motion.div
              key="story-collapse"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="space-y-16 pt-10">
                <PreviewStoryContent item={previewItem} />
                {hiddenItems.map((item) => (
                  <TimelineBlock key={item.title} item={item} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {hasHiddenContent && (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="group inline-flex items-center gap-2 rounded-full border border-[#66b3ff]/60 bg-white/70 px-5 py-2 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#66b3ff]/80 shadow-sm shadow-black/5 transition hover:bg-[#66b3ff]/60 hover:text-white"
          >
            <span>
              {expanded ? 'Thu gọn' : 'Xem thêm câu chuyện'}
            </span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              aria-hidden
            >
              <polyline points="6 9 12 15 18 9" />
            </motion.svg>
          </button>
        </div>
      )}
    </section>
  )
}
