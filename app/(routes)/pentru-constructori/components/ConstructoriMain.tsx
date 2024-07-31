"use client";
import { Drill, HardHat, PaintRoller } from "lucide-react";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

const ConstructoriMain = () => {
  const constructori = [
    {
      name: "Experienta",
      description:
        "Experiență bogată în domeniul construcțiilor, cu o echipe dedicate și bine pregătite.",
      icon: <HardHat className="mx-2 text-[#bb835e] w-8 h-8 " />,
      info: "Avem o experiență vastă acumulată de-a lungul anilor în realizarea de proiecte de construcție de diverse complexități și dimensiuni. Echipa noastră este formată din profesioniști cu înaltă calificare, care își aduc contribuția în fiecare etapă a proiectului, asigurându-se că toate cerințele și standardele de calitate sunt respectate.",
    },
    {
      name: "Varietate",
      description:
        "Acces la o gamă variată de utilaje moderne și echipamente specializate.",
      icon: <PaintRoller className="mx-2 text-[#bb835e] w-8 h-8" />,
      info: "Acces la o gamă variată de utilaje moderne și echipamente specializate, care ne permit să abordăm eficient orice tip de proiect de construcții, de la realizarea fundațiilor solide și structurilor complexe până la finisaje de înaltă calitate și lucrări de detaliu, garantând astfel precizia, siguranța și durabilitatea fiecărui proiect finalizat.",
    },
    {
      name: "Angajament",
      description:
        "Angajament pentru calitate și respectarea termenelor de livrare.",
      icon: <Drill className="mx-2 text-[#bb835e] w-8 h-8" />,
      info: "Ne angajăm să oferim cele mai înalte standarde de calitate în toate aspectele muncii noastre, de la planificare și execuție până la livrare. Ne concentrăm pe respectarea termenelor stabilite, pentru a ne asigura că toate proiectele sunt finalizate la timp și conform specificațiilor.",
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center p-8">
      <h1 className="w-[80%] text-xl font-semibold text-center my-8">
        Ce Oferim
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {constructori.map((constructor, index) => (
          <Card key={index} className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg ">
                <div className="flex justify-start items-center">
                  {constructor.icon}
                  <p>{constructor.name}</p>
                </div>
              </CardTitle>
              <CardDescription>{constructor.description}</CardDescription>
            </CardHeader>
            <CardContent>{constructor.info}</CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-20 my-10 p-2">
          <motion.div
            initial={{ x: "-100px", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
          >
            <h1 className="text-lg font-semibold">Cum putem colabora?</h1>
            <ul>
              <li> • Proiecte de construcții noi sau de renovare.</li>
              <li>
                {" "}
                • Lucrări de finisaje și amenajări interioare și exterioare.
              </li>
              <li> • Dezvoltări imobiliare în parteneriat.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ x: "100px", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 2, duration: 1, ease: "easeInOut" }}
          >
            <h1 className="text-lg font-semibold">Contact</h1>
            <p>Strada Exemplu, Nr. 123, Oraș, Țară</p>
            <p>Telefon: +40 123 456 789</p>
            <p>Email: contact@exemplu.com</p>
            <p>CUI: 12345678</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ConstructoriMain;
