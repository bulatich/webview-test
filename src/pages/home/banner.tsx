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
        <div>
        <div >
          <div
          style={{
        width: SLIDE_WIDTH,
        overflow: "hidden",
        touchAction: "pan-y", // чтобы вертикальный скролл страницы не ломался
      }}
         
           
          >
             <motion.div
              className="max-w-[358px] min-h-[240px] w-full bg-linear-to-r from-[#0846ED] to-[#859AFF] rounded-[20px] flex items-center justify-center"
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
            key={slide.id}
            style={{
              width: SLIDE_WIDTH,
              flex: "0 0 320px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              userSelect: "none",
            }}
          >
            {slide.title}
          </div>
        ))}
      </motion.div>
          </div>
        </div>
        </div>
    )
}