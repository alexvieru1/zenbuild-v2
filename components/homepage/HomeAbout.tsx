"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedCounter from "../AnimatedCounter";

const HomeAbout = () => {
  const [isCounterVisible, setIsCounterVisible] = useState(false);

  return (
    <div
      id="despre-noi"
      className="flex 4xs:flex-col lg:flex-row justify-around overflow-hidden"
    >
      <div className="flex 4xs:flex-col lg:flex-row justify-around 4xs:w-full lg:w-[80%] mt-4">
        <div className="flex justify-end items-center min-h-[70vh] lg:w-[50vw] lg:mr-5">
          <div className="flex-col justify-start items-start text-end px-5 z-10">
            <motion.div
              className="border-white border-t-[20px] border-b-[20px] border-r-[15px]"
              initial={{ opacity: 0, x: -200 }}
              whileInView={{
                opacity: 1,
                x: 100,
                transition: { duration: 1, delay: 0.5 },
              }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/hero-4.jpg"
                width={600}
                height={600}
                alt="img"
              />
            </motion.div>
            <motion.div
              className="p-2"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1, delay: 1 },
              }}
              onViewportEnter={() => setIsCounterVisible(true)}
              viewport={{ once: true }}
            >
              {isCounterVisible && (
                <AnimatedCounter
                  count={50}
                  classNameText="text-2xl text-[#bb835e] font-semibold"
                  classNameDiv="flex flex-row justify-end items-end"
                  delayAmount={3}
                  classNameSup="my-auto text-lg text-[#bb835e] font-semibold"
                />
              )}
              <h1 className="font-semibold"> ani de experienta</h1>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{
              opacity: 1,
              x: -10,
              transition: { duration: 1, delay: 2 },
            }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/despre-2.jpg"
              width={1000}
              height={1000}
              alt="img"
            />
          </motion.div>
        </div>
        <div className="min-h-[70vh] lg:w-[50vw] lg:ml-5 flex flex-col p-10">
          <h6 className="text-md text-[#bb835e] ">DESPRE NOI</h6>
          <h2 className="text-xl text-center font-semibold mt-4">
            Transformăm viziuni în realitate
          </h2>
          <div className="gap-y-2 text-md text-start">
            <p>
              Suntem o echipă de profesioniști dedicați, cu o experiență vastă
              în domeniul construcțiilor, pregătiți să oferim soluții inovatoare
              și durabile pentru fiecare proiect. Fie că este vorba despre
              construcții rezidențiale, comerciale sau industriale, ne asigurăm
              că fiecare detaliu este executat cu precizie și pasiune. Credem în
              puterea colaborării și a calității, valori care ne ghidează în
              toate etapele procesului de construcție. Cu Zen Build, fiecare
              proiect devine o operă de artă, realizată la cele mai înalte
              standarde.
            </p>
          </div>
          <div className="flex justify-between mt-6 items-center">
            <motion.div
              className="p-2 mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1, delay: 1 },
              }}
              onViewportEnter={() => setIsCounterVisible(true)}
              viewport={{ once: true }}
            >
              {isCounterVisible && (
                <AnimatedCounter
                  count={110000}
                  classNameText="4xs:text-4xl md:text-2xl text-[#bb835e] font-semibold"
                  classNameDiv="flex flex-row justify-end items-end"
                  delayAmount={3}
                  classNameSup="my-auto text-lg text-[#bb835e] font-semibold"
                />
              )}
              <h1 className="4xs:text-lg 4xs:text-center md:text-start md:text-base font-semibold">
                clienti satisfacuti
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 2 },
              }}
              viewport={{ once: true }}
            >
              <Image
                className="4xs:hidden md:block"
                src="/images/despre-1.jpg"
                width={300}
                height={150}
                alt="img"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
