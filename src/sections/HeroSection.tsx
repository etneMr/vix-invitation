import { motion } from 'framer-motion'
import { couple, hero } from '../data/wedding'
import { Reveal } from '../components/Reveal'
function FloatingHearts() {
  // const hearts = [
  //   { x: '8%', y: '18%', d: 0 },
  //   { x: '88%', y: '22%', d: 0.3 },
  //   { x: '18%', y: '74%', d: 0.5 },
  //   { x: '78%', y: '68%', d: 0.2 },
  //   { x: '48%', y: '8%', d: 0.7 },
  // ]
  return (
    <>

    </>
  )
}

function Flourish({ flip }: { flip?: boolean }) {
  return (
    <motion.svg
      viewBox="0 0 200 24"
      className={`mx-auto mb-3 mt-2 h-6 w-48 text-neutral-800 ${flip ? 'scale-x-[-1]' : ''}`}
      aria-hidden
    >
      <motion.path
        d="M4 14 Q 50 4 100 14 T 196 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.svg>
  )
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#faf8f5] px-6 pb-14 pt-10">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 20% 20%, rgba(200,220,180,0.35), transparent), radial-gradient(ellipse 60% 40% at 85% 30%, rgba(255,230,180,0.3), transparent)',
        }}
      />
      <Reveal className="relative mx-auto flex max-w-lg flex-col items-center text-center">
        {/* <WreathGraphic /> */}
        {/* <motion.h1
          className="mt-6 font-script text-6xl font-semibold tracking-tight text-[#1F3A5F] sm:text-5xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {couple.short}
        </motion.h1> */}
        <FloatingHearts />
                {/* <Flourish />
                <div className="relative z-[1] flex flex-wrap items-baseline justify-center gap-x-2 gap-y-0">
                  <span className="font-script text-5xl text-neutral-900 sm:text-3xl">
                    Save
                  </span>
                  <span className="font-script text-2xl text-neutral-700 sm:text-2xl">
                    the
                  </span>
                  <span className="font-script text-5xl text-neutral-900 sm:text-3xl">
                    Date
                  </span>
                </div>
                <Flourish flip /> */}
              
                <img width={150} height={150} src='/public/saveTheDate.png' className='py-12 pt-0'></img>
        
                <p className = "text-[#1F3A5F]/90">
                <p className="mt-5 font-script text-4xl sm:text-7xl ">
                  {couple.displayPair1}
                </p>
                <p className="mt-2 font-script text-4xl sm:text-4xl">
                  {couple.displayPair2}
                </p>
                <p className="mt-2 font-script text-4xl sm:text-7xl">
                  {couple.displayPair3}
                </p>
                </p>
        
        <p className="mt-3 max-w-sm font-sans text-sm text-neutral-600">
          {hero.sub}
        </p>
      </Reveal>
    </section>
  )
}
