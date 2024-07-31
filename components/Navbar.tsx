"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" passHref onClick={closeMenu}>
              <Image
                src="/images/logo-fundal-transparent.png"
                alt="Logo"
                width={100}
                height={100}
                className="mt-1"
              />
            </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="text-gray-800 hover:text-[#bb835e] px-3 py-2 rounded-md text-md font-medium"
                >
                  Acasa
                </Link>
                <Link
                  href="/servicii"
                  className="text-gray-800 hover:text-[#bb835e] px-3 py-2 rounded-md text-md font-medium"
                >
                  Servicii
                </Link>
                <Link
                  href="/dezvoltari-imobiliare"
                  className="text-gray-800 hover:text-[#bb835e] px-3 py-2 rounded-md text-md font-medium"
                >
                  Dezvoltări Imobiliare
                </Link>
                <Link
                  href="/inchirieri-utilaje"
                  className="text-gray-800 hover:text-[#bb835e] px-3 py-2 rounded-md text-md font-medium"
                >
                  Închirieri Utilaje{" "}
                </Link>
                <Link
                  href="/pentru-constructori"
                  className="text-gray-800 hover:text-[#bb835e] px-3 py-2 rounded-md text-md font-medium"
                >
                  Pentru constructori
                </Link>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 },
        }}
        className="lg:hidden overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 text-end space-y-1 sm:px-3">
          <Link
            href="/"
            className="block text-gray-800 hover:text-[#bb835e] px-3 py-2 rounded-md text-base font-medium"
            onClick={closeMenu}
          >
            Acasa
          </Link>
          <Link
            href="/servicii"
            className="block text-gray-800 hover:text-[#bb835e] px-3 py-2 rounded-md text-base font-medium"
            onClick={closeMenu}
          >
            Servicii
          </Link>
          <Link
            href="/dezvoltari-imobiliare"
            className="block text-gray-800 hover:text-[#bb835e] px-3 py-2 rounded-md text-base font-medium"
            onClick={closeMenu}
          >
            Dezvoltări Imobiliare
          </Link>
          <Link
            href="/inchirieri-utilaje"
            className="block text-gray-800 hover:text-[#bb835e] px-3 py-2 rounded-md text-base font-medium"
            onClick={closeMenu}
          >
            Închirieri Utilaje
          </Link>
          <Link
            href="/pentru-constructori"
            className="block text-gray-800 hover:text-[#bb835e] px-3 py-2 rounded-md text-base font-medium"
            onClick={closeMenu}
          >
            Pentru constructori
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
