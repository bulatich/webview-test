import { motion } from "motion/react"
import { useRef, useState } from "react"

const slides = [
  { id: 1, title: "One" },
  { id: 2, title: "Two" },
  { id: 3, title: "Three" },
]

const SLIDE_WIDTH = 320

export const Banner = () => {
  const [index, setIndex] = useState(0)
  const trackRef = useRef(null)


  function clamp(value: number, min: number, max: number) {
    return Math.max(min, Math.min(value, max))
  }
    return (
        <div >
          <div
          className="touch-pan-y overflow-hidden">
             <motion.div
              
        ref={trackRef}
        drag="x"
        dragConstraints={{
          left: -((slides.length - 1) * SLIDE_WIDTH),
          right: 0,
        }}
        dragElastic={0.03}
        animate={{ x: -index * SLIDE_WIDTH }}
        transition={{ type: "spring", stiffness: 380, damping: 38 }}
        onDragEnd={(_, info) => {
          const offset = info.offset.x
          const velocity = info.velocity.x

          let nextIndex = index

          // свайп по расстоянию
          if (offset < -60) nextIndex = index + 1
          if (offset > 60) nextIndex = index - 1

          // или быстрый flick
          if (velocity < -500) nextIndex = index + 1
          if (velocity > 500) nextIndex = index - 1

          setIndex(clamp(nextIndex, 0, slides.length - 1))
        }}
        style={{
          display: "flex",
          cursor: "grab",
        }}
        whileDrag={{
          cursor: "grabbing",
        }}
      >
        {slides.map((slide) => (
          <div
          className="min-w-[358px] min-h-[240px] 
          w-full bg-linear-to-r from-[#0846ED] to-[#859AFF] rounded-[20px] mr-10"
            key={slide.id}
            style={{
              width: SLIDE_WIDTH,
              userSelect: "none",
            }}
          >
            <div className="p-4">
           <div className="text-[#fff] text-xs">SUMMER EDITION</div>
           <div className="text-[#fff] text-4xl font-bold break-all w-44.6 mt-4">The New Standard of Minimal</div>
           <button className="rounded-xl w-30 bg-[#fff] mt-4">
            <div className="p-2">SHOP NOW</div>
           </button>
</div>
          </div>
        ))}
      </motion.div>
          </div>
        </div>
        
    )
}