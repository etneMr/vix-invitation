import { useRef } from 'react'
import { motion } from 'framer-motion'
import { galleryPhotos } from '../data/wedding'
import { CollapsibleSection } from '../components/CollapsibleSection'
import { Reveal } from '../components/Reveal'

export function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null)

  const scrollToSectionTop = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section ref={sectionRef} className="bg-white px-4 py-16">
      <Reveal className="mx-auto max-w-lg text-center">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-[#66b3ff]/90   ">
          Khoảnh khắc
        </p>
        <h2 className="mt-2 font-script text-4xl text-neutral-900">Album ảnh</h2>
        <p className="mx-auto mt-2 max-w-xs font-sans text-xs text-[#1F3A5F]">
          Một vài hình ảnh trước ngày vui — sẽ được cập nhật thêm sau lễ.
        </p>
      </Reveal>

      <CollapsibleSection
        className="mx-auto mt-10 max-w-lg"
        contentClassName="grid grid-cols-2 gap-2 sm:gap-3"
        previewCount={2}
        expandLabel="Xem thêm ảnh"
        collapseLabel="Thu gọn ảnh"
        onCollapse={scrollToSectionTop}
      >
        {galleryPhotos.map((src, i) => (
          <Reveal key={src}>
            <motion.div
              className="overflow-hidden rounded-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 320, damping: 22 }}
            >
              <img
                src={src}
                alt={`Ảnh album ${i + 1}`}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </Reveal>
        ))}
      </CollapsibleSection>
    </section>
  )
}
