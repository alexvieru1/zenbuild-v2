"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const servicii = [
  {
    title: "Locuințe",
    description:
      "Construim și renovăm case, apartamente și vile, adaptându-ne nevoilor și preferințelor fiecărui client.",
  },
  {
    title: "Spații de lucru",
    description:
      "Amenajăm și renovăm birouri, studiouri și alte spații de lucru, creând medii funcționale și estetice care să stimuleze productivitatea și confortul.",
  },
  {
    title: "Spații de relaxare",
    description:
      "Construim și amenajăm terase, grădini, piscine și alte spații de relaxare, transformând exteriorul locuinței dumneavoastră într-un refugiu personal.",
  },
  {
    title: "Anexe și garaje",
    description:
      "Realizăm construcții de anexe, garaje și alte structuri auxiliare, adăugând valoare și funcționalitate proprietății dumneavoastră.",
  },
  {
    title: "Consultanță și suport",
    description:
      "Oferim consultanță pe tot parcursul proiectului, asigurându-ne că sunteți informat și implicat în fiecare etapă.",
  },
  {
    title: "Managementul materialelor",
    description:
      "Gestionăm achiziția și livrarea materialelor necesare pentru proiectul dumneavoastră, colaborând cu furnizori de încredere pentru a garanta calitatea acestora.",
  },
  {
    title: "Execuție și supraveghere",
    description:
      "Echipa noastră de profesioniști se asigură că fiecare etapă a proiectului este realizată la cele mai înalte standarde.",
  },
  {
    title: "Servicii post-renovare",
    description:
      "Oferim asistență și suport după finalizarea proiectului pentru a ne asigura că sunteți complet mulțumit de rezultat.",
  },
];

const FiziceAbout = () => {
  return (
    <div className="w-full 4xs:p-2 lg:p-8">
      <h2 className="text-center mb-4 4xs:text-md font-semibold">
        Servicii de construcție și renovare:
      </h2>
      <div className="flex justify-center">
        <div className="w-[80%]">
          {servicii.map((serviciu, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value={`item-${index + 1}`}>
                <AccordionTrigger>{serviciu.title}</AccordionTrigger>
                <AccordionContent>{serviciu.description}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>

      <div className="mt-12 p-8">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <h3 className="text-lg font-semibold mb-2">
            Oportunități de angajare pentru persoane fizice:
          </h3>
          <p>
            Suntem întotdeauna în căutarea de profesioniști dedicați și
            talentați pentru a se alătura echipei noastre sau pentru colaborări
            pe termen scurt. Dacă sunteți o persoană fizică cu experiență în
            domeniul construcțiilor, suntem interesați să discutăm despre
            oportunitățile de colaborare sau angajare.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <h3 className="text-lg font-semibold mb-2">
            De ce să alegeți Zen Build?
          </h3>
          <ul className="list-disc ml-5">
            <li>
              Experiență și profesionalism: Echipa noastră are o experiență
              vastă în domeniul construcțiilor și renovărilor, oferind servicii
              de calitate superioară.
            </li>
            <li>
              Calitate și atenție la detalii: Ne dedicăm fiecărui proiect cu
              atenție la detalii, asigurându-ne că rezultatele sunt impecabile
              și durabile.
            </li>
            <li>
              Transparență și comunicare: Menținem o comunicare deschisă și
              transparentă pe tot parcursul proiectului, pentru a vă asigura că
              sunteți mereu informat.
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <p>
            Contactați-ne pentru a discuta despre proiectul dumneavoastră sau
            pentru a afla cum puteți deveni parte din echipa noastră. Suntem
            aici pentru a transforma visurile în realitate și pentru a colabora
            cu profesioniști de top.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FiziceAbout;
