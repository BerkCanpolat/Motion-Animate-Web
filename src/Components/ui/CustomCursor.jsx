import React from 'react'
import { motion, useMotionValue, AnimatePresence,useSpring } from 'motion/react'

const CustomCursor = ({ showCursor, cursorText, mouseX, mouseY }) => {
  return (
    <>
        {showCursor && (
  <motion.div
    className="fixed pointer-events-none z-9999"
    style={{
      left: mouseX,
      top: mouseY,
    }}
  >
    <div className="flex items-center gap-3">
      <motion.div
        animate={{ rotate: -20 }}
        className="
          w-0 h-0
          border-t-12
          border-b-12
          border-l-20
          border-t-transparent
          border-b-transparent
          border-l-blue-600
        "
      />

      <div
        className="
          bg-blue-600
          text-white
          px-8
          py-4
          rounded-full
          text-lg
          whitespace-nowrap
        "
      >
        {cursorText}
      </div>
    </div>
  </motion.div>
)}
    </>
  )
}

export default CustomCursor