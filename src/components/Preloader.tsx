import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [isExiting, setIsExiting] = useState(false);
  const letters = "L O A D I N G".split(" ");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onComplete, 600);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="flex gap-2 md:gap-4">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                className="text-2xl md:text-4xl lg:text-5xl font-display font-bold tracking-[0.3em]"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 50%, hsl(var(--muted-foreground)) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  y: [20, 0, 0, -20],
                }}
                transition={{
                  duration: 2,
                  delay: index * 0.1,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                  times: [0, 0.2, 0.8, 1],
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Ambient glow effect */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
