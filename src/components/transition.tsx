import { motion } from "motion/react";

function Transition({ children }: any) {
  return (
    <>
      {children}
      <motion.div
        className="fixed top-0 w-full h-screen left-0 origin-bottom bg-[#09090B]"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 0, 0.36, 1] }}
      />
      <motion.div
        className="fixed top-0 w-full h-screen left-0 origin-top bg-[#09090B]"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 0, 0.36, 1] }}
      />
    </>
  );
}

export default Transition;
