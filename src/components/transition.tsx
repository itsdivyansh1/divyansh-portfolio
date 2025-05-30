import { motion } from "motion/react";

const calculateRandomBlockDealy = (rowIndex: number, totalRows: number) => {
  const blockDelay = Math.random() * 0.5;
  const rowDelay = (totalRows - rowIndex - 1) * 0.05;
  return blockDelay + rowDelay;
};

const Transtion = ({ children }: any) => {
  return (
    <>
      {children}

      <div className="fixed top-0 left-0 w-screen h-screen flex flex-col pointer-events-none">
        {Array.from({ length: 10 }).map((_, rowIndex) => (
          <div className="flex flex-1 w-full" key={rowIndex}>
            {Array.from({ length: 11 }).map((_, blockIndex) => (
              <motion.div
                key={blockIndex}
                className="relative flex-1 bg-gray-900 bg-noise -m-[0.25px] origin-top"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                  delay: calculateRandomBlockDealy(rowIndex, 10),
                }}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="fixed top-0 left-0 w-screen h-screen flex flex-col pointer-events-none">
        {Array.from({ length: 10 }).map((_, rowIndex) => (
          <div className="flex flex-1 w-full" key={rowIndex}>
            {Array.from({ length: 11 }).map((_, blockIndex) => (
              <motion.div
                key={blockIndex}
                className="relative flex-1 bg-gray-900 bg-noise -m-[0.25px] origin-bottom"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                  delay: calculateRandomBlockDealy(rowIndex, 10),
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Transtion;
