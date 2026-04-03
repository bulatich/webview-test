import { motion } from "motion/react";

export default function About() {
  return (

        <motion.div
        key={'about'}
        className="relative mx-auto min-h-dvh max-w-sm overflow-hidden bg-neutral-950 text-white"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
            >
              Page 1
            </motion.div>
  );
}