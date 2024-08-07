"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = ["/images/pc-1.jpeg", "/images/pc-2.jpg", "/images/pc-3.webp"];

const FiziceHero = () => {
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
            Persoane Fizice
          </h1>
          <p className="flex justify-center items-center place-self-center 4xs:text-base md:text-md text-center md:mt-4">
            La Zen Build, suntem dedicați să oferim servicii complete de
            construcție și renovare pentru persoane fizice. Indiferent de
            dimensiunea sau complexitatea proiectului, suntem pregătiți să
            transformăm ideile dumneavoastră în realitate.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FiziceHero;
