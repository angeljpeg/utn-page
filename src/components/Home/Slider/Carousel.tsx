import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Carousel({ urls }: { urls: string[] }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isAnimating, setIsAnimating] = useState(false);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      zIndex: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      zIndex: 0,
    }),
  };

  const paginate = useCallback(
    (newDirection: number) => {
      if (isAnimating) return;
      setDirection(newDirection);
      setIsAnimating(true);

      setImageIndex((prevIndex) => {
        const newIndex = prevIndex + newDirection;
        return (newIndex + urls.length) % urls.length;
      });
    },
    [isAnimating, urls.length]
  );

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, [paginate]);

  const handleAnimationComplete = () => {
    setIsAnimating(false);
  };

  const getIndicatorClass = (index: number) =>
    `w-3 h-3 rounded-full duration-300 p-2 border ${index === imageIndex ? "bg-green-500/80 scale-110 border-green-500" : "bg-gray-400/80 scale-75 border-white"}`;

  return (
    <div className="relative flex items-center justify-center w-full h-screen overflow-hidden bg-black">
      <div className="relative z-0 w-full h-full">
        <AnimatePresence custom={direction}>
          <motion.img
            key={urls[imageIndex]}
            src={urls[imageIndex]}
            alt={`Slide ${imageIndex + 1}`}
            className="absolute top-0 left-0 object-cover w-full h-full"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.5}
            onDragEnd={(_, info: PanInfo) => {
              const swipe = info.offset.x > 100 ? -1 : info.offset.x < -100 ? 1 : 0;
              if (swipe !== 0) paginate(swipe);
            }}
            onAnimationComplete={handleAnimationComplete}
          />
        </AnimatePresence>
      </div>

      <button
        onClick={() => paginate(-1)}
        className="absolute z-10 p-2 text-white -translate-y-1/2 rounded-full top-1/2 left-5 bg-black/30 hover:bg-black/50"
        aria-label="Previous Image"
      >
        <ArrowBackIosNewIcon />
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute z-10 p-2 text-white -translate-y-1/2 rounded-full top-1/2 right-5 bg-black/30 hover:bg-black/50"
        aria-label="Next Image"
      >
        <ArrowForwardIosIcon />
      </button>

      <div className="absolute z-10 flex gap-3 transform -translate-x-1/2 bottom-32 left-1/2">
        {urls.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > imageIndex ? 1 : -1);
              setImageIndex(index);
            }}
            className={getIndicatorClass(index)}
          />
        ))}
      </div>
    </div>
  );
}
