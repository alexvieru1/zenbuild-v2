import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-[#22333B] text-white py-8 flex">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-evenly mb-8 lg:space-x-32">
          <div className="mb-6 md:mb-0 md:w-1/3">
            <h2 className="text-sm font-semibold mb-2">
              Adresa noastră fizică
            </h2>
            <p className="text-xs">
              B-dul Iuliu Maniu Nr. 7, Sector 6, Cladirea U, Sc. 2, etaj 2,
              Office U1, Bucuresti
            </p>
          </div>
          <div className="mb-6 md:mb-0 md:w-1/3">
            <h2 className="text-sm font-semibold mb-2">
              Datele noastre de contact
            </h2>
            <Link href="tel:+40764696008">
              <p className="text-xs">Telefon: +40764 696 008</p>
            </Link>
            <Link href="mailto:office@zenbuild.ro">
              <p>Email: office@zenbuild.ro</p>
            </Link>
          </div>
          <div className="md:w-1/3">
            <h2 className="text-sm font-semibold mb-2">
              Cod unic de identificare (CUI)
            </h2>
            <p className="text-xs">CUI: 50139928</p>
          </div>
        </div>
        <div className="border-t border-gray-600 pt-4 text-xs">
          <p className="text-center">
            &copy; 2024 ZenBuild SRL. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
