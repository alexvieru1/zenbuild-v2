'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HomeServices = () => {
    return (
        <div className="flex items-center justify-center w-full">
          <div className=" mt-20 p-5 flex flex-col items-center 4xs:w-full lg:w-[60%] 4xs:h-full lg:h-[80%]">
            <div className="flex w-[96%] 4xs:flex-col lg:flex-row justify-between items-center p-5">
              <div className="flex">
                <h6 className="text-md uppercase text-[#bb835e]">
                  Serviciile noastre
                </h6>
              </div>
              <div className="flex">
                <Link href="/servicii">
                  <Button className="bg-[#bb835e] hover:bg-[#bb835e]/75">
                    TOATE SERVICIILE
                  </Button>
                </Link>
              </div>
            </div>
            <div className="grid 4xs:grid-cols-1 xl:grid-cols-3 lg:w-[98%]">
              <div className="flex flex-col justify-center items-center">
                <Image src="/images/rigips.jpg" width={300} height={300} alt="img" />
                <motion.div
                  className="bg-white border-[1px] border-[#bb835e] flex flex-col justify-start items-center w-[80%] h-[30%] p-6"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{
                    opacity: 1,
                    y: -200,
                    transition: { duration: 1, delay: 0.5 },
                  }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-semibold text-md">Montaj Rigips</h2>
                  <p className="text-center py-5">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt
                  </p>
                </motion.div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <Image src="/images/electric.jpg" width={300} height={300} alt="img" />
                <motion.div
                  className="bg-white border-[1px] border-[#bb835e] flex flex-col justify-start items-center w-[80%] h-[30%] p-6"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{
                    opacity: 1,
                    y: -200,
                    transition: { duration: 1, delay: 0.5 },
                  }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-semibold text-md">Instalații Electrice</h2>
                  <p className="text-center py-5">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt
                  </p>
                </motion.div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <Image src="/images/acoperis.jpg" width={300} height={300} alt="img" />
                <motion.div
                  className="bg-white border-[1px] border-[#bb835e] flex flex-col justify-start items-center w-[80%] h-[30%] p-6"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{
                    opacity: 1,
                    y: -200,
                    transition: { duration: 1, delay: 0.5 },
                  }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-semibold text-md">Acoperișuri</h2>
                  <p className="text-center py-5">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default HomeServices