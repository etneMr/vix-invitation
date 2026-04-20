import { motion } from 'framer-motion'
import { galleryPhotos } from '../data/wedding'
import { Reveal } from '../components/Reveal'

export function GallerySection() {
  return (
    <section className="bg-white px-4 py-16">
      <Reveal className="mx-auto max-w-lg text-center">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          Khoảnh khắc
        </p>
        <h2 className="mt-2 font-script text-4xl text-neutral-900">Album ảnh</h2>
        <p className="mx-auto mt-2 max-w-xs font-sans text-xs text-neutral-500">
          Một vài hình ảnh trước ngày vui — sẽ được cập nhật thêm sau lễ.
        </p>
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 gap-2 sm:gap-3">
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
      </div>
    </section>
  )
}
