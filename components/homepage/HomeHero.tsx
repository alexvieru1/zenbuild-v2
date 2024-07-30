"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const images = [
  "/images/hero-1.jpg",
  "/images/hero-2.webp",
  "/images/hero-3.jpg"
];

const HomeHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const handleScroll = () => {
    const section = document.getElementById("despre-noi");
    if (section) {
      const yOffset = -75; // Adjust this value to set the scroll position higher
      const yPosition = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="w-full h-screen flex items-center justify-center relative overflow-hidden">
        <AnimatePresence>
          {images.map((image, index) => (
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
          ))}
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
            Construcții de Calitate, Proiecte Durabile
          </h1>
          <p className="flex justify-center items-center place-self-center 4xs:text-xs md:text-md text-center md:mt-4">
            Suntem partenerul tău de încredere în dezvoltarea imobiliară și
            construcțiile de calitate superioară
          </p>
          <div className="flex 4xs:flex-col lg:flex-row gap-4 justify-center items-center 4xs:mt-4 md:mt-16">
            <Button className="" onClick={handleScroll}>
              Descoperă Mai Mult
            </Button>
            <Link href="/contact">
              <Button variant={"secondary"}>Suna-ne</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeHero;
