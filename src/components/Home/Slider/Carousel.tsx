import { useState, useEffect } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Carousel({ urls }: { urls: string[] }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isAnimating, setIsAnimating] = useState(false); // Track if animation is in progress

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

  const paginate = (newDirection: number) => {
    if (isAnimating) return; // Prevent further clicks if an animation is in progress
    setDirection(newDirection);
    setIsAnimating(true); // Set animating state to true before changing imageIndex

    setImageIndex((prevIndex) => {
      const newIndex = prevIndex + newDirection;
      if (newIndex < 0) return urls.length - 1;
      if (newIndex >= urls.length) return 0;
      return newIndex;
    });
  };

  // Reset animation state when the transition ends
  const handleTransitionEnd = () => {
    setIsAnimating(false);
  };

  // Set interval to change the image every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(imageIndex); // Move to the next image
    }, 1000); // 10000ms = 10 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, [imageIndex, paginate]); // Runs when imageIndex changes to avoid multiple intervals

  return (
    <div className="relative flex items-center justify-center w-full h-screen overflow-hidden bg-black">
      {/* Image Container */}
      <div className="relative z-0 w-full h-full">
        <AnimatePresence custom={direction}>
          <motion.img
            key={urls[imageIndex]} // Asegúrate de que sea único
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
            onAnimationComplete={handleTransitionEnd} // When animation completes, reset the animating state
          />
        </AnimatePresence>
      </div>

      {/* Buttons */}
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

      {/* Indicators */}
      <div className="absolute z-10 flex gap-3 transform -translate-x-1/2 bottom-10 left-1/2">
        {urls.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > imageIndex ? 1 : -1);
              setImageIndex(index);
            }}
            className={`w-3 h-3 rounded-full ${
              index === imageIndex ? "bg-green-500" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
