import { Outlet, useLocation } from "react-router";
import { AnimatePresence, motion } from "motion/react";

export default function AppLayout() {
  const location = useLocation();

  return (
    <div className="relative mx-auto min-h-dvh max-w-sm overflow-hidden bg-neutral-950 text-white">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          className="absolute inset-0"
          initial={{ x: "100%", opacity: 1 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: "-8%", opacity: 0.98 }}
          transition={{
            x: { type: "spring", stiffness: 380, damping: 34 },
            opacity: { duration: 0.18 },
          }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}