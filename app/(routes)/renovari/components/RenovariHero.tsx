"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/images/renovari-1.jpg",
  "/images/renovari-2.jpg",
  "/images/renovari-3.jpg",
];

const RenovariHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div className="w-full h-[70vh] flex items-center justify-center relative overflow-hidden">
        <AnimatePresence>
          {images.map(
            (image, index) =>
              index === currentSlide && (
                <motion.div
                  key={index}
                  className="absolute w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                />
              )
          )}
        </AnimatePresence>
        <motion.div
          className="w-[70vw] h-auto p-5 relative z-10 flex-col place-self-center justify-center items-center bg-white dark:bg-gray-600 bg-opacity-75 dark:bg-opacity-75"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.3, delay: 0 },
          }}
          viewport={{ once: true }}
        >
          <h1 className="flex justify-center items-center 4xs:text-lg md:text-2xl font-semibold">
            Renovări
          </h1>
          <p className="flex justify-center items-center place-self-center 4xs:text-base md:text-md text-center md:mt-4">
            La Zen Build suntem dedicați să transformăm fiecare spațiu într-un
            loc de vis. Echipa noastră profesionistă oferă servicii complete de
            renovare, acoperind toate aspectele necesare pentru a realiza
            proiectul la cele mai înalte standarde de calitate.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default RenovariHero;
