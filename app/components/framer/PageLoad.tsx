'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageLoad = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  // grid config (should match Tailwind grid classes)
  const cols = 5 ;// sm:grid-cols-5
  const rows = 4 ;// total = cols * rows = 20
  const totalBoxes = cols * rows;

  // generate diagonal wave delays
  const delaysRef = useRef<number[]>([]);
  if (delaysRef.current.length === 0) {
    const step = 0.08; // delay between each diagonal
    delaysRef.current = Array.from({ length: totalBoxes }, (_, i) => {
      const row = Math.floor(i / cols);
      const col = i % cols;
      return (row + col) * step;
    });
  }

  useEffect(() => {
    const duration = 0.25;
    const maxDelay = Math.max(...delaysRef.current);
    const total = (maxDelay + duration + 0.1) * 1000;
    const t = setTimeout(() => setIsLoading(false), total);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="grid sm:grid-cols-5 grid-cols-4 w-full h-screen fixed z-50"
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            {delaysRef.current.map((delay, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ delay, duration: 0.3, ease: 'linear' }}
                className="w-full bg-foreground"
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </>
  );
};

export default PageLoad;
